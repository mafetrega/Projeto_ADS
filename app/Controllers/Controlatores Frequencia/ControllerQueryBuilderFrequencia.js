import db from "../../config/db.js";

export default (function () {
    const TABLE = "frequencias"; // Nome da tabela adaptado para o contexto

    const HTTP_STATUS = CONSTANTS.HTTP;

    return {

        // GET /frequencias
        list: async (request, response) => {
            try {
                const result = await db.query(`SELECT * FROM ${TABLE} ORDER BY id`);
                return response.status(HTTP_STATUS.SUCCESS).json({ rows: result.rows });
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao listar registros de frequência.' });
            }
        },

        // GET /frequencias/:id
        get: async (request, response) => {
            const { id } = request.params;
            try {
                const result = await db.query(`SELECT * FROM ${TABLE} WHERE id = $1`, [id]);
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Registro de frequência não encontrado.' });
                }
                return response.status(HTTP_STATUS.SUCCESS).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao buscar registro de frequência.' });
            }
        },

        // POST /frequencias
        insert: async (request, response) => {
            const { nome_aluno, presente = false } = request.body;
            if (!nome_aluno) {
                return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome_aluno" é obrigatório.' });
            }

            try {
                const result = await db.query(
                    `INSERT INTO ${TABLE} (nome_aluno, presente) VALUES ($1, $2) RETURNING *`,
                    [nome_aluno, presente]
                );
                return response.status(HTTP_STATUS.SUCCESS_CREATED).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao inserir registro de frequência.' });
            }
        },

        // PUT /frequencias/:id
        update: async (request, response) => {
            const { id } = request.params;
            const { nome_aluno, presente } = request.body;

            if (!nome_aluno) {
                return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome_aluno" é obrigatório.' });
            }

            try {
                const result = await db.query(
                    `UPDATE ${TABLE} SET nome_aluno = $1, presente = $2 WHERE id = $3 RETURNING *`,
                    [nome_aluno, presente, id]
                );
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Registro de frequência não encontrado para atualização.' });
                }
                return response.status(HTTP_STATUS.SUCCESS).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao atualizar registro de frequência.' });
            }
        },

        // DELETE /frequencias/:id
        delete: async (request, response) => {
            const { id } = request.params;
            try {
                const result = await db.query(
                    `DELETE FROM ${TABLE} WHERE id = $1 RETURNING *`,
                    [id]
                );
                if (result.rowCount === 0) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Registro de frequência não encontrado para exclusão.' });
                }
                return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
            } catch (err) {
                console.error(err);
                return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro ao excluir registro de frequência.' });
            }
        },

    };
})();