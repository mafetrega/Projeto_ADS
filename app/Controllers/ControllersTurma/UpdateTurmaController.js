import "../../../bootstrap/app.js";
import ModelTurma from "../../Models/ModelsTurma/ModelTurma.js";
export default (function () {
    const TABLE = "turma"; // Nome da tabela no banco de dados
    const HTTP_STATUS = CONSTANTS.HTTP;

    return {
        // PUT /turma/:id
        update: async (request, response) => {
            const { id } = request.params;
            const {
                turma_id,
                nome,
                professor_id,
                anoletivo,
                descricao,
                
            } = request.body;

            try {
                const result = await db.query(
                    `UPDATE ${TABLE} SET 
                        turma_id = $1,
                        nome = $2,
                        professor_id = $3,
                        anoletivo = $4,
                        descricao = $5,
                        
                    WHERE comunicado_id = $6 RETURNING *`,
                    [
                        turma_id,
                        nome,
                        professor_id,
                        anoletivo,
                        descricao,
                    ]
                );
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Turma não encontrado para atualização.' });
                }
                return response.status(HTTP_STATUS.SUCCESS).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao atualizar Turma.' });
            }
        },
    };
})();