import sequelize from '../../../config/sequelize.js';
import { DataTypes } from 'sequelize';

const Frequencia = sequelize.define('Frequencia', {
    frequencia_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    presente: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'frequencia',
    timestamps: false
});

export default Frequencia;