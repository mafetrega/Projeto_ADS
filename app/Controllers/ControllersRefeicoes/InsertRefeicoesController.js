import "../../../bootstrap/app.js";

import ModelRefeicoes from "../../Models/ModelsRefeicoes/ModelRefeicoes.js";
export default (function () {

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
        // POST /refeicoes
        insert: async (req, res) => {
            const refeicao_id = req.body.refeicao_id;
            const data = req.body.data;
            const tipo_refeicao = req.body.tipo_refeicao; // "Ocorrencia" ou "refeicoes"
            const descricao = req.body.descricao;
            const observacoes = req.body.observacoes;

            try {
                const refeicoes = await ModelRefeicoes.create({
                    refeicao_id: refeicao_id,
                    data: data,
                    tipo_refeicao: tipo_refeicao, // Corrigido para tipo_refeicao
                    descricao: descricao,
                    observacoes: observacoes,
                });

                return res.status(201).json(refeicoes);
            } catch (error) {
                return res.status(500).json({ error: "Erro de servidor." });
            }
        }
    }
})();
