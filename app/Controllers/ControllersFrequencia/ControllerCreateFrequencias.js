import FrequenciaModel from "../../Models/ModelsFrequencia/ModelFrequencia.js";

export default (function () {
    return {
        insert: async (request, response) => {
            const HTTP_STATUS = CONSTANTS.HTTP;

            /** 
              POST, PUT podem ter request body! 
            */
            const requestBody = request.body;

            const alunoId = requestBody.alunoId || null;
            const data = requestBody.data ? new Date(requestBody.data) : null;
            const presente = typeof requestBody.presente === "boolean" ? requestBody.presente : null;

            if (!alunoId || !data || presente === null) {
                return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: "Dados incompletos para registrar frequência." });
            }

            try {
                const row = await Frequencia.create({
                    alunoId: alunoId,
                    data: data,
                    presente: presente
                });

                return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

            } catch (error) {
                console.error("Erro ao criar frequência:", error);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: "Erro interno ao registrar frequência." });
            }
        }
    }
})();