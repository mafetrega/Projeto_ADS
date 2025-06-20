import "../../../bootstrap/app.js";
import ModelComunicados from "../../Models/ModelsComunicados/ModelComunicados.js";

export default (function () {

    return {
        // GET /Avaliacoes/:id
        get: async (req, res) => {
            const id = req.params.id;

            try {
                const comunicado = await ModelComunicados.findByPk(id);

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
