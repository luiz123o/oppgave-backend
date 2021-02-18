import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        completed: Sequelize.BOOLEAN,
        created_at: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}
export default Task;
