import CONSTANTS from "../../../config/constants.js"; // ajuste o caminho se necessário
import ModelRefeicoes from "../../Models/ModelsRefeicoes/ModelRefeicoes.js";

export default {
    delete: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;
        const refeicao_id = request.params.id;

        try {
            const rowsDeleted = await ModelRefeicoes.destroy({
                where: { refeicao_id }
            });

            if (rowsDeleted === 0) {
                return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Refeição com id ${refeicao_id} não existe!` });
            }

            return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
        }
    }
};