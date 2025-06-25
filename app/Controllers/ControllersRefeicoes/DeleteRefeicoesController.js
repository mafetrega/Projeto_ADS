import "../../../bootstrap/app.js";
import ModelRefeicoes from "../../Models/ModelsRefeicoes/ModelRefeicoes.js";
export default (function () {
    const TABLE = "refeicoes"; // Nome da tabela no banco de dados

    const HTTP_STATUS = CONSTANTS.HTTP;

    return {
        // DELETE /Avaliacoes/:id
        delete: async (request, response) => {
            const { id } = request.params;
            try {
                const result = await db.query(
                    `DELETE FROM ${TABLE} WHERE comunicado_id = $1 RETURNING *`,
                    [id]
                );
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Refeicao não encontrada para exclusão.' });
                }
                return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao excluir Refeicao.' });
            }
        },
    }
})();

