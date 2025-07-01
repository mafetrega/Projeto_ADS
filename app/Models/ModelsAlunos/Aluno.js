
import { DataTypes } from 'sequelize';
import sequelize from '../../../config/sequelize.js';

const Aluno =  sequelize.define('Aluno', {
  aluno_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: 'alunos',
    timestamps: false,
  });

export default Aluno;