import "../../../bootstrap/app.js";
import ModelTurma from "../../Models/ModelsTurma/ModelTurma.js";
export default (function () {

    return {
        // GET /Turma/:id
        get: async (req, res) => {
            const id = req.params.id;

            try {
                const turma = await ModelTurma.findByPk(id);

                if (!turma) {
                    return res.status(404).json({ error: "turma não encontrado." });
                }

                return res.status(200).json(turma);
            } catch (error) {
                return res.status(500).json({ error: "Erro de servidor." });
            }
        }
    }
})();
