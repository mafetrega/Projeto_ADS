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
    delete: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;
        const id = request.params.id;

        try {
            const rowsDeleted = await ResponsavelModel.destroy({
                where: { responsavel_id: id } // Corrigido para o campo correto
            });

            if (rowsDeleted === 0) {
                return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Responsável com id ${id} não existe!` });
            }

            return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({
                error: 'Erro de servidor.',
                details: error.message // Remova em produção se desejar
            });
        }
    }
};