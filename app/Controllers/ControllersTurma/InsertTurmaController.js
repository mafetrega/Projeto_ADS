import "../../../bootstrap/app.js";

import ModelTurma from "../../Models/ModelsTurma/ModelTurma.js";
export default (function () {

    /*turma (
        turma_id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        professor_id INT, -- Chave estrangeira para a tabela Professores
        anoletivo INT,
        descricao TEXT,
        FOREIGN KEY (professor_id) REFERENCES professores (professor_id) -- Relacionamento Turma com Professores (1:N)
    );
   */

    return {
        // POST /Comunicados
        insert: async (req, res) => {
            const turma_id = req.body.turma_id;
            const nome = req.body.nome;
            const professor_id = req.body.professor_id;
            const anoletivo = req.body.anoletivo; 
            const descricao = req.body.descricao;

            try {
                const turma = await ModelTurma.create({
                    turma_id: turma_id,
                    nome: nome,
                    professor_id: professor_id,
                    anoletivo: anoletivo, // Corrigido para tipocomunicado
                    descricao: descricao,
                    
                });

                return res.status(201).json(turma);
            } catch (error) {
                return res.status(500).json({ error: "Erro de servidor." });
            }
        }
    }
})();
