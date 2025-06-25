import "../../../bootstrap/app.js";
import ModelTurma from "../../Models/ModelsTurma/ModelTurma.js";
export default (function () {
    const TABLE = "turma"; // Nome da tabela no banco de dados

    const HTTP_STATUS = CONSTANTS.HTTP;

    return {
        // DELETE /Turma/:id
        delete: async (request, response) => {
            const { id } = request.params;
            try {
                const result = await db.query(
                    `DELETE FROM ${TABLE} WHERE turma_id = $1 RETURNING *`,
                    [id]
                );
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Turma não encontrada para exclusão.' });
                }
                return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao excluir Turma.' });
            }
        },
    }
})();

