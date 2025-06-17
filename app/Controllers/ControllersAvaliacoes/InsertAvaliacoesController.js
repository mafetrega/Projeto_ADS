import "../../bootstrap/app.js";

import AvaliacoesModel from "../../Models/ModelsAvaliacoes/ModelsAvaliacoes.js";

export default (function () {

    /* 
    Avaliacao_ID SERIAL PRIMARY KEY,
    Aluno_ID INT NOT NULL, -- Chave estrangeira para a tabela Alunos
    Turma_ID INT NOT NULL, -- Chave estrangeira para a tabela Turma
    Professor_ID INT NOT NULL, -- Chave estrangeira para a tabela Professores
    Data_Avaliacao TIMESTAMP NOT NULL,
    TipoAvaliacao VARCHAR(100),
    Nota DECIMAL(5, 2),
    Observacoes TEXT,
    FOREIGN KEY (Aluno_ID) REFERENCES Alunos (Aluno_ID), -- Relacionamento Avaliações com Alunos (1:N)
    FOREIGN KEY (Turma_ID) REFERENCES Turma (Turma_ID), -- Relacionamento Avaliações com Turma (1:N)
    FOREIGN KEY (Professor_ID) REFERENCES Professores (Professor_ID)
   */

    return {
        // POST /Avaliacoes
        insert: async (req, res) => {
            // req.body = request body

            const Avaliacao_ID = req.body.Avaliacao_ID;
            const Aluno_ID = req.body.Aluno_ID;
            const Turma_ID = req.body.Turma_ID;
            const Professor_ID = req.body.Professor_ID;
            const Data_Avaliacao = req.body.Data_Avaliacao;
            const TipoAvaliacao = req.body.TipoAvaliacao;
            const Nota = req.body.Nota;
            const Observacoes = req.body.Observacoes;

            const avaliacao = await AvaliacoesModel.create({
                avaliacao_id: Avaliacao_ID,
                aluno_id: Aluno_ID,
                turma_id: Turma_ID,
                professor_id: Professor_ID,
                data_avaliacao: Data_Avaliacao,
                tipo_avaliacao: TipoAvaliacao,
                nota: Nota,
                observacoes: Observacoes,
            });

            return res.status(201).json(colaborador);

            try {
            } catch (error) {
                return res.status(500).json({ error: "Error de servidor." });
            }
        }
    }
})();