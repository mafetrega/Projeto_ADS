import FrequenciaModel from "../../Models/ModelsFrequencia/ModelFrequencia.js";

export default (function () {

    return {
        // GET /Avaliacoes/:id
        get: async (request, response) => {
            const HTTP_STATUS = CONSTANTS.HTTP;

            // ID do registro de frequência a ser buscado
            const id = request.params.id;

            try {
                const registro = await FrequenciaModel.findByPk(id);

                if (registro === null) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({
                        error: `Registro de frequência com id ${id} não encontrado.`
                    });
                }

                return response.status(HTTP_STATUS.SUCCESS).json(registro);

            } catch (error) {
                return response.status(HTTP_STATUS.SERVER_ERROR).json({
                    error: 'Erro ao buscar o registro de frequência.'
                });
            }
        }
    }
})();
