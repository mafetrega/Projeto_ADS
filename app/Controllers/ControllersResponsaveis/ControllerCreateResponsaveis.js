import ResponsavelModel from "../../Models/ModelResponsaveis/ModelResponsaveis.js";
import CONSTANTS from "../../../config/constants.js";

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

const create = async (request, response) => {
    const HTTP_STATUS = CONSTANTS.HTTP;
    const requestBody = request.body;

    const nome = requestBody.nome || null;
    const esta_ativo = requestBody.esta_ativo ?? true;
    const parentesco = requestBody.parentesco || null;
    const telefone = requestBody.telefone || null;
    const email = requestBody.email || null;
    const endereco = requestBody.endereco || null;
    const observacoes = requestBody.observacoes || null;

    if (nome === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" do responsável não foi preenchido.' });
    }

    try {
        const row = await ResponsavelModel.create({
            nome,
            esta_ativo,
            parentesco,
            telefone,
            email,
            endereco,
            observacoes
        });

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({
            error: 'Erro ao cadastrar responsável.',
            details: error.message // Remova em produção se desejar
        });
    }
};

export default { create };