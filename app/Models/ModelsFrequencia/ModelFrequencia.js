import sequelize from '../../../config/sequelize.js';
import { DataTypes } from 'sequelize';

/*CREATE TABLE
    frequencia (
        frequenciaid SERIAL PRIMARY KEY,
        aluno_id INT NOT NULL,
        turma_id INT NOT NULL,
        data TIMESTAMP NOT NULL,
        presente BOOLEAN,
        observacoes TEXT,
        ...
    );
*/

const Frequencia = sequelize.define('Frequencia', {
    frequencia_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'frequenciaid' // <-- nome real da coluna
    },
    aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'aluno_id'
    },
    turma_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'turma_id'
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'data'
    },
    presente: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'presente'
    },
    observacoes: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'observacoes'
    }
}, {
    tableName: 'frequencia',
    timestamps: false
});

export default Frequencia;