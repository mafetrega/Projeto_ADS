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
    update: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;

        const requestBody = request.body;
        const id = request.params.id;

        const { nome, email, telefone, esta_ativo, aluno_id } = requestBody;

        const data = {};

        if (nome !== undefined) data["nome"] = nome;
        if (email !== undefined) data["email"] = email;
        if (telefone !== undefined) data["telefone"] = telefone;
        if (esta_ativo !== undefined) data["esta_ativo"] = esta_ativo;
        if (aluno_id !== undefined) data["aluno_id"] = aluno_id;

        if (Object.keys(data).length === 0) {
            return response.status(HTTP_STATUS.BAD_REQUEST).json({
                error: `Nenhum campo foi informado para atualizar o responsável com ID ${id}.`
            });
        }

        try {
            const [rowsAffected, [registroAtualizado]] = await ResponsavelModel.update(
                data,
                {
                    where: { responsavel_id: id }, // Corrigido para o nome correto do campo
                    returning: true
                }
            );

            if (rowsAffected === 0 || !registroAtualizado) {
                return response.status(HTTP_STATUS.NOT_FOUND).json({
                    error: `Responsável com ID ${id} não foi encontrado.`
                });
            }

            return response.status(HTTP_STATUS.SUCCESS).json(registroAtualizado);

        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({
                error: 'Erro ao atualizar os dados do responsável.',
                details: error.message // Remova em produção se desejar
            });
        }
    }
};