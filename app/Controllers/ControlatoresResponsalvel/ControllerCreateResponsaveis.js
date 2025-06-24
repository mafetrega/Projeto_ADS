import ResponsavelModel from "../../Models/ResponsavelModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;

    const nome = requestBody.nome || null;
    const esta_ativo = requestBody.esta_ativo ?? true; // usa nullish coalescing para evitar false positivos

    if (nome === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" do responsável não foi preenchido.' });
    }

    try {
        const row = await ResponsavelModel.create({
            nome: nome,
            esta_ativo: esta_ativo
        });

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao cadastrar responsável.' });
    }
};