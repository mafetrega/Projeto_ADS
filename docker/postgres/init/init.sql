-- Tabela Responsaveis
CREATE TABLE responsaveis (
    responsavel_id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    parentesco VARCHAR(50),
    telefone VARCHAR(20),
    email VARCHAR(255),
    endereco VARCHAR(255),
    observacoes TEXT
);

-- Tabela Professores
CREATE TABLE professores (
    professor_id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento TIMESTAMP,
    sexo VARCHAR(10),
    endereco VARCHAR(255),
    telefone VARCHAR(20),
    email VARCHAR(255),
    formacao VARCHAR(255),
    data_admissao TIMESTAMP,
    observacoes TEXT
);

-- Tabela Turma
CREATE TABLE turma (
    turma_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    professor_id INT, -- Chave estrangeira para a tabela Professores
    anoletivo INT,
    descricao TEXT,
    FOREIGN KEY (professor_id) REFERENCES professores (professor_id) -- Relacionamento Turma com Professores (1:N)
);

-- Tabela Alunos
CREATE TABLE alunos (
    aluno_id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento TIMESTAMP,
    sexo VARCHAR(10),
    endereco VARCHAR(255),
    telefone VARCHAR(20),
    email VARCHAR(255),
    responsavel_id INT, -- Chave estrangeira para a tabela Responsaveis
    turma_id INT, -- Chave estrangeira para a tabela Turma
    datamatricula TIMESTAMP,
    observacoes TEXT,
    FOREIGN KEY (responsavel_id) REFERENCES responsaveis (responsavel_id), -- Relacionamento Alunos com Responsaveis (1:N)
    FOREIGN KEY (turma_id) REFERENCES turma (turma_id) -- Relacionamento Alunos com Turma (1:N)
);

-- Tabela Frequencia
CREATE TABLE frequencia (
    frequenciaid SERIAL PRIMARY KEY,
    aluno_id INT NOT NULL, -- Chave estrangeira para a tabela Alunos
    turma_id INT NOT NULL, -- Chave estrangeira para a tabela Turma
    data TIMESTAMP NOT NULL,
    presente BOOLEAN,
    observacoes TEXT,
    FOREIGN KEY (aluno_id) REFERENCES alunos (aluno_id), -- Relacionamento Frequencia com Alunos (1:N)
    FOREIGN KEY (turma_id) REFERENCES turma (turma_id) -- Relacionamento Frequencia com Turma (1:N)
);

-- Tabela Avaliações
CREATE TABLE avaliacoes (
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

-- Tabela Refeicoes
CREATE TABLE refeicoes (
    refeicao_id SERIAL PRIMARY KEY,
    data TIMESTAMP NOT NULL,
    tipo_refeicao VARCHAR(50),
    descricao TEXT,
    observacoes TEXT
);

-- Tabela de Comunicados
CREATE TABLE comunicados (
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