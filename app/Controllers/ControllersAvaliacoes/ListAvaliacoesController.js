import "../../bootstrap/app.js";
import AvaliacoesModel from "../../Models/ModelsAvaliacoes/ModelsAvaliacoes.js";

export default (function () {
    const MAX_LIMIT = 100;

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

    return {
        // GET /Avaliacoes
        list: async (req, res) => {
            // req.query = query vars

            const limit = parseInt(req.query.limit) || 100;
            const offset = parseInt(req.query.offset) || 0;

            if (limit > MAX_LIMIT) {
                return res.status(400).json({ error: "Limit máximo: 100." });
            }

            const avaliacoes = await AvaliacoesModel.findAll({
                limit: limit + 1, // Para verificar se há mais registros
                offset: offset,
                order: [["avaliacao_id", "ASC"]],
            });

            const temMais = avaliacoes.length > limit;
            let rows = avaliacoes;

            const resposta = {
                rows: temMais ? avaliacoes.slice(0, limit) : avaliacoes,
                limit: limit,
                next: temMais ? offset + limit : null,
            };

            return res.status(200).json(resposta);

            // AvaliacoesModel.findAll(options: {...})
            // limit: int
            // offset: int
            // order: [field, ASC or DESC]

            try {
            } catch (error) {
                return res.status(500).json({ error: "Error de servidor." });
            }
        },

    };
})();