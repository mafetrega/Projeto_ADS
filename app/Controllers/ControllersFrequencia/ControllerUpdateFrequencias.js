import ModelFrequencia from "../../Models/ModelsFrequencia/ModelFrequencia.js";

/*
CREATE TABLE
    frequencia (
        frequenciaid SERIAL PRIMARY KEY,
        aluno_id INT NOT NULL, -- Chave estrangeira para a tabela Alunos
        turma_id INT NOT NULL, -- Chave estrangeira para a tabela Turma
        data TIMESTAMP NOT NULL,
        presente BOOLEAN,
        observacoes TEXT,
        FOREIGN KEY (aluno_id) REFERENCES alunos (aluno_id), -- Relacionamento Frequencia com Alunos (1:N)
        FOREIGN KEY (turma_id) REFERENCES turma (turma_id) -- Relacionamento Frequencia com Turma (1:N)
    );
*/

export default (function () {
    return {
        update: async (req, res) => {
            const HTTP_STATUS = CONSTANTS.HTTP;

            const frequenciaid = req.params.id; // O parâmetro da rota deve ser o frequenciaid

            const requestBody = req.body;
            const { aluno_id, turma_id, data, presente, observacoes } = requestBody;

            const dataToUpdate = {};

            if (aluno_id !== undefined) dataToUpdate["aluno_id"] = aluno_id;
            if (turma_id !== undefined) dataToUpdate["turma_id"] = turma_id;
            if (data !== undefined) dataToUpdate["data"] = data;
            if (presente !== undefined) dataToUpdate["presente"] = presente;
            if (observacoes !== undefined) dataToUpdate["observacoes"] = observacoes;

            if (Object.keys(dataToUpdate).length === 0) {
                return res.status(HTTP_STATUS.BAD_REQUEST).json({
                    error: `Nenhum campo foi enviado para atualização em ${frequenciaid}`
                });
            }

            try {
                const [rowsAffected, [row]] = await ModelFrequencia.update(
                    dataToUpdate,
                    {
                        where: {
                            frequenciaid: frequenciaid
                        },
                        returning: true
                    }
                );

                if (rowsAffected === 0 || !row) {
                    return res.status(HTTP_STATUS.NOT_FOUND).json({
                        error: `Nenhuma frequência encontrada com ID ${frequenciaid}`
                    });
                }

                return res.status(HTTP_STATUS.SUCCESS).json(row);

            } catch (error) {
                return res.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
            }
        }
    }
})();
