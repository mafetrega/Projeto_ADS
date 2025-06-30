import sequelize from '../../../config/sequelize.js';
import { DataTypes } from 'sequelize';

const Responsavel = sequelize.define('Responsavel', {
    responsavel_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    parentesco: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    endereco: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    observacoes: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'responsaveis',
    timestamps: false
});

export default Responsavel;