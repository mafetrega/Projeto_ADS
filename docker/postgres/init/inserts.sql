-- Inserts para Responsaveis
INSERT INTO
    Responsaveis (
        Nome,
        Parentesco,
        Telefone,
        Email,
        Endereco,
        Observacoes
    )
VALUES
    (
        'Maria Silva',
        'Mãe',
        '11999999999',
        'maria.silva@email.com',
        'Rua das Flores, 123',
        'Nenhuma'
    ),
    (
        'João Souza',
        'Pai',
        '11988888888',
        'joao.souza@email.com',
        'Rua das Flores, 123',
        'Nenhuma'
    );

-- Inserts para Professores
INSERT INTO
    Professores (
        Nome,
        Data_Nascimento,
        Sexo,
        Endereco,
        Telefone,
        Email,
        Formacao,
        Data_Admissao,
        Observacoes
    )
VALUES
    (
        'Ana Paula',
        '1980-05-10',
        'Feminino',
        'Av. Central, 456',
        '11977777777',
        'ana.paula@email.com',
        'Pedagogia',
        '2010-02-01',
        'Coordenadora'
    ),
    (
        'Carlos Lima',
        '1975-09-20',
        'Masculino',
        'Rua Nova, 789',
        '11966666666',
        'carlos.lima@email.com',
        'Matemática',
        '2012-03-15',
        ''
    );

-- Inserts para Turma
INSERT INTO
    Turma (Nome, Professor_ID, AnoLetivo, Descricao)
VALUES
    (
        '1º Ano A',
        1,
        2025,
        'Turma do primeiro ano, período manhã'
    ),
    (
        '2º Ano B',
        2,
        2025,
        'Turma do segundo ano, período tarde'
    );

-- Inserts para Alunos
INSERT INTO
    Alunos (
        Nome,
        Data_Nascimento,
        Sexo,
        Endereco,
        Telefone,
        Email,
        Responsavel_ID,
        Turma_ID,
        DataMatricula,
        Observacoes
    )
VALUES
    (
        'Lucas Silva',
        '2015-03-12',
        'Masculino',
        'Rua das Flores, 123',
        '11955555555',
        'lucas.silva@email.com',
        1,
        1,
        '2025-02-10',
        ''
    ),
    (
        'Julia Souza',
        '2014-11-25',
        'Feminino',
        'Rua das Flores, 123',
        '11944444444',
        'julia.souza@email.com',
        2,
        2,
        '2025-02-10',
        ''
    );

-- Inserts para Frequencia
INSERT INTO
    Frequencia (Aluno_ID, Turma_ID, Data, Presente, Observacoes)
VALUES
    (1, 1, '2025-03-01', TRUE, ''),
    (
        2,
        2,
        '2025-03-01',
        FALSE,
        'Faltou por motivo de saúde'
    );

-- Inserts para Avaliacoes
INSERT INTO
    Avaliacoes (
        Aluno_ID,
        Turma_ID,
        Professor_ID,
        Data_Avaliacao,
        TipoAvaliacao,
        Nota,
        Observacoes
    )
VALUES
    (1, 1, 1, '2025-04-15', 'Prova', 8.5, ''),
    (2, 2, 2, '2025-04-16', 'Trabalho', 9.0, '');

-- Inserts para Refeicoes
INSERT INTO
    Refeicoes (Data, Tipo_Refeicao, Descricao, Observacoes)
VALUES
    (
        '2025-03-01 12:00:00',
        'Almoço',
        'Arroz, feijão, carne, salada',
        ''
    ),
    (
        '2025-03-01 15:00:00',
        'Lanche',
        'Pão com queijo e suco',
        ''
    );

-- Inserts para Comunicados
INSERT INTO
    Comunicados (
        Aluno_ID,
        Turma_ID,
        Data_Publicacao,
        TipoComunicado,
        Titulo,
        Mensagem,
        Responsavel_ID
    )
VALUES
    (
        1,
        1,
        '2025-03-02',
        'Comunicado',
        'Reunião de Pais',
        'Reunião marcada para dia 10/03.',
        1
    ),
    (
        2,
        2,
        '2025-03-03',
        'Ocorrencia',
        'Falta',
        'Aluno faltou sem justificativa.',
        2
    );