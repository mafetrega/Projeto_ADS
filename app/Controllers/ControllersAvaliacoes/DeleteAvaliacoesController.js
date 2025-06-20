import ModelsAvaliacoes from "../../Models/ModelsAvaliacoes/ModelAvaliacoes.js";

export default (function () {
    const TABLE = "Avaliacoes"; // Nome da tabela no banco de dados

    const HTTP_STATUS = CONSTANTS.HTTP;

    return {
        // DELETE /Avaliacoes/:id
        delete: async (request, response) => {
            const { id } = request.params;
            try {
                const result = await db.query(
                    `DELETE FROM ${TABLE} WHERE id = $1 RETURNING *`,
                    [id]
                );
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Avaliação não encontrada para exclusão.' });
                }
                return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao excluir avaliação.' });
            }
        },
    }
})();

