import "../../../bootstrap/app.js";
import ModelComunicados from "../../Models/ModelsComunicados/ModelComunicados.js";
import Aluno from "../../Models/ModelsAlunos/Aluno.js";
import ModelTurma from "../../Models/ModelsTurma/ModelTurma.js";
import ModelResponsaveis from "../../Models/ModelResponsaveis/ModelResponsaveis.js";

export default (function () {

    return {
        // GET /Avaliacoes/:id
        get: async (req, res) => {
            const id = req.params.id;

            try {
                const comunicado = await ModelComunicados.findByPk(id, {
                    include: [
                        {
                            model: Aluno,
                            as: 'aluno',
                        },
                        {
                            model: ModelTurma,
                            as: 'turma',
                        },
                        {
                            model: ModelResponsaveis,
                            as: 'responsavel',
                        }
                    ]
                });

                if (!comunicado) {
                    return res.status(404).json({ error: "Comunicado não encontrado." });
                }

                return res.status(200).json(comunicado);
            } catch (error) {
                return res.status(500).json({ error: "Erro de servidor." });
            }
        }
    }
})();
