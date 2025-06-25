import db from "../../config/db.js";

export default (function () {
    const TABLE = "responsaveis"; // Nome da tabela ajustado

    const HTTP_STATUS = CONSTANTS.HTTP;

    return {

        // GET /responsaveis
        list: async (request, response) => {
            try {
                const result = await db.query(`SELECT * FROM ${TABLE} ORDER BY id`);
                return response.status(HTTP_STATUS.SUCCESS).json({ rows: result.rows });
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao listar responsáveis.' });
            }
        },

        // GET /responsaveis/:id
        get: async (request, response) => {
            const { id } = request.params;
            try {
                const result = await db.query(`SELECT * FROM ${TABLE} WHERE id = $1`, [id]);
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Responsável não encontrado.' });
                }
                return response.status(HTTP_STATUS.SUCCESS).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao buscar responsável.' });
            }
        },

        // POST /responsaveis
        insert: async (request, response) => {
            const { nome, email, telefone, esta_ativo = true, aluno_id = null } = request.body;

            if (!nome || !email || !telefone) {
                return response.status(HTTP_STATUS.BAD_REQUEST).json({ 
                    error: 'Campos "nome", "email" e "telefone" são obrigatórios.' 
                });
            }

            try {
                const result = await db.query(
                    `INSERT INTO ${TABLE} (nome, email, telefone, esta_ativo, aluno_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                    [nome, email, telefone, esta_ativo, aluno_id]
                );
                return response.status(HTTP_STATUS.SUCCESS_CREATED).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao cadastrar responsável.' });
            }
        },

        // PUT /responsaveis/:id
        update: async (request, response) => {
            const { id } = request.params;
            const { nome, email, telefone, esta_ativo, aluno_id } = request.body;

            if (!nome || !email || !telefone) {
                return response.status(HTTP_STATUS.BAD_REQUEST).json({ 
                    error: 'Campos "nome", "email" e "telefone" são obrigatórios.' 
                });
            }

            try {
                const result = await db.query(
                    `UPDATE ${TABLE} SET nome = $1, email = $2, telefone = $3, esta_ativo = $4, aluno_id = $5 WHERE id = $6 RETURNING *`,
                    [nome, email, telefone, esta_ativo, aluno_id, id]
                );
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Responsável não encontrado para atualização.' });
                }
                return response.status(HTTP_STATUS.SUCCESS).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao atualizar responsável.' });
            }
        },

        // DELETE /responsaveis/:id
        delete: async (request, response) => {
            const { id } = request.params;
            try {
                const result = await db.query(
                    `DELETE FROM ${TABLE} WHERE id = $1 RETURNING *`,
                    [id]
                );
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Responsável não encontrado para exclusão.' });
                }
                return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao excluir responsável.' });
            }
        },

    };
})();