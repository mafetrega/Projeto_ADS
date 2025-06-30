import CONSTANTS from "../../../config/constants.js";
import ResponsavelModel from "../../Models/ModelResponsaveis/ModelResponsaveis.js";

/*
CREATE TABLE
    responsaveis (
        responsavel_id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        parentesco VARCHAR(50),
        telefone VARCHAR(20),
        email VARCHAR(255),
        endereco VARCHAR(255),
        observacoes TEXT
    );
*/

export default {
    list: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;

        let limit = parseInt(request.query.limit);
        let offset = parseInt(request.query.offset);

        limit = isNaN(limit) ? 100 : Math.max(1, limit);
        offset = isNaN(offset) ? 0 : Math.max(0, offset);

        if (limit > CONSTANTS.MAX_GET_LIMIT) {
            return response.status(HTTP_STATUS.BAD_REQUEST).json({
                error: `Limite máximo permitido: ${CONSTANTS.MAX_GET_LIMIT}.`,
                rows: [],
                limit,
                next: null
            });
        }

        try {
            const data = await ResponsavelModel.findAll({
                limit: limit + 1,
                offset: offset,
                order: [["responsavel_id", "asc"]]
            });

            const hasMore = data.length > limit;
            const rows = hasMore ? data.slice(0, limit) : data;
            const next = hasMore ? offset + limit : null;

            return response.status(HTTP_STATUS.SUCCESS).json({
                rows,
                limit,
                next
            });

        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({
                error: 'Erro ao listar responsáveis.',
                rows: [],
                limit,
                next: null,
                details: error.message // Remova em produção se desejar
            });
        }
    }
};