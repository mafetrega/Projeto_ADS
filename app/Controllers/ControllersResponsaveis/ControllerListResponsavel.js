import CONSTANTS from "../../../config/constants.js";
import ResponsavelModel from "../../Models/ModelResponsaveis/ModelResponsaveis.js";

export default {
    list: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;

        const limit = parseInt(request.query.limit) || 100;
        const offset = parseInt(request.query.offset) || 0;

        if (limit > CONSTANTS.MAX_GET_LIMIT) {
            return response.status(HTTP_STATUS.BAD_REQUEST).json({
                error: `Limite máximo permitido: ${CONSTANTS.MAX_GET_LIMIT}.`
            });
        }

        try {
            const data = await ResponsavelModel.findAll({
                limit: limit + 1,
                offset: offset,
                order: [["id", "asc"]]
            });

            const hasMore = data.length > limit;
            const rows = hasMore ? data.slice(0, limit) : data;
            const next = hasMore ? offset + limit : null;

            return response.status(HTTP_STATUS.SUCCESS).json({
                rows: rows,
                limit: limit,
                next: next
            });

        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({
                error: 'Erro ao listar responsáveis.'
            });
        }
    }
};