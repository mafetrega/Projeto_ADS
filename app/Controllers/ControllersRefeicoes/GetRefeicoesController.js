import "../../../bootstrap/app.js";
import ModelRefeicoes from "../../Models/ModelsRefeicoes/ModelRefeicoes.js";
export default (function () {

    return {
        // GET /Refeicoes/:id
        get: async (req, res) => {
            const id = req.params.id;

            try {
                const refeicoes = await ModelRefeicoes.findByPk(id);

                if (!refeicoes) {
                    return res.status(404).json({ error: "refeicoes não encontrado." });
                }

                return res.status(200).json(refeicoes);
            } catch (error) {
                return res.status(500).json({ error: "Erro de servidor." });
            }
        }
    }
})();
