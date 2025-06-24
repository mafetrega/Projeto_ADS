import ResponsavelModel from "../../Models/ResponsavelModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const id = request.params.id;

    try {
        const rowsDeleted = await ResponsavelModel.destroy({
            where: { id: id }
        });

        if (rowsDeleted === 0) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ 
                error: `Responsável com id ${id} não encontrado.` 
            });
        }

        return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ 
            error: 'Erro ao excluir responsável.' 
        });
    }

};