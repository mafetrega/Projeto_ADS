import sequelize from '../../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {

    /* CREATE TABLE avaliacoes (
        avaliacao_id SERIAL PRIMARY KEY,
        aluno_id INT NOT NULL, -- Chave estrangeira para a tabela Alunos
        turma_id INT NOT NULL, -- Chave estrangeira para a tabela Turma
        professor_id INT NOT NULL, -- Chave estrangeira para a tabela Professores
        data_avaliacao TIMESTAMP NOT NULL,
        tipoavaliacao VARCHAR(100),
        nota DECIMAL(5, 2),
        observacoes TEXT,
        FOREIGN KEY (aluno_id) REFERENCES alunos (aluno_id), -- Relacionamento Avaliações com Alunos (1:N)
        FOREIGN KEY (turma_id) REFERENCES turma (turma_id), -- Relacionamento Avaliações com Turma (1:N)
        FOREIGN KEY (professor_id) REFERENCES professores (professor_id) -- Relacionamento Avaliações com Professores (1:N)
    );
    */

    return sequelize.define(
        "ModelAvaliacoes",
        {
            avaliacao_id: { // Chave primária
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            aluno_id: { // Chave estrangeira para a tabela Alunos
                type: DataTypes.INTEGER,
                allowNull: false
            },
            turma_id: { // Chave estrangeira para a tabela Turma
                type: DataTypes.INTEGER,
                allowNull: false
            },
            professor_id: { // Chave estrangeira para a tabela Professores
                type: DataTypes.INTEGER,
                allowNull: false
            },
            data_avaliacao: { // Data e hora da avaliação
                type: DataTypes.DATE,
                allowNull: false
            },
            tipoavaliacao: { // Tipo da avaliação
                type: DataTypes.STRING(100),
                allowNull: true
            },
            nota: { // Nota da avaliação
                type: DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            observacoes: { // Observações sobre a avaliação
                type: DataTypes.TEXT,
                allowNull: true
            }
        },
        {
            tableName: "avaliacoes", // Nome da tabela no banco de dados
            timestamps: false
        }
    );

})();
