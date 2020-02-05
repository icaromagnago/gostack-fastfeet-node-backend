import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(connection) {
    super.init(
      {
        nome: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.INTEGER,
        complemento: Sequelize.STRING,
        estado: Sequelize.STRING,
        cidade: Sequelize.STRING,
        cep: Sequelize.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
}

export default Recipient;
