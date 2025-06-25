import FrequenciaModel from "../../Models/ModelsFrequencia/ModelFrequencia.js";

export default (function () {
    const MAX_LIMIT = 100;

    return {
        // GET /Comunicados
        list: async (req, res) => {
            const HTTP_STATUS = CONSTANTS.HTTP;

            // Exemplo de query string: ?limit=10&offset=20
            const limit = parseInt(request.query.limit) || 100;
            const offset = parseInt(request.query.offset) || 0;

            if (limit > CONSTANTS.MAX_GET_LIMIT) {
                return response.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: `Limite máximo permitido: ${CONSTANTS.MAX_GET_LIMIT}.`
                });
            }

            try {
                // Usamos limit + 1 para verificar se há mais páginas
                const data = await FrequenciaModel.findAll({
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
                return response.status(HTTP_STATUS.SERVER_ERROR).json({
                    error: 'Erro ao listar registros de frequência.'
                });
            }

        },
    };
})();