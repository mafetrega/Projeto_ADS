import sequelize from '../../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {

    /*turma (
        turma_id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        professor_id INT, -- Chave estrangeira para a tabela Professores
        anoletivo INT,
        descricao TEXT,
        FOREIGN KEY (professor_id) REFERENCES professores (professor_id) -- Relacionamento Turma com Professores (1:N)
    );
    */

    return sequelize.define(
        "turma",
        {
            turma_id: { // Chave primária
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nome: { // Tipo de comunicado
                type: DataTypes.VARCHAR(100),
                allowNull: false
            },
            professor_id: { // Data de publicação do comunicado
                type: DataTypes.INTEGER,
                allowNull: false
            },

            anoletivo: { // Título do comunicado
                type: DataTypes.INTEGER,
                allowNull: false
            },
            descricao: { // Mensagem do comunicado
                type: DataTypes.TEXT,
                allowNull: false
            },
        },
        {
            tableName: "turma",
            timestamps: false
        }
    );

})();
