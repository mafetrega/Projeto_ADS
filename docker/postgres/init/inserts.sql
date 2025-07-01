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
    ),
    (
        'Ana Costa',
        'Mãe',
        '11977777777',
        'ana.costa@email.com',
        'Av. Paulista, 456',
        'Trabalha período integral'
    ),
    (
        'Roberto Oliveira',
        'Pai',
        '11966666666',
        'roberto.oliveira@email.com',
        'Rua dos Jardins, 789',
        'Contato preferencial por WhatsApp'
    ),
    (
        'Carmen Santos',
        'Avó',
        '11955555555',
        'carmen.santos@email.com',
        'Rua da Paz, 321',
        'Responsável legal'
    ),
    (
        'Fernando Lima',
        'Pai',
        '11944444444',
        'fernando.lima@email.com',
        'Alameda das Rosas, 654',
        'Médico - emergências ligar celular'
    ),
    (
        'Patricia Mendes',
        'Mãe',
        '11933333333',
        'patricia.mendes@email.com',
        'Rua do Sol, 987',
        'Professora'
    ),
    (
        'Diego Ferreira',
        'Padrasto',
        '11922222222',
        'diego.ferreira@email.com',
        'Av. das Nações, 147',
        'Contato secundário'
    ),
    (
        'Lucia Almeida',
        'Mãe',
        '11911111111',
        'lucia.almeida@email.com',
        'Rua das Acácias, 258',
        'Trabalha em casa'
    ),
    (
        'Marcos Pereira',
        'Pai',
        '11900000000',
        'marcos.pereira@email.com',
        'Rua Nova Esperança, 369',
        'Engenheiro'
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
    ),
    (
        'Beatriz Rocha',
        '1983-12-03',
        'Feminino',
        'Rua das Orquídeas, 123',
        '11988887777',
        'beatriz.rocha@email.com',
        'Letras - Português',
        '2015-08-10',
        'Especialista em alfabetização'
    ),
    (
        'Rafael Santos',
        '1978-07-15',
        'Masculino',
        'Av. dos Estados, 456',
        '11999998888',
        'rafael.santos@email.com',
        'Educação Física',
        '2013-01-20',
        'Técnico em natação'
    ),
    (
        'Marina Oliveira',
        '1985-11-22',
        'Feminino',
        'Rua do Campo, 789',
        '11977776666',
        'marina.oliveira@email.com',
        'Artes Visuais',
        '2018-03-05',
        'Artista plástica'
    ),
    (
        'Eduardo Costa',
        '1979-04-18',
        'Masculino',
        'Alameda Verde, 321',
        '11966665555',
        'eduardo.costa@email.com',
        'História',
        '2011-09-12',
        'Mestre em História do Brasil'
    ),
    (
        'Fernanda Silva',
        '1981-08-30',
        'Feminino',
        'Rua das Palmeiras, 654',
        '11955554444',
        'fernanda.silva@email.com',
        'Geografia',
        '2014-06-25',
        'Especialista em cartografia'
    ),
    (
        'Rodrigo Mendes',
        '1976-01-12',
        'Masculino',
        'Av. Independência, 987',
        '11944443333',
        'rodrigo.mendes@email.com',
        'Ciências',
        '2009-11-08',
        'Biólogo'
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
    ),
    (
        '3º Ano A',
        3,
        2025,
        'Turma do terceiro ano, período manhã'
    ),
    (
        '4º Ano B',
        4,
        2025,
        'Turma do quarto ano, período tarde'
    ),
    (
        '5º Ano A',
        5,
        2025,
        'Turma do quinto ano, período manhã'
    ),
    (
        'Pré-Escola',
        6,
        2025,
        'Educação infantil, período integral'
    ),
    (
        '1º Ano B',
        7,
        2025,
        'Turma do primeiro ano, período tarde'
    ),
    (
        '2º Ano A',
        8,
        2025,
        'Turma do segundo ano, período manhã'
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
    ),
    (
        'Pedro Costa',
        '2013-07-08',
        'Masculino',
        'Av. Paulista, 456',
        '11933333333',
        'pedro.costa@email.com',
        3,
        3,
        '2025-02-10',
        'Aluno transferido'
    ),
    (
        'Sofia Oliveira',
        '2012-09-14',
        'Feminino',
        'Rua dos Jardins, 789',
        '11922222222',
        'sofia.oliveira@email.com',
        4,
        4,
        '2025-02-10',
        'Excelente desempenho'
    ),
    (
        'Gabriel Santos',
        '2011-12-20',
        'Masculino',
        'Rua da Paz, 321',
        '11911111111',
        'gabriel.santos@email.com',
        5,
        5,
        '2025-02-10',
        'Líder da turma'
    ),
    (
        'Isabella Lima',
        '2017-05-03',
        'Feminino',
        'Alameda das Rosas, 654',
        '11900000000',
        'isabella.lima@email.com',
        6,
        6,
        '2025-02-10',
        'Primeira vez na escola'
    ),
    (
        'Matheus Mendes',
        '2015-01-17',
        'Masculino',
        'Rua do Sol, 987',
        '11888888888',
        'matheus.mendes@email.com',
        7,
        7,
        '2025-02-10',
        'Alergia a amendoim'
    ),
    (
        'Valentina Ferreira',
        '2014-04-22',
        'Feminino',
        'Av. das Nações, 147',
        '11777777777',
        'valentina.ferreira@email.com',
        8,
        8,
        '2025-02-10',
        'Usa óculos'
    ),
    (
        'Arthur Almeida',
        '2013-10-11',
        'Masculino',
        'Rua das Acácias, 258',
        '11666666666',
        'arthur.almeida@email.com',
        9,
        3,
        '2025-02-10',
        'Pratica judô'
    ),
    (
        'Helena Pereira',
        '2012-06-30',
        'Feminino',
        'Rua Nova Esperança, 369',
        '11555555555',
        'helena.pereira@email.com',
        10,
        4,
        '2025-02-10',
        'Toca piano'
    ),
    (
        'Enzo Silva',
        '2015-08-15',
        'Masculino',
        'Rua das Flores, 123',
        '11444444444',
        'enzo.silva@email.com',
        1,
        1,
        '2025-02-10',
        'Irmão do Lucas'
    ),
    (
        'Alice Costa',
        '2016-02-28',
        'Feminino',
        'Av. Paulista, 456',
        '11333333333',
        'alice.costa@email.com',
        3,
        6,
        '2025-02-10',
        'Muito tímida'
    ),
    (
        'Bernardo Santos',
        '2014-12-05',
        'Masculino',
        'Rua da Paz, 321',
        '11222222222',
        'bernardo.santos@email.com',
        5,
        2,
        '2025-02-10',
        'Irmão do Gabriel'
    ),
    (
        'Manuela Lima',
        '2013-03-18',
        'Feminino',
        'Alameda das Rosas, 654',
        '11111111111',
        'manuela.lima@email.com',
        6,
        3,
        '2025-02-10',
        'Irmã da Isabella'
    ),
    (
        'Lorenzo Oliveira',
        '2015-11-07',
        'Masculino',
        'Rua dos Jardins, 789',
        '11000000000',
        'lorenzo.oliveira@email.com',
        4,
        7,
        '2025-02-10',
        'Irmão da Sofia'
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
    ),
    (3, 3, '2025-03-01', TRUE, ''),
    (4, 4, '2025-03-01', TRUE, ''),
    (5, 5, '2025-03-01', TRUE, ''),
    (6, 6, '2025-03-01', FALSE, 'Consulta médica'),
    (7, 7, '2025-03-01', TRUE, ''),
    (8, 8, '2025-03-01', TRUE, ''),
    (1, 1, '2025-03-02', TRUE, ''),
    (
        2,
        2,
        '2025-03-02',
        TRUE,
        'Voltou após recuperação'
    ),
    (3, 3, '2025-03-02', FALSE, 'Viagem em família'),
    (4, 4, '2025-03-02', TRUE, ''),
    (5, 5, '2025-03-02', TRUE, ''),
    (6, 6, '2025-03-02', TRUE, ''),
    (7, 7, '2025-03-02', TRUE, ''),
    (
        8,
        8,
        '2025-03-02',
        FALSE,
        'Problema de transporte'
    ),
    (9, 3, '2025-03-01', TRUE, ''),
    (10, 4, '2025-03-01', TRUE, ''),
    (11, 1, '2025-03-01', TRUE, ''),
    (12, 6, '2025-03-01', TRUE, ''),
    (13, 2, '2025-03-01', TRUE, ''),
    (14, 3, '2025-03-01', TRUE, ''),
    (15, 7, '2025-03-01', TRUE, ''),
    (9, 3, '2025-03-02', TRUE, ''),
    (10, 4, '2025-03-02', TRUE, ''),
    (11, 1, '2025-03-02', FALSE, 'Dentista'),
    (12, 6, '2025-03-02', TRUE, ''),
    (13, 2, '2025-03-02', TRUE, ''),
    (14, 3, '2025-03-02', TRUE, ''),
    (15, 7, '2025-03-02', TRUE, '');

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
    (2, 2, 2, '2025-04-16', 'Trabalho', 9.0, ''),
    (
        3,
        3,
        3,
        '2025-04-17',
        'Prova',
        7.5,
        'Precisa melhorar na interpretação'
    ),
    (
        4,
        4,
        4,
        '2025-04-18',
        'Trabalho',
        9.5,
        'Excelente apresentação'
    ),
    (5, 5, 5, '2025-04-19', 'Prova', 8.0, ''),
    (
        6,
        6,
        6,
        '2025-04-20',
        'Atividade',
        10.0,
        'Muito criativo'
    ),
    (
        7,
        7,
        7,
        '2025-04-21',
        'Prova',
        6.5,
        'Recuperação necessária'
    ),
    (8, 8, 8, '2025-04-22', 'Trabalho', 8.5, ''),
    (
        9,
        3,
        3,
        '2025-04-17',
        'Prova',
        9.0,
        'Ótimo desempenho'
    ),
    (10, 4, 4, '2025-04-18', 'Trabalho', 8.0, ''),
    (
        11,
        1,
        1,
        '2025-04-15',
        'Prova',
        7.0,
        'Irmão do Lucas'
    ),
    (
        12,
        6,
        6,
        '2025-04-20',
        'Atividade',
        9.5,
        'Muito aplicada'
    ),
    (13, 2, 2, '2025-04-16', 'Trabalho', 8.5, ''),
    (
        14,
        3,
        3,
        '2025-04-17',
        'Prova',
        9.0,
        'Irmã da Isabella'
    ),
    (15, 7, 7, '2025-04-21', 'Prova', 7.5, ''),
    (
        1,
        1,
        1,
        '2025-05-15',
        'Prova',
        9.0,
        'Melhorou muito'
    ),
    (2, 2, 2, '2025-05-16', 'Trabalho', 8.5, ''),
    (
        3,
        3,
        3,
        '2025-05-17',
        'Prova',
        8.0,
        'Progresso visível'
    ),
    (
        4,
        4,
        4,
        '2025-05-18',
        'Trabalho',
        10.0,
        'Sempre exemplar'
    ),
    (5, 5, 5, '2025-05-19', 'Prova', 8.5, ''),
    (
        7,
        7,
        7,
        '2025-05-21',
        'Recuperação',
        7.0,
        'Passou na recuperação'
    );

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
    ),
    (
        '2025-03-02 12:00:00',
        'Almoço',
        'Macarrão à bolonhesa, salada verde',
        'Opção vegetariana disponível'
    ),
    (
        '2025-03-02 15:00:00',
        'Lanche',
        'Biscoito integral e leite',
        ''
    ),
    (
        '2025-03-03 12:00:00',
        'Almoço',
        'Peixe grelhado, arroz, legumes',
        'Sexta-feira - dia do peixe'
    ),
    (
        '2025-03-03 15:00:00',
        'Lanche',
        'Fruta da época e água',
        'Lanche saudável'
    ),
    (
        '2025-03-04 12:00:00',
        'Almoço',
        'Frango assado, purê, brócolis',
        ''
    ),
    (
        '2025-03-04 15:00:00',
        'Lanche',
        'Sanduíche natural e suco',
        ''
    ),
    (
        '2025-03-05 12:00:00',
        'Almoço',
        'Lasanha de carne, salada mista',
        'Cardápio especial'
    ),
    (
        '2025-03-05 15:00:00',
        'Lanche',
        'Bolo de cenoura e leite',
        'Feito pela cozinheira'
    ),
    (
        '2025-03-08 12:00:00',
        'Almoço',
        'Feijoada light, couve, laranja',
        'Segunda-feira especial'
    ),
    (
        '2025-03-08 15:00:00',
        'Lanche',
        'Tapioca com queijo',
        ''
    ),
    (
        '2025-03-09 08:00:00',
        'Café da manhã',
        'Pão francês, manteiga, leite com achocolatado',
        'Para alunos do período integral'
    ),
    (
        '2025-03-09 12:00:00',
        'Almoço',
        'Carne de panela, arroz, feijão, salada',
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
    ),
    (
        NULL,
        1,
        '2025-03-05',
        'Comunicado',
        'Festa Junina',
        'Festa junina da escola será no dia 25/06. Todos os alunos devem participar.',
        NULL
    ),
    (
        3,
        3,
        '2025-03-06',
        'Elogio',
        'Parabenização',
        'Aluno se destacou na apresentação de ciências.',
        3
    ),
    (
        NULL,
        NULL,
        '2025-03-07',
        'Comunicado',
        'Recesso Escolar',
        'Não haverá aulas nos dias 15 e 16 de março devido ao recesso.',
        NULL
    ),
    (
        4,
        4,
        '2025-03-08',
        'Ocorrencia',
        'Comportamento',
        'Aluna teve comportamento inadequado durante a aula.',
        4
    ),
    (
        5,
        5,
        '2025-03-09',
        'Elogio',
        'Liderança',
        'Aluno demonstrou excelente liderança no projeto em grupo.',
        5
    ),
    (
        NULL,
        6,
        '2025-03-10',
        'Comunicado',
        'Reunião de Pais - Pré-Escola',
        'Reunião específica para pais da pré-escola no dia 20/03.',
        NULL
    ),
    (
        7,
        7,
        '2025-03-11',
        'Comunicado',
        'Recuperação',
        'Aluno precisa comparecer às aulas de recuperação.',
        7
    ),
    (
        8,
        8,
        '2025-03-12',
        'Ocorrencia',
        'Falta de Material',
        'Aluna frequentemente esquece material escolar.',
        8
    ),
    (
        NULL,
        NULL,
        '2025-03-13',
        'Comunicado',
        'Cardápio da Semana',
        'Cardápio especial da semana disponível na secretaria.',
        NULL
    ),
    (
        9,
        3,
        '2025-03-14',
        'Elogio',
        'Melhoria',
        'Aluno apresentou grande melhoria nas notas.',
        9
    ),
    (
        10,
        4,
        '2025-03-15',
        'Comunicado',
        'Atividade Extra',
        'Aluna foi selecionada para participar da olimpíada de matemática.',
        10
    ),
    (
        NULL,
        2,
        '2025-03-16',
        'Comunicado',
        'Passeio Educativo',
        'Turma do 2º ano fará passeio ao museu no dia 30/03.',
        NULL
    ),
    (
        11,
        1,
        '2025-03-17',
        'Ocorrencia',
        'Atraso',
        'Aluno tem chegado atrasado frequentemente.',
        1
    ),
    (
        12,
        6,
        '2025-03-18',
        'Elogio',
        'Criatividade',
        'Aluna demonstrou muita criatividade na atividade de artes.',
        3
    );