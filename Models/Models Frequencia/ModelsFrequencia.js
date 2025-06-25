import FrequenciaModel from "../../Models/FrequenciaModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const id = request.params.id;

    try {
        const frequencia = await FrequenciaModel.findByPk(id);

        if (frequencia === null) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ 
                error: `Registro de frequência com id ${id} não foi encontrado.` 
            });
        }

        return response.status(HTTP_STATUS.SUCCESS).json(frequencia);

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ 
            error: 'Erro ao buscar o registro de frequência.' 
        });
    }

};