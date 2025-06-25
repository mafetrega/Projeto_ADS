import ModelComunicados from "../../Models/ModelsComunicados/ModelComunicados.js";

export default (function () {
    return {
        update: async (req, res) => {
            const HTTP_STATUS = CONSTANTS.HTTP;

            const comunicado_id = req.params.id; // O parâmetro da rota deve ser o comunicado_id

            const requestBody = req.body;
            const { aluno_id, turma_id, data_publicacao, tipocomunicado, titulo, mensagem, responsavel_id } = requestBody;

            const data = {};

            if (aluno_id !== undefined) data["aluno_id"] = aluno_id;
            if (turma_id !== undefined) data["turma_id"] = turma_id;
            if (data_publicacao !== undefined) data["data_publicacao"] = data_publicacao;
            if (tipocomunicado !== undefined) data["tipocomunicado"] = tipocomunicado;
            if (titulo !== undefined) data["titulo"] = titulo;
            if (mensagem !== undefined) data["mensagem"] = mensagem;
            if (responsavel_id !== undefined) data["responsavel_id"] = responsavel_id;

            if (Object.keys(data).length === 0) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: `Nenhum campo foi enviado para atualização em ${comunicado_id}`
                });
            }

            try {
                const [rowsAffected, [row]] = await ModelComunicados.update(
                    data,
                    {
                        where: {
                            comunicado_id: comunicado_id
                        },
                        returning: true
                    }
                );

                if (rowsAffected === 0 || !row) {
                    return res.status(HTTP_STATUS.NOT_FOUND).json({
                        error: `Nenhum comunicado encontrado com ID ${comunicado_id}`
                    });
                }

                return res.status(HTTP_STATUS.SUCCESS).json(row);

            } catch (error) {
                return res.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
            }
        }
    }
})();