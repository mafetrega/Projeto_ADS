import "../../../bootstrap/app.js";
import ModelAvaliacoes from "../../Models/ModelsAvaliacoes/ModelAvaliacoes.js";
import Aluno from "../../Models/ModelsAlunos/Aluno.js";
import ModelTurma from "../../Models/ModelsTurma/ModelTurma.js";
//import ModelProfessores from "../../Models/ModelsProfessores/ModelProfessores.js";


export default (function () {
    const MAX_LIMIT = 100;

    return {
        // GET /Avaliacoes
        list: async (req, res) => {
            const limit = parseInt(req.query.limit) || 100;
            const offset = parseInt(req.query.offset) || 0;

            if (limit > MAX_LIMIT) {
                return res.status(400).json({ error: "Limit máximo: 100." });
            }

            try {
                const avaliacoes = await ModelAvaliacoes.findAll({
                    limit: limit + 1, // Para verificar se há mais registros
                    offset: offset,
                    order: [["avaliacao_id", "ASC"]],
                    include: [
                        {
                            model: Aluno,
                            as: 'aluno',
                        },
                        {
                            model: ModelTurma,
                            as: 'turma',
                        },
                        //{
                        //    model: ModelProfessores,
                        //    as: 'professor',
                        //}
                    ]
                });

                const temMais = avaliacoes.length > limit;

                const resposta = {
                    rows: temMais ? avaliacoes.slice(0, limit) : avaliacoes,
                    limit: limit,
                    next: temMais ? offset + limit : null,
                };

                return res.status(200).json(resposta);
            } catch (error) {
                return res.status(500).json({ error: "Erro de servidor." });
            }
        },
    };
})();