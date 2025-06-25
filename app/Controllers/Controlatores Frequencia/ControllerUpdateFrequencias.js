import FrequenciaModel from "../../Models/FrequenciaModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    const id = request.params.id;

    const nome = requestBody.nome;
    const esta_ativo = requestBody.esta_ativo;

    const data = {};

    if (nome !== undefined) {
        data["nome"] = nome;
    }

    if (esta_ativo !== undefined) {
        data["esta_ativo"] = esta_ativo;
    }

    if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi enviado para atualização no registro de frequência ${id}.`
        });
    }

    try {
        const [rowsAffected, [registroAtualizado]] = await FrequenciaModel.update(
            {
                nome: nome,
                esta_ativo: esta_ativo
            },
            {
                where: { id: id },
                returning: true
            }
        );

        if (rowsAffected === 0 || !registroAtualizado) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({
                error: `Registro de frequência com ID ${id} não foi encontrado.`
            });
        }

        return response.status(HTTP_STATUS.SUCCESS).json(registroAtualizado);

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ 
            error: 'Erro ao atualizar o registro de frequência.' 
        });
    }
};