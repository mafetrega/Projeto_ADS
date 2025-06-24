-- Tabela Responsaveis
CREATE TABLE
    Responsaveis (
        Responsavel_ID SERIAL PRIMARY KEY,
        Nome VARCHAR(255) NOT NULL,
        Parentesco VARCHAR(50),
        Telefone VARCHAR(20),
        Email VARCHAR(255),
        Endereco VARCHAR(255),
        Observacoes TEXT
    );

-- Tabela Professores
CREATE TABLE
    Professores (
        Professor_ID SERIAL PRIMARY KEY,
        Nome VARCHAR(255) NOT NULL,
        Data_Nascimento TIMESTAMP,
        Sexo VARCHAR(10),
        Endereco VARCHAR(255),
        Telefone VARCHAR(20),
        Email VARCHAR(255),
        Formacao VARCHAR(255),
        Data_Admissao TIMESTAMP,
        Observacoes TEXT
    );

-- Tabela Turma
CREATE TABLE
    Turma (
        Turma_ID SERIAL PRIMARY KEY,
        Nome VARCHAR(100) NOT NULL,
        Professor_ID INT, -- Chave estrangeira para a tabela Professores
        AnoLetivo INT,
        Descricao TEXT,
        FOREIGN KEY (Professor_ID) REFERENCES Professores (Professor_ID) -- Relacionamento Turma com Professores (1:N)
    );

-- Tabela Alunos
CREATE TABLE
    Alunos (
        Aluno_ID SERIAL PRIMARY KEY,
        Nome VARCHAR(255) NOT NULL,
        Data_Nascimento TIMESTAMP,
        Sexo VARCHAR(10),
        Endereco VARCHAR(255),
        Telefone VARCHAR(20),
        Email VARCHAR(255),
        Responsavel_ID INT, -- Chave estrangeira para a tabela Responsaveis
        Turma_ID INT, -- Chave estrangeira para a tabela Turma
        DataMatricula TIMESTAMP,
        Observacoes TEXT,
        FOREIGN KEY (Responsavel_ID) REFERENCES Responsaveis (Responsavel_ID), -- Relacionamento Alunos com Responsaveis (1:N)
        FOREIGN KEY (Turma_ID) REFERENCES Turma (Turma_ID) -- Relacionamento Alunos com Turma (1:N)
    );

-- Tabela Frequencia
CREATE TABLE
    Frequencia (
        FrequenciaID SERIAL PRIMARY KEY,
        Aluno_ID INT NOT NULL, -- Chave estrangeira para a tabela Alunos
        Turma_ID INT NOT NULL, -- Chave estrangeira para a tabela Turma
        Data TIMESTAMP NOT NULL,
        Presente BOOLEAN,
        Observacoes TEXT,
        FOREIGN KEY (Aluno_ID) REFERENCES Alunos (Aluno_ID), -- Relacionamento Frequencia com Alunos (1:N)
        FOREIGN KEY (Turma_ID) REFERENCES Turma (Turma_ID) -- Relacionamento Frequencia com Turma (1:N)
    );

-- Tabela Avaliações
CREATE TABLE
    Avaliacoes (
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
        FOREIGN KEY (Professor_ID) REFERENCES Professores (Professor_ID) -- Relacionamento Avaliações com Professores (1:N)
    );

-- Tabela Refeicoes
CREATE TABLE
    Refeicoes (
        Refeicao_ID SERIAL PRIMARY KEY,
        Data TIMESTAMP NOT NULL,
        Tipo_Refeicao VARCHAR(50),
        Descricao TEXT,
        Observacoes TEXT
    );

-- Tabela Unificada de Comunicados (substitui Ocorrências e Comunicados)
CREATE TABLE
    Comunicados (
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