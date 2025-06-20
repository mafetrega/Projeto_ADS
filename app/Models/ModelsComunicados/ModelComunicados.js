import sequelize from '../../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {

    /*CREATE TABLE comunicados (
        comunicado_id SERIAL PRIMARY KEY,
        aluno_id INT, -- Chave estrangeira para a tabela Alunos (pode ser nulo para comunicados gerais)
        turma_id INT, -- Chave estrangeira para a tabela Turma (pode ser nulo se for geral)
        data_publicacao TIMESTAMP NOT NULL,
        tipocomunicado VARCHAR(50) NOT NULL, -- "Ocorrencia" ou "Comunicado"
        titulo VARCHAR(255) NOT NULL,
        mensagem TEXT NOT NULL,
        responsavel_id INT,
        FOREIGN KEY (aluno_id) REFERENCES alunos (aluno_id),
        FOREIGN KEY (turma_id) REFERENCES turma (turma_id),
        FOREIGN KEY (responsavel_id) REFERENCES responsaveis (responsavel_id)
    );
    */

    return sequelize.define(
        "comunicados",
        {
            comunicado_id: { // Chave primária
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            aluno_id: { // Chave estrangeira para Alunos
                type: DataTypes.INTEGER,
                allowNull: true
            },
            turma_id: { // Chave estrangeira para Turma
                type: DataTypes.INTEGER,
                allowNull: true
            },
            data_publicacao: { // Data de publicação do comunicado
                type: DataTypes.DATE,
                allowNull: false
            },
            tipocomunicado: { // Tipo de comunicado
                type: DataTypes.STRING(50),
                allowNull: false
            },
            titulo: { // Título do comunicado
                type: DataTypes.STRING(255),
                allowNull: false
            },
            mensagem: { // Mensagem do comunicado
                type: DataTypes.TEXT,
                allowNull: false
            },
            responsavel_id: { // Chave estrangeira para Responsaveis
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            tableName: "comunicados",
            timestamps: false
        }
    );

})();
