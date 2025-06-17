import "../../bootstrap/app.js";
import AvaliacoesModel from "../../Models/ModelsAvaliacoes/ModelsAvaliacoes.js";

export default (function () {
    const TABLE = "Avaliacoes"; // Nome da tabela no banco de dados

    const HTTP_STATUS = CONSTANTS.HTTP;

    return {

        // PUT /exemplo/:id
        update: async (request, response) => {
            const { id } = request.params;
            const { nome, esta_ativo } = request.body;

            if (!nome) {
                return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" é obrigatório.' });
            }

            try {
                const result = await db.query(
                    `UPDATE ${TABLE} SET nome = $1, esta_ativo = $2 WHERE id = $3 RETURNING *`,
                    [nome, esta_ativo, id]
                );
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Registro não encontrado para atualização.' });
                }
                return response.status(HTTP_STATUS.SUCCESS).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao atualizar registro.' });
            }
        },

    };
})();
