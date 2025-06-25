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
    get: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;
        const id = request.params.id;

        try {
            const responsavel = await ResponsavelModel.findOne({
                where: { responsavel_id: id }
            });

            if (responsavel === null) {
                return response.status(HTTP_STATUS.NOT_FOUND).json({
                    error: `Responsável com id ${id} não encontrado.`
                });
            }

            return response.status(HTTP_STATUS.SUCCESS).json(responsavel);

        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({
                error: 'Erro ao buscar responsável.',
                details: error.message
            });
        }
    }
};