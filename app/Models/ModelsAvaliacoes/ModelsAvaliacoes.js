import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {

    /* 
        Avaliacao_ID SERIAL PRIMARY KEY,
        Aluno_ID INT NOT NULL, -- Chave estrangeira para a tabela Alunos
        Turma_ID INT NOT NULL, -- Chave estrangeira para a tabela Turma
        Professor_ID INT NOT NULL, -- Chave estrangeira para a tabela Professores
        Data_Avaliacao TIMESTAMP NOT NULL,
        TipoAvaliacao VARCHAR(100),
        Nota DECIMAL(5, 2),
        Observacoes TEXT,
        FOREIGN KEY (Aluno_ID) REFERENCES Alunos (Aluno_ID), -- Relacionamento Avaliações com Alunos (1:N)
        FOREIGN KEY (Turma_ID) REFERENCES Turma (Turma_ID), -- Relacionamento Avaliações com Turma (1:N)
        FOREIGN KEY (Professor_ID) REFERENCES Professores (Professor_ID)
    */

    return sequelize.define(
        "AvaliacoesModel",
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
            tipo_avaliacao: { // Tipo da avaliação
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
            tableName: "Avaliacoes", // Nome da tabela no banco de dados
            timestamps: false
        }
    );

})();
