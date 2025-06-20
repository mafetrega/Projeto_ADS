import "../../../bootstrap/app.js";

import ModelComunicados from "../../Models/ModelsComunicados/ModelComunicados.js";

export default (function () {

    /*CREATE TABLE comunicados (
       comunicado_id SERIAL PRIMARY KEY,
       aluno_id INT, -- Chave estrangeira para a tabela Alunos (pode ser nulo para comunicados gerais)
       turma_id INT, -- Chave estrangeira para a tabela Turma (pode ser nulo se for geral)
       data_publicacao TIMESTAMP NOT NULL,
       tipocomunicado VARCHAR(50) NOT NULL, -- "Ocorrencia" ou "Comunicado"
       titulo VARCHAR(255) NOT NULL,
       mensagem TEXT NOT NULL,
       responsavel_id INT,
       FOREIGN KEY (aluno_id) REFERENCES alunos (aluno_id),
       FOREIGN KEY (turma_id) REFERENCES turma (turma_id),
       FOREIGN KEY (responsavel_id) REFERENCES responsaveis (responsavel_id)
   );
   */

    return {
        // POST /Comunicados
        insert: async (req, res) => {
            const aluno_id = req.body.aluno_id;
            const turma_id = req.body.turma_id;
            const data_publicacao = req.body.data_publicacao;
            const tipocomunicado = req.body.tipocomunicado; // "Ocorrencia" ou "Comunicado"
            const titulo = req.body.titulo;
            const mensagem = req.body.mensagem;
            const responsavel_id = req.body.responsavel_id;

            try {
                const comunicado = await ModelComunicados.create({
                    aluno_id: aluno_id,
                    turma_id: turma_id,
                    data_publicacao: data_publicacao,
                    tipocomunicado: tipocomunicado, // Corrigido para tipocomunicado
                    titulo: titulo,
                    mensagem: mensagem,
                    responsavel_id: responsavel_id
                });

                return res.status(201).json(comunicado);
            } catch (error) {
                return res.status(500).json({ error: "Erro de servidor." });
            }
        }
    }
})();
