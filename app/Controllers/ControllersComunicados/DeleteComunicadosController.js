import CONSTANTS from "../../../config/constants.js"; // ajuste o caminho se necessário
import ModelComunicados from "../../Models/ModelsComunicados/ModelComunicados.js";
export default {
    delete: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;
        const comunicado_id = request.params.id;

        try {
            const rowsDeleted = await ModelComunicados.destroy({
                where: { comunicado_id }
            });

            if (rowsDeleted === 0) {
                return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Comunicado com id ${comunicado_id} não existe!` });
            }

            return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
        }
    }
};