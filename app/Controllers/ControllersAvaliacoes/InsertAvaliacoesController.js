import "../../../bootstrap/app.js";

import ModelAvaliacoes from "../../Models/ModelsAvaliacoes/ModelAvaliacoes.js";

export default (function () {

    return {
        // POST /Avaliacoes
        insert: async (req, res) => {
            const aluno_id = req.body.aluno_id;
            const turma_id = req.body.turma_id;
            const professor_id = req.body.professor_id;
            const data_avaliacao = req.body.data_avaliacao;
            const tipoavaliacao = req.body.tipoavaliacao;
            const nota = req.body.nota;
            const observacoes = req.body.observacoes;

            try {
                const avaliacao = await ModelAvaliacoes.create({
                    aluno_id,
                    turma_id,
                    professor_id,
                    data_avaliacao,
                    tipoavaliacao,
                    nota,
                    observacoes
                });

                return res.status(201).json(avaliacao);
            } catch (error) {
                return res.status(500).json({ error: "Erro de servidor." });
            }
        }
    }
})();
