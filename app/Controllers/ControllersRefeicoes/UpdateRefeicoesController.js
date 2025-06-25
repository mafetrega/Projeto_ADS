import "../../../bootstrap/app.js";
import ModelRefeicoes from "../../Models/ModelsRefeicoes/ModelRefeicoes.js";
export default (function () {
    const TABLE = "refeicoes"; // Nome da tabela no banco de dados
    const HTTP_STATUS = CONSTANTS.HTTP;

    return {
        // PUT /refeicoes/:id
        update: async (request, response) => {
            const { id } = request.params;
            const {
                refeicao_id,
                data,
                tipo_refeicao,
                descricao,
                observacao,
            } = request.body;

            try {
                const result = await db.query(
                    `UPDATE ${TABLE} SET 
                        refeicao_id = $1,
                        data = $2,
                        tipo_refeicao = $3,
                        descricao = $4,
                        observacao = $5,
                    WHERE refeicao_id = $6 RETURNING *`,
                    [
                        refeicao_id,
                        data,
                        tipo_refeicao,
                        descricao,
                        observacao,
                        id
                    ]
                );
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Refeicao não encontrado para atualização.' });
                }
                return response.status(HTTP_STATUS.SUCCESS).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao atualizar Refeicao.' });
            }
        },
    };
})();