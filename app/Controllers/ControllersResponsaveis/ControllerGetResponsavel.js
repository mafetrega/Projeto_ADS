import CONSTANTS from "../../../config/constants.js";
import ResponsavelModel from "../../Models/ModelResponsaveis/ModelResponsaveis.js";

export default {
    get: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;
        const id = request.params.id;

        try {
            const responsavel = await ResponsavelModel.findByPk(id);

            if (responsavel === null) {
                return response.status(HTTP_STATUS.NOT_FOUND).json({
                    error: `Responsável com id ${id} não encontrado.`
                });
            }

            return response.status(HTTP_STATUS.SUCCESS).json(responsavel);

        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({
                error: 'Erro ao buscar responsável.'
            });
        }
    }
};