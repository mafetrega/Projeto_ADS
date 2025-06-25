import ModelTurma from "../../Models/ModelsTurma/ModelTurma";
export default (function () {
    return {
        update: async (req, res) => {
            const HTTP_STATUS = CONSTANTS.HTTP;

            const turma_id = req.params.id; // O parâmetro da rota deve ser o turma_id

            const requestBody = req.body;
            const { nome, professor_id, anoletivo, descricao } = requestBody;

            const dados = {};

            if (nome !== undefined) dados["nome"] = nome;
            if (professor_id !== undefined) dados["professor_id"] = professor_id;
            if (anoletivo !== undefined) dados["anoletivo"] = anoletivo;
            if (descricao !== undefined) dados["descricao"] = descricao;

            if (Object.keys(dados).length === 0) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: `Nenhum campo foi enviado para atualização em ${turma_id}`
                });
            }

            try {
                const [rowsAffected, [row]] = await ModelTurma.update(
                    dados,
                    {
                        where: {
                            turma_id: turma_id
                        },
                        returning: true
                    }
                );

                if (rowsAffected === 0 || !row) {
                    return res.status(HTTP_STATUS.NOT_FOUND).json({
                        error: `Nenhuma turma encontrada com ID ${turma_id}`
                    });
                }

                return res.status(HTTP_STATUS.SUCCESS).json(row);

            } catch (error) {
                return res.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
            }
        }
    }
})();