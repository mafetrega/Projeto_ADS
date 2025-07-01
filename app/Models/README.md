# Documentação dos Models

Esta documentação descreve todos os models Sequelize utilizados no sistema educacional. Cada model representa uma tabela no banco de dados PostgreSQL e define a estrutura, relacionamentos e validações dos dados.

---

## Model Alunos

Este arquivo define o modelo Sequelize para a tabela `alunos` do banco de dados.

### Estrutura da Tabela

A tabela `alunos` armazena informações básicas dos estudantes cadastrados no sistema.

#### Exemplo de Estrutura SQL

```sql
CREATE TABLE alunos (
    aluno_id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    email VARCHAR(255),
    telefone VARCHAR(20),
    endereco TEXT,
    turma_id INT,
    responsavel_id INT,
    FOREIGN KEY (turma_id) REFERENCES turma (turma_id),
    FOREIGN KEY (responsavel_id) REFERENCES responsaveis (responsavel_id)
);
```

### Campos da Model

- **aluno_id**: Chave primária, auto-incremento.
- **nome**: Nome completo do aluno (obrigatório).
- **data_nascimento**: Data de nascimento do aluno (opcional).
- **email**: Email do aluno (opcional).
- **telefone**: Telefone para contato (opcional).
- **endereco**: Endereço residencial (opcional).
- **turma_id**: ID da turma em que o aluno está matriculado (opcional).
- **responsavel_id**: ID do responsável pelo aluno (opcional).

### Observações

- O campo `nome` é obrigatório para identificação do aluno.
- Relaciona-se com as tabelas `turma` e `responsaveis` através de chaves estrangeiras.
- Timestamps automáticos estão desabilitados.

**Arquivo:** [`Aluno.js`](app/Models/ModelsAlunos/Aluno.js)

---

## Model Avaliações

Este arquivo define o modelo Sequelize para a tabela `avaliacoes` do banco de dados.

### Estrutura da Tabela

A tabela `avaliacoes` armazena registros de avaliações realizadas para alunos em turmas, com informações sobre o professor, tipo, nota e observações.

#### Exemplo de Estrutura SQL

```sql
CREATE TABLE avaliacoes (
    avaliacao_id SERIAL PRIMARY KEY,
    aluno_id INT NOT NULL, -- Chave estrangeira para a tabela Alunos
    turma_id INT NOT NULL, -- Chave estrangeira para a tabela Turma
    professor_id INT NOT NULL, -- Chave estrangeira para a tabela Professores
    data_avaliacao TIMESTAMP NOT NULL,
    tipoavaliacao VARCHAR(100),
    nota DECIMAL(5,2),
    observacoes TEXT,
    FOREIGN KEY (aluno_id) REFERENCES alunos (aluno_id),
    FOREIGN KEY (turma_id) REFERENCES turma (turma_id),
    FOREIGN KEY (professor_id) REFERENCES professores (professor_id)
);
```

### Campos da Model

- **avaliacao_id**: Chave primária, auto-incremento.
- **aluno_id**: ID do aluno avaliado (obrigatório).
- **turma_id**: ID da turma relacionada (obrigatório).
- **professor_id**: ID do professor responsável (obrigatório).
- **data_avaliacao**: Data e hora da avaliação (obrigatório).
- **tipoavaliacao**: Tipo da avaliação, por exemplo, "Prova", "Trabalho", etc. (opcional).
- **nota**: Nota atribuída na avaliação com até 2 casas decimais (opcional).
- **observacoes**: Observações adicionais sobre a avaliação (opcional).

### Observações

- Todos os campos de chave estrangeira são obrigatórios, garantindo o vínculo da avaliação com aluno, turma e professor.
- O campo `nota` utiliza DECIMAL(5,2), permitindo notas até 999.99.
- O model é utilizado pelos controllers para realizar operações de CRUD no banco de dados.
- Timestamps automáticos estão desabilitados.

**Arquivo:** [`ModelAvaliacoes.js`](app/Models/ModelsAvaliacoes/ModelAvaliacoes.js)

---

## Model Comunicados

Este arquivo define o modelo Sequelize para a tabela `comunicados` do banco de dados.

### Estrutura da Tabela

A tabela `comunicados` armazena registros de comunicados e ocorrências relacionados a alunos, turmas e responsáveis. Permite também comunicados gerais (sem vínculo obrigatório com aluno ou turma).

#### Exemplo de Estrutura SQL

```sql
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
```

### Campos da Model

- **comunicado_id**: Chave primária, auto-incremento.
- **aluno_id**: ID do aluno relacionado ao comunicado (pode ser nulo).
- **turma_id**: ID da turma relacionada ao comunicado (pode ser nulo).
- **data_publicacao**: Data e hora da publicação do comunicado (obrigatório).
- **tipocomunicado**: Tipo do comunicado, por exemplo, "Ocorrencia" ou "Comunicado" (obrigatório).
- **titulo**: Título do comunicado (obrigatório).
- **mensagem**: Conteúdo do comunicado (obrigatório).
- **responsavel_id**: ID do responsável relacionado ao comunicado (pode ser nulo).

### Observações

- As chaves estrangeiras (`aluno_id`, `turma_id`, `responsavel_id`) podem ser nulas caso o comunicado seja geral.
- O campo `tipocomunicado` diferencia entre comunicados gerais e ocorrências.
- Timestamps automáticos estão desabilitados.
- O model é utilizado pelos controllers para realizar operações de CRUD no banco de dados.

**Arquivo:** [`ModelComunicados.js`](app/Models/ModelsComunicados/ModelComunicados.js)

---

## Model Frequência

Este arquivo define o modelo Sequelize para a tabela `frequencia` do banco de dados.

### Estrutura da Tabela

A tabela `frequencia` armazena os registros de presença dos alunos nas aulas, permitindo controle detalhado da frequência escolar.

#### Exemplo de Estrutura SQL

```sql
CREATE TABLE frequencia (
    frequenciaid SERIAL PRIMARY KEY,
    aluno_id INT NOT NULL,
    turma_id INT NOT NULL,
    data TIMESTAMP NOT NULL,
    presente BOOLEAN NOT NULL,
    observacoes TEXT,
    FOREIGN KEY (aluno_id) REFERENCES alunos (aluno_id),
    FOREIGN KEY (turma_id) REFERENCES turma (turma_id)
);
```

### Campos da Model

- **frequencia_id**: Chave primária, auto-incremento (campo `frequenciaid` no banco).
- **aluno_id**: ID do aluno cuja frequência está sendo registrada (obrigatório).
- **turma_id**: ID da turma relacionada ao registro (obrigatório).
- **data**: Data e hora do registro de frequência (obrigatório).
- **presente**: Status de presença do aluno - true/false (obrigatório).
- **observacoes**: Observações adicionais sobre a presença/ausência (opcional).

### Observações

- O campo de chave primária no banco é `frequenciaid`, mapeado para `frequencia_id` no model.
- Todos os campos de chave estrangeira são obrigatórios.
- O campo `presente` é boolean, garantindo clareza no status de presença.
- Relaciona-se com as tabelas `alunos` e `turma`.
- Timestamps automáticos estão desabilitados.

**Arquivo:** [`ModelFrequencia.js`](app/Models/ModelsFrequencia/ModelFrequencia.js)

---

## Model Refeições

Este arquivo define o modelo Sequelize para a tabela `refeicoes` do banco de dados.

### Estrutura da Tabela

A tabela `refeicoes` armazena informações sobre as refeições servidas na instituição, incluindo cardápio, horários e observações.

#### Exemplo de Estrutura SQL

```sql
CREATE TABLE refeicoes (
    refeicao_id SERIAL PRIMARY KEY,
    data TIMESTAMP NOT NULL,
    tipo_refeicao VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    observacoes TEXT
);
```

### Campos da Model

- **refeicao_id**: Chave primária, auto-incremento.
- **data**: Data e horário da refeição (obrigatório).
- **tipo_refeicao**: Tipo da refeição, ex: "Café da manhã", "Almoço", "Lanche" (obrigatório).
- **descricao**: Descrição detalhada do cardápio/menu (obrigatório).
- **observacoes**: Observações adicionais sobre a refeição (obrigatório no model atual).

### Observações

- Todos os campos são obrigatórios conforme definição atual do model.
- Útil para planejamento e controle de cardápios escolares.
- Pode ser utilizada para comunicar cardápios aos responsáveis.
- Timestamps automáticos estão desabilitados.
- O model é exportado através de uma função IIFE (Immediately Invoked Function Expression).

**Arquivo:** [`ModelRefeicoes.js`](app/Models/ModelsRefeicoes/ModelRefeicoes.js)

---

## Model Responsáveis

Este arquivo define o modelo Sequelize para a tabela `responsaveis` do banco de dados.

### Estrutura da Tabela

A tabela `responsaveis` armazena informações dos responsáveis pelos alunos, incluindo dados de contato e relacionamento familiar.

#### Exemplo de Estrutura SQL

```sql
CREATE TABLE responsaveis (
    responsavel_id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    parentesco VARCHAR(50),
    telefone VARCHAR(20),
    email VARCHAR(255),
    endereco VARCHAR(255),
    observacoes TEXT
);
```

### Campos da Model

- **responsavel_id**: Chave primária, auto-incremento.
- **nome**: Nome completo do responsável (obrigatório).
- **parentesco**: Grau de parentesco com o aluno, ex: "Pai", "Mãe", "Avô" (opcional).
- **telefone**: Número de telefone para contato (opcional).
- **email**: Endereço de email para comunicação (opcional).
- **endereco**: Endereço residencial (opcional).
- **observacoes**: Observações adicionais sobre o responsável (opcional).

### Observações

- Apenas o campo `nome` é obrigatório para identificação.
- Permite múltiplos responsáveis por aluno através de relacionamentos.
- Todos os campos de contato são opcionais, oferecendo flexibilidade.
- Relaciona-se com a tabela `alunos` através de chave estrangeira.
- Timestamps automáticos estão desabilitados.
- Importante para comunicação escola-família.

**Arquivo:** [`ModelResponsaveis.js`](app/Models/ModelResponsaveis/ModelResponsaveis.js)

---

## Model Turmas

Este arquivo define o modelo Sequelize para a tabela `turma` do banco de dados.

### Estrutura da Tabela

A tabela `turma` armazena informações sobre as turmas/classes da instituição, incluindo professor responsável e ano letivo.

#### Exemplo de Estrutura SQL

```sql
CREATE TABLE turma (
    turma_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    professor_id INT NOT NULL, -- Chave estrangeira para a tabela Professores
    anoletivo INT NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY (professor_id) REFERENCES professores (professor_id)
);
```

### Campos da Model

- **turma_id**: Chave primária, auto-incremento.
- **nome**: Nome identificador da turma, ex: "5º Ano A", "1ª Série" (obrigatório).
- **professor_id**: ID do professor responsável pela turma (obrigatório).
- **anoletivo**: Ano letivo da turma, ex: 2025 (obrigatório).
- **descricao**: Descrição adicional da turma (obrigatório).

### Observações

- Todos os campos são obrigatórios conforme definição atual do model.
- Relaciona-se com a tabela `professores` através da chave estrangeira `professor_id`.
- Cada turma tem um professor responsável principal.
- O campo `anoletivo` permite controle por período escolar.
- Relaciona-se com as tabelas `alunos`, `avaliacoes` e `frequencia`.
- Timestamps automáticos estão desabilitados.
- O model é exportado através de uma função IIFE (Immediately Invoked Function Expression).

**Arquivo:** [`ModelTurma.js`](app/Models/ModelsTurma/ModelTurma.js)

---

## Relacionamentos Entre Models

### Principais Relacionamentos

1. **Alunos ↔ Turmas**: Relacionamento N:1 (muitos alunos para uma turma)
2. **Alunos ↔ Responsáveis**: Relacionamento N:1 (muitos alunos para um responsável)
3. **Turmas ↔ Professores**: Relacionamento N:1 (muitas turmas para um professor)
4. **Avaliações**: Relaciona alunos, turmas e professores (N:N:N)
5. **Frequência**: Relaciona alunos e turmas (N:N)
6. **Comunicados**: Pode relacionar alunos, turmas e responsáveis opcionalmente

### Diagrama de Relacionamentos

```
Responsaveis (1) ←→ (N) Alunos (N) ←→ (1) Turmas (N) ←→ (1) Professores
                          ↓                    ↓
                     Frequencia         Avaliacoes
                          ↓                    ↓
                    Comunicados ←→ Responsaveis
                          ↓
                     Refeicoes (independente)
```

---

## Observações Gerais

### Padrões Utilizados

1. **Sequelize ORM**: Todos os models utilizam Sequelize para mapeamento objeto-relacional.

2. **PostgreSQL**: Banco de dados principal com suporte a tipos avançados.

3. **Convenções de Nomenclatura**:
   - Nomes de tabela no plural em minúsculas
   - IDs com sufixo `_id`
   - Campos em snake_case

4. **Timestamps**: Desabilitados em todos os models (`timestamps: false`)

5. **Chaves Primárias**: Todas utilizam auto-incremento com tipo INTEGER

6. **Exportação**: Alguns models usam funções IIFE, outros exportação direta

### Validações e Constraints

- **NOT NULL**: Campos obrigatórios definidos com `allowNull: false`
- **Tipos de Dados**: Adequados para cada tipo de informação (STRING, INTEGER, DATE, BOOLEAN, TEXT, DECIMAL)
- **Tamanhos**: Definidos para campos VARCHAR quando necessário

### Configurações Comuns

```javascript
{
    tableName: "nome_tabela",
    timestamps: false
}
```

### Estrutura de Arquivos

Cada model está organizado em sua própria pasta:
- `ModelsAlunos/` - Model de alunos
- `ModelsAvaliacoes/` - Model de avaliações  
- `ModelsComunicados/` - Model de comunicados
- `ModelsFrequencia/` - Model de frequência
- `ModelsRefeicoes/` - Model de refeições
- `ModelResponsaveis/` - Model de responsáveis
- `ModelsTurma/` - Model de turmas

### Dependências

- **Sequelize** - ORM principal
- **DataTypes** - Tipos de dados Sequelize
- **Config/sequelize.js** - Configuração de conexão com banco

---

*Documentação gerada para o Sistema de Gestão Educacional - Projeto ADS*  
*Última atualização: 1 de julho de 2025*
