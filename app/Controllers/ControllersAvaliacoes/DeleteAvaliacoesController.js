import ModelAvaliacoes from "../../Models/ModelsAvaliacoes/ModelAvaliacoes.js";
import CONSTANTS from "../../../config/constants.js"; // ajuste o caminho se necessário

export default {
    delete: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;
        const avaliacao_id = request.params.avaliacao_id;

        try {
            const rowsDeleted = await ModelAvaliacoes.destroy({
                where: { avaliacao_id }
            });

            if (rowsDeleted === 0) {
                return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Avaliação com id ${id} não existe!` });
            }

            return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
        }
    }
};