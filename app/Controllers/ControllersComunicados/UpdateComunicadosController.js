import "../../../bootstrap/app.js";
import ModelComunicados from "../../Models/ModelsComunicados/ModelComunicados.js";

export default (function () {
    const TABLE = "comunicados"; // Nome da tabela no banco de dados
    const HTTP_STATUS = CONSTANTS.HTTP;

    return {
        // PUT /comunicados/:id
        update: async (request, response) => {
            const { id } = request.params;
            const {
                aluno_id,
                turma_id,
                data_publicacao,
                tipocomunicado,
                titulo,
                mensagem,
                responsavel_id
            } = request.body;

            try {
                const result = await db.query(
                    `UPDATE ${TABLE} SET 
                        aluno_id = $1,
                        turma_id = $2,
                        data_publicacao = $3,
                        tipocomunicado = $4,
                        titulo = $5,
                        mensagem = $6,
                        responsavel_id = $7
                    WHERE comunicado_id = $8 RETURNING *`,
                    [
                        aluno_id,
                        turma_id,
                        data_publicacao,
                        tipocomunicado,
                        titulo,
                        mensagem,
                        responsavel_id,
                        id
                    ]
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