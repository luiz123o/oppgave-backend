import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    /**
     * Validação de informações do Usuario.
     */
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }
    /**
     * Sistema de Validação do usuario.
     */
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    // Verifico se o usuario existe utilizando o user que carrega as informações do email.
    if (!user) {
      return res.status(401).json({ error: 'user not found' });
    }
    // Verifico se a senha corresponde
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}
export default new SessionController();
