import "../../../bootstrap/app.js";
import ModelRefeicoes from "../../Models/ModelsRefeicoes/ModelRefeicoes.js";
export default (function () {
    const MAX_LIMIT = 100;

    /*-- Tabela Refeicoes
CREATE TABLE
    refeicoes (
        refeicao_id SERIAL PRIMARY KEY,
        data TIMESTAMP NOT NULL,
        tipo_refeicao VARCHAR(50),
        descricao TEXT,
        observacoes TEXT
    );
    */

    return {
        // GET /Refeicoes
        list: async (req, res) => {
            // req.query = query vars

            const limit = parseInt(req.query.limit) || 100;
            const offset = parseInt(req.query.offset) || 0;

            if (limit > MAX_LIMIT) {
                return res.status(400).json({ error: "Limit máximo: 100." });
            }

            const refeicoes = await ModelRefeicoes.findAll({
                limit: limit + 1, // Para verificar se há mais registros
                offset: offset,
                order: [["refeicao_id", "ASC"]],
            });

            const temMais = refeicoes.length > limit;
            let rows = refeicoes;

            const resposta = {
                rows: temMais ? refeicoes.slice(0, limit) : refeicoes,
                limit: limit,
                next: temMais ? offset + limit : null,
            };

            return res.status(200).json(resposta);

            // refeicoesModel.findAll(options: {...})
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