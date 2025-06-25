import CONSTANTS from "../../../config/constants.js";
import ModelTurma from "../../Models/ModelsTurma/ModelTurma.js";

export default {
    delete: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;
        const turma_id = request.params.id;

        try {
            const rowsDeleted = await ModelTurma.destroy({
                where: { turma_id }
            });

            if (rowsDeleted === 0) {
                return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Turma com id ${turma_id} não existe!` });
            }

            return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
        }
    }
};