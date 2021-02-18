import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    /**
     * Validação das informações!
     */
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    /**
     * Sistema de Cadastro do Usuario
     */
    // 1° Atribuo ao userExists a informação sobre o email.
    const userExists = await User.findOne({ where: { email: req.body.email } });
    // 2° Realizo a comparação, e retorno o erro caso exista um usuario com mesmo email.
    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    // 3° Crio um novo objeto e atribuo ao user.
    const user = await User.create(req.body);
    // 4° Retorna as informações ao frontEnd.
    return res.json(user);
  }

  async update(req, res) {
    /**
     * Validação das informações!
     */

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmePassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    /**
     * Sistema de Atualização de Cadastro
     */

    // 1° Atribuo os valor a email e oldPassword.
    const { email, oldPassword } = req.body;
    // 2° Atribuo ao user o id do usuario.
    const user = await User.findByPk(req.userId);
    // 3° Comparo o email com o email cadastrado do usuario.
    if (email !== user.email) {
      // 4° Atribuo ao userExists a informação sobre o email.
      const userExists = await User.findOne({ where: { email } });
      // 5° Verifico se o novo email já existe, se Sim retorno Erro 400.
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }
    // 6° Verifico se o oldPassword é igual.
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'Password does match' });
    }
    const { id, name } = await user.update(req.body);
    return res.json({
      id,
      name,
      email,
    });
  }
}
export default new UserController();
