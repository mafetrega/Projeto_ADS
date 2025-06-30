import FrequenciaModel from "../../Models/ModelsFrequencia/ModelFrequencia.js";

export default {
    delete: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;

        // ID do registro de frequência a ser deletado
        const id = request.params.id;

        try {
            const rowsDeleted = await FrequenciaModel.destroy({
                where: { frequencia_id: id }
            });

            if (rowsDeleted === 0) {
                return response.status(HTTP_STATUS.NOT_FOUND).json({
                    error: `Registro de frequência com id ${id} não encontrado.`
                });
            }

            return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();

        } catch (error) {
            return response.status(HTTP_STATUS.SERVER_ERROR).json({
                error: 'Erro ao excluir o registro de frequência.'
            });
        }
    }
}