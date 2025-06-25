import ModelRefeicoes from "../../Models/ModelsRefeicoes/ModelRefeicoes.js";
export default (function () {
    return {
        update: async (req, res) => {
            const HTTP_STATUS = CONSTANTS.HTTP;

            const refeicao_id = req.params.id; // O parâmetro da rota deve ser o refeicao_id

            const requestBody = req.body;
            const { data, tipo_refeicao, descricao, observacoes } = requestBody;

            const dados = {};

            if (data !== undefined) dados["data"] = data;
            if (tipo_refeicao !== undefined) dados["tipo_refeicao"] = tipo_refeicao;
            if (descricao !== undefined) dados["descricao"] = descricao;
            if (observacoes !== undefined) dados["observacoes"] = observacoes;

            if (Object.keys(dados).length === 0) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: `Nenhum campo foi enviado para atualização em ${refeicao_id}`
                });
            }

            try {
                const [rowsAffected, [row]] = await ModelRefeicoes.update(
                    dados,
                    {
                        where: {
                            refeicao_id: refeicao_id
                        },
                        returning: true
                    }
                );

                if (rowsAffected === 0 || !row) {
                    return res.status(HTTP_STATUS.NOT_FOUND).json({
                        error: `Nenhuma refeicao encontrada com ID ${refeicao_id}`
                    });
                }

                return res.status(HTTP_STATUS.SUCCESS).json(row);

            } catch (error) {
                return res.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
            }
        }
    }
})();