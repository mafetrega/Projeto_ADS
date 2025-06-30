import CONSTANTS from "../../../config/constants.js"; // ajuste o caminho se necessário
import ModelAvaliacoes from "../../Models/ModelsAvaliacoes/ModelAvaliacoes.js";

/*
CREATE TABLE
    avaliacoes (
        avaliacao_id SERIAL PRIMARY KEY,
        aluno_id INT NOT NULL, -- Chave estrangeira para a tabela Alunos
        turma_id INT NOT NULL, -- Chave estrangeira para a tabela Turma
        professor_id INT NOT NULL, -- Chave estrangeira para a tabela Professores
        data_avaliacao TIMESTAMP NOT NULL,
        tipoavaliacao VARCHAR(100),
        nota DECIMAL(5, 2),
        observacoes TEXT,
        FOREIGN KEY (aluno_id) REFERENCES alunos (aluno_id), -- Relacionamento Avaliações com Alunos (1:N)
        FOREIGN KEY (turma_id) REFERENCES turma (turma_id), -- Relacionamento Avaliações com Turma (1:N)
        FOREIGN KEY (professor_id) REFERENCES professores (professor_id) -- Relacionamento Avaliações com Professores (1:N)
    );
*/

export default {
    delete: async (request, response) => {
        const HTTP_STATUS = CONSTANTS.HTTP;
        const avaliacao_id = request.params.id;

        try {
            const rowsDeleted = await ModelAvaliacoes.destroy({
                where: { avaliacao_id }
            });

            if (rowsDeleted === 0) {
                return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Avaliação com id ${avaliacao_id} não existe!` });
            }

            return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();
        } catch (error) {
            console.log(error);
            return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro de servidor.' });
        }
    }
};