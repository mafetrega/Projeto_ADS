import ModelAvaliacoes from "../../Models/ModelsAvaliacoes/ModelAvaliacoes.js";

export default (function () {
    return {
        update: async (req, res) => {
            const HTTP_STATUS = CONSTANTS.HTTP;

            const avaliacao_id = req.params.id; // O parâmetro da rota deve ser o avaliacao_id

            const requestBody = req.body;
            const { aluno_id, turma_id, professor_id, data_avaliacao, tipoavaliacao, nota, observacoes } = requestBody;

            const data = {};

            if (aluno_id !== undefined) data["aluno_id"] = aluno_id;
            if (turma_id !== undefined) data["turma_id"] = turma_id;
            if (professor_id !== undefined) data["professor_id"] = professor_id;
            if (data_avaliacao !== undefined) data["data_avaliacao"] = data_avaliacao;
            if (tipoavaliacao !== undefined) data["tipoavaliacao"] = tipoavaliacao;
            if (nota !== undefined) data["nota"] = nota;
            if (observacoes !== undefined) data["observacoes"] = observacoes;

            if (Object.keys(data).length === 0) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: `Nenhum campo foi enviado para atualização em ${avaliacao_id}`
                });
            }

            try {
                const [rowsAffected, [row]] = await ModelAvaliacoes.update(
                    data,
                    {
                        where: {
                            avaliacao_id: avaliacao_id
                        },
                        returning: true
                    }
                );

                if (rowsAffected === 0 || !row) {
                    return res.status(HTTP_STATUS.NOT_FOUND).json({
                        error: `Nenhuma avaliação encontrada com ID ${avaliacao_id}`
                    });
                }

                return res.status(HTTP_STATUS.SUCCESS).json(row);

            } catch (error) {
                return res.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
            }
        }
    }
})();