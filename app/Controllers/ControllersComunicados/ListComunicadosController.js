import "../../../bootstrap/app.js";
import ModelComunicados from "../../Models/ModelsComunicados/ModelComunicados.js";

export default (function () {
    const MAX_LIMIT = 100;

    /*Comunicados (
        Comunicado_ID SERIAL PRIMARY KEY,
        Aluno_ID INT, -- Chave estrangeira para a tabela Alunos (pode ser nulo para comunicados gerais)
        Turma_ID INT, -- Chave estrangeira para a tabela Turma (pode ser nulo se for geral)
        Data_Publicacao TIMESTAMP NOT NULL,
        TipoComunicado VARCHAR(50) NOT NULL, -- "Ocorrencia" ou "Comunicado"
        Titulo VARCHAR(255) NOT NULL,
        Mensagem TEXT NOT NULL,
        Responsavel_ID INT,
        FOREIGN KEY (Aluno_ID) REFERENCES Alunos (Aluno_ID),
        FOREIGN KEY (Turma_ID) REFERENCES Turma (Turma_ID),
        FOREIGN KEY (Responsavel_ID) REFERENCES Responsaveis (Responsavel_ID)
    );
    */

    return {
        // GET /Comunicados
        list: async (req, res) => {
            // req.query = query vars

            const limit = parseInt(req.query.limit) || 100;
            const offset = parseInt(req.query.offset) || 0;

            if (limit > MAX_LIMIT) {
                return res.status(400).json({ error: "Limit máximo: 100." });
            }

            const comunicados = await ModelComunicados.findAll({
                limit: limit + 1, // Para verificar se há mais registros
                offset: offset,
                order: [["comunicado_id", "ASC"]],
            });

            const temMais = comunicados.length > limit;
            let rows = comunicados;

            const resposta = {
                rows: temMais ? comunicados.slice(0, limit) : comunicados,
                limit: limit,
                next: temMais ? offset + limit : null,
            };

            return res.status(200).json(resposta);

            // ComunicadosModel.findAll(options: {...})
            // limit: int
            // offset: int
            // order: [field, ASC or DESC]

            try {
            } catch (error) {
                return res.status(500).json({ error: "Error de servidor." });
            }
        },

    };
})();