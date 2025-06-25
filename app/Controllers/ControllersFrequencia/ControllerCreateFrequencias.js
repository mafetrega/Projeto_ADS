import FrequenciaModel from "../../Models/ModelsFrequencia/ModelFrequencia.js";
import CONSTANTS from "../../../config/constants.js";

export default (function () {
    return {
        insert: async (request, response) => {
            const HTTP_STATUS = CONSTANTS.HTTP;

            const requestBody = request.body;

            // Pegando todos os campos necessários
            const aluno_id = requestBody.aluno_id || requestBody.alunoId || null;
            const turma_id = requestBody.turma_id || requestBody.turmaId || null;
            const data = requestBody.data ? new Date(requestBody.data) : null;
            const presente = typeof requestBody.presente === "boolean" ? requestBody.presente : null;
            const observacoes = requestBody.observacoes || null;

            // Validação dos campos obrigatórios
            if (!aluno_id || !turma_id || !data || presente === null) {
                return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: "Dados incompletos para registrar frequência." });
            }

            try {
                const row = await FrequenciaModel.create({
                    aluno_id: aluno_id,
                    turma_id: turma_id,
                    data: data,
                    presente: presente,
                    observacoes: observacoes
                });

                return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

            } catch (error) {
                console.error("Erro ao criar frequência:", error);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: "Erro interno ao registrar frequência." });
            }
        }
    }
})();