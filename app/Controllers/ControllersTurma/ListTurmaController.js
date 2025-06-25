import "../../../bootstrap/app.js";
import ModelTurma from "../../Models/ModelsTurma/ModelTurma.js";
export default (function () {
    const MAX_LIMIT = 100;

    /*turma (
        turma_id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        professor_id INT, -- Chave estrangeira para a tabela Professores
        anoletivo INT,
        descricao TEXT,
        FOREIGN KEY (professor_id) REFERENCES professores (professor_id) -- Relacionamento Turma com Professores (1:N)
    );
    */

    return {
        // GET /Turma
        list: async (req, res) => {
            // req.query = query vars

            const limit = parseInt(req.query.limit) || 100;
            const offset = parseInt(req.query.offset) || 0;

            if (limit > MAX_LIMIT) {
                return res.status(400).json({ error: "Limit máximo: 100." });
            }

            const turma = await ModelTurma.findAll({
                limit: limit + 1, // Para verificar se há mais registros
                offset: offset,
                order: [["turma_id", "ASC"]],
            });

            const temMais = turma.length > limit;
            let rows = turma;

            const resposta = {
                rows: temMais ? turma.slice(0, limit) : turma,
                limit: limit,
                next: temMais ? offset + limit : null,
            };

            return res.status(200).json(resposta);

            // turmaModel.findAll(options: {...})
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