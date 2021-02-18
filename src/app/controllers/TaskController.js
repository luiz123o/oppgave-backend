import * as Yup from 'yup';
import {
  startOfHour,
  parseISO,
  isBefore,
  startOfDay,
  endOfDay,
} from 'date-fns';

import { Op } from 'sequelize';

import Task from '../models/Task';

class TaskController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const { date } = req.query;
    const parsedDate = parseISO(date);

    /**
     * Sistema de Listagem ordenado por data
     */
    const tasks = await Task.findAll({
      where: {
        user_id: req.userId,
        canceled_at: null,
        date: { [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)] },
      },
      order: ['date'],
      attributes: [
        'id',
        'user_id',
        'date',
        'title',
        'description',
        'completed',
        'created_at',
      ],
      limit: 20,
      offset: (page - 1) * 20,
    });
    return res.json(tasks);
  }

  async store(req, res) {
    /**
     * Validação de Dados
     */
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      date: Yup.date().required(),
      completed: Yup.boolean(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title, description, date, completed } = req.body;
    /**
     * Check se a data é anterior a atual
     */
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }
    const checkAvailability = await Task.findOne({
      where: {
        canceled_at: null,
        date: hourStart,
      },
    });
    if (checkAvailability) {
      return res.status(400).json({ error: 'Task date is not available' });
    }
    /**
     * Sistema de criação de tasks
     */
    const tasks = await Task.create({
      user_id: req.userId,
      user: req.user,
      title,
      description,
      date,
      completed,
    });

    return res.json(tasks);
  }

  async update(req, res) {
    const tasks = await Task.findByPk(req.params.id);
    const { title, description, completed, date } = await tasks.update(
      req.body
    );
    return res.json({ title, description, completed, date });
  }

  async delete(req, res) {
    const tasks = await Task.findByPk(req.params.id);

    /**
     * Bloqueando a exclusão se uruario for diferente.
     */
    if (tasks.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: "you don't have permission to cancel this tasks" });
    }
    tasks.canceled_at = new Date();
    await tasks.save();
    return res.json(tasks);
  }
}
export default new TaskController();
