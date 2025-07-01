import "../../../bootstrap/app.js";
import ModelAvaliacoes from "../../Models/ModelsAvaliacoes/ModelAvaliacoes.js";
import Aluno from "../../Models/ModelsAlunos/Aluno.js";
import ModelTurma from "../../Models/ModelsTurma/ModelTurma.js";
//import ModelProfessores from "../../Models/ModelsProfessores/ModelProfessores.js";

export default (function () {

    return {
        // GET /Avaliacoes/:id
        get: async (req, res) => {
            const id = req.params.id;

            try {
                const avaliacao = await ModelAvaliacoes.findByPk(id, {
                    include: [
                        {
                            model: Aluno,
                            as: 'aluno',
                        },
                        {
                            model: ModelTurma,
                            as: 'turma',
                        },
                        // {
                        //   model: ModelProfessores,
                        // as: 'professor',
                        //}
                    ]
                });

                if (!avaliacao) {
                    return res.status(404).json({ error: "Avaliação não encontrada." });
                }

                return res.status(200).json(avaliacao);
            } catch (error) {
                return res.status(500).json({ error: "Erro de servidor." });
            }
        }
    }
})();
