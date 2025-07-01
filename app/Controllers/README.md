# Documentação dos Controllers

Esta documentação descreve todos os controllers responsáveis pela lógica de negócio do sistema educacional. Cada controller implementa operações CRUD (Create, Read, Update, Delete) para seus respectivos recursos.

## Estrutura Geral

Todos os controllers seguem o padrão REST com as seguintes operações:
- **GET** `/api/[Recurso]` - Listar todos os registros
- **GET** `/api/[Recurso]/:id` - Buscar um registro específico
- **POST** `/api/[Recurso]` - Criar um novo registro
- **PUT** `/api/[Recurso]/:id` - Atualizar um registro existente
- **DELETE** `/api/[Recurso]/:id` - Remover um registro

---

## Controllers de Alunos

### Localização: `ControllersAlunos/`

### AlunoController.js
- **Função:** Gerencia todas as operações relacionadas aos alunos
- **Rotas:**
  - `GET /api/Alunos` - Lista todos os alunos
  - `GET /api/Alunos/:id` - Busca um aluno específico
  - `POST /api/Alunos` - Cria um novo aluno
  - `PUT /api/Alunos/:id` - Atualiza dados de um aluno
  - `DELETE /api/Alunos/:id` - Remove um aluno

#### Entrada esperada (POST/PUT):
```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "turma_id": 1,
  "data_nascimento": "2010-05-15",
  "responsavel_id": 1
}
```

#### Saídas:
- **Sucesso (GET):** Status 200 e dados do(s) aluno(s)
- **Sucesso (POST):** Status 201 e dados do aluno criado
- **Sucesso (PUT):** Status 200 e dados do aluno atualizado
- **Sucesso (DELETE):** Status 204 (sem conteúdo)
- **Não encontrado:** Status 404
- **Erro:** Status 400/500 com mensagem de erro

---

## Controllers de Avaliações

### Localização: `ControllersAvaliacoes/`

### InsertAvaliacoesController.js
- **Função:** Cria uma nova avaliação
- **Rota:** `POST /api/Avaliacoes`

### ListAvaliacoesController.js
- **Função:** Lista todas as avaliações cadastradas
- **Rota:** `GET /api/Avaliacoes`

### GetAvaliacoesController.js
- **Função:** Busca uma avaliação específica pelo ID
- **Rota:** `GET /api/Avaliacoes/:id`

### UpdateAvaliacoesController.js
- **Função:** Atualiza os dados de uma avaliação existente
- **Rota:** `PUT /api/Avaliacoes/:id`

### DeleteAvaliacoesController.js
- **Função:** Remove uma avaliação do banco de dados
- **Rota:** `DELETE /api/Avaliacoes/:id`

#### Entrada esperada (POST/PUT):
```json
{
  "aluno_id": 1,
  "turma_id": 2,
  "professor_id": 3,
  "data_avaliacao": "2025-06-25",
  "tipoavaliacao": "Prova",
  "nota": 9.5,
  "observacoes": "Ótimo desempenho"
}
```

#### Saídas:
- **Sucesso (GET):** Status 200 e dados da(s) avaliação(ões)
- **Sucesso (POST):** Status 201 e dados da avaliação criada
- **Sucesso (PUT):** Status 200 e dados da avaliação atualizada
- **Sucesso (DELETE):** Status 204 (sem conteúdo)
- **Não encontrado:** Status 404
- **Erro:** Status 500 com mensagem de erro

---

## Controllers de Comunicados

### Localização: `ControllersComunicados/`

### InsertComunicadosController.js
- **Função:** Cria um novo comunicado
- **Rota:** `POST /api/Comunicados`

### ListComunicadosController.js
- **Função:** Lista todos os comunicados cadastrados
- **Rota:** `GET /api/Comunicados`

### GetComunicadosController.js
- **Função:** Busca um comunicado específico pelo ID
- **Rota:** `GET /api/Comunicados/:id`

### UpdateComunicadosController.js
- **Função:** Atualiza os dados de um comunicado existente
- **Rota:** `PUT /api/Comunicados/:id`

### DeleteComunicadosController.js
- **Função:** Remove um comunicado do banco de dados
- **Rota:** `DELETE /api/Comunicados/:id`

#### Entrada esperada (POST/PUT):
```json
{
  "titulo": "Reunião de Pais",
  "descricao": "Reunião na próxima sexta-feira às 19h.",
  "data": "2025-06-25",
  "prioridade": "Alta"
}
```

#### Saídas:
- **Sucesso (GET):** Status 200 e dados do(s) comunicado(s)
- **Sucesso (POST):** Status 201 e dados do comunicado criado
- **Sucesso (PUT):** Status 200 e dados do comunicado atualizado
- **Sucesso (DELETE):** Status 204 (sem conteúdo)
- **Não encontrado:** Status 404
- **Erro:** Status 500 com mensagem de erro

---

## Controllers de Frequência

### Localização: `ControllersFrequencia/`

### ControllerCreateFrequencias.js
- **Função:** Registra a frequência de um aluno
- **Rota:** `POST /api/Frequencias`

### ControllerListFrequencias.js
- **Função:** Lista todas as frequências registradas
- **Rota:** `GET /api/Frequencias`

### ControllerGetFrequencias.js
- **Função:** Busca uma frequência específica pelo ID
- **Rota:** `GET /api/Frequencias/:id`

### ControllerUpdateFrequencias.js
- **Função:** Atualiza um registro de frequência
- **Rota:** `PUT /api/Frequencias/:id`

### ControllerDeleteFrequencias.js
- **Função:** Remove um registro de frequência
- **Rota:** `DELETE /api/Frequencias/:id`

#### Entrada esperada (POST/PUT):
```json
{
  "aluno_id": 1,
  "turma_id": 2,
  "data": "2025-06-25",
  "presente": true,
  "observacoes": "Aluno participativo"
}
```

#### Saídas:
- **Sucesso (GET):** Status 200 e dados da(s) frequência(s)
- **Sucesso (POST):** Status 201 e dados da frequência registrada
- **Sucesso (PUT):** Status 200 e dados da frequência atualizada
- **Sucesso (DELETE):** Status 204 (sem conteúdo)
- **Não encontrado:** Status 404
- **Erro:** Status 400/500 com mensagem de erro

---

## Controllers de Professores

### Localização: `ControllerProfessor/`

### ProfessorController.js
- **Função:** Controller principal para operações de professores

### InsertProfessoresController.js
- **Função:** Cadastra um novo professor
- **Rota:** `POST /api/Professores`

### ListProfessoresController.js
- **Função:** Lista todos os professores cadastrados
- **Rota:** `GET /api/Professores`

### GetProfessoresController.js
- **Função:** Busca um professor específico pelo ID
- **Rota:** `GET /api/Professores/:id`

### UpdateProfessoresController.js
- **Função:** Atualiza os dados de um professor
- **Rota:** `PUT /api/Professores/:id`

### DeleteProfessoresController.js
- **Função:** Remove um professor do sistema
- **Rota:** `DELETE /api/Professores/:id`

#### Entrada esperada (POST/PUT):
```json
{
  "nome": "Maria Santos",
  "email": "maria@escola.com",
  "telefone": "(11) 99999-9999",
  "disciplina": "Matemática",
  "data_contratacao": "2025-01-15"
}
```

#### Saídas:
- **Sucesso (GET):** Status 200 e dados do(s) professor(es)
- **Sucesso (POST):** Status 201 e dados do professor criado
- **Sucesso (PUT):** Status 200 e dados do professor atualizado
- **Sucesso (DELETE):** Status 204 (sem conteúdo)
- **Não encontrado:** Status 404
- **Erro:** Status 500 com mensagem de erro

---

## Controllers de Refeições

### Localização: `ControllersRefeicoes/`

### InsertRefeicoesController.js
- **Função:** Registra uma nova refeição
- **Rota:** `POST /api/Refeicoes`

### ListRefeicoesController.js
- **Função:** Lista todas as refeições registradas
- **Rota:** `GET /api/Refeicoes`

### GetRefeicoesController.js
- **Função:** Busca uma refeição específica pelo ID
- **Rota:** `GET /api/Refeicoes/:id`

### UpdateRefeicoesController.js
- **Função:** Atualiza os dados de uma refeição
- **Rota:** `PUT /api/Refeicoes/:id`

### DeleteRefeicoesController.js
- **Função:** Remove um registro de refeição
- **Rota:** `DELETE /api/Refeicoes/:id`

#### Entrada esperada (POST/PUT):
```json
{
  "data": "2025-06-25T12:00:00",
  "tipo_refeicao": "Almoço",
  "descricao": "Arroz, feijão, frango e salada",
  "observacoes": "Refeição balanceada"
}
```

#### Saídas:
- **Sucesso (GET):** Status 200 e dados da(s) refeição(ões)
- **Sucesso (POST):** Status 201 e dados da refeição criada
- **Sucesso (PUT):** Status 200 e dados da refeição atualizada
- **Sucesso (DELETE):** Status 204 (sem conteúdo)
- **Não encontrado:** Status 404
- **Erro:** Status 500 com mensagem de erro

---

## Controllers de Responsáveis

### Localização: `ControllersResponsaveis/`

### ControllerCreateResponsaveis.js
- **Função:** Cadastra um novo responsável
- **Rota:** `POST /api/Responsaveis`

### ControllerListResponsavel.js
- **Função:** Lista todos os responsáveis cadastrados
- **Rota:** `GET /api/Responsaveis`

### ControllerGetResponsavel.js
- **Função:** Busca um responsável específico pelo ID
- **Rota:** `GET /api/Responsaveis/:id`

### ControllerUpdateResponsavel.js
- **Função:** Atualiza os dados de um responsável
- **Rota:** `PUT /api/Responsaveis/:id`

### ControllerDeleteResponsavel.js
- **Função:** Remove um responsável do sistema
- **Rota:** `DELETE /api/Responsaveis/:id`

#### Entrada esperada (POST/PUT):
```json
{
  "nome": "Carlos Silva",
  "email": "carlos@email.com",
  "telefone": "(11) 98888-8888",
  "endereco": "Rua das Flores, 123",
  "parentesco": "Pai"
}
```

#### Saídas:
- **Sucesso (GET):** Status 200 e dados do(s) responsável(is)
- **Sucesso (POST):** Status 201 e dados do responsável criado
- **Sucesso (PUT):** Status 200 e dados do responsável atualizado
- **Sucesso (DELETE):** Status 204 (sem conteúdo)
- **Não encontrado:** Status 404
- **Erro:** Status 500 com mensagem de erro

---

## Controllers de Turmas

### Localização: `ControllersTurma/`

### InsertTurmaController.js
- **Função:** Cria uma nova turma
- **Rota:** `POST /api/Turmas`

### ListTurmaController.js
- **Função:** Lista todas as turmas cadastradas
- **Rota:** `GET /api/Turmas`

### GetTurmaController.js
- **Função:** Busca uma turma específica pelo ID
- **Rota:** `GET /api/Turmas/:id`

### UpdateTurmaController.js
- **Função:** Atualiza os dados de uma turma
- **Rota:** `PUT /api/Turmas/:id`

### DeleteTurmaController.js
- **Função:** Remove uma turma do sistema
- **Rota:** `DELETE /api/Turmas/:id`

#### Entrada esperada (POST/PUT):
```json
{
  "nome": "5º Ano A",
  "serie": "5º Ano",
  "turno": "Matutino",
  "ano_letivo": 2025,
  "professor_id": 1,
  "capacidade_maxima": 30
}
```

#### Saídas:
- **Sucesso (GET):** Status 200 e dados da(s) turma(s)
- **Sucesso (POST):** Status 201 e dados da turma criada
- **Sucesso (PUT):** Status 200 e dados da turma atualizada
- **Sucesso (DELETE):** Status 204 (sem conteúdo)
- **Não encontrado:** Status 404
- **Erro:** Status 500 com mensagem de erro

---

## Observações Gerais

### Padrões Utilizados

1. **Modelos Sequelize**: Todos os controllers utilizam modelos Sequelize para interação com o banco de dados PostgreSQL.

2. **Respostas REST**: As respostas seguem o padrão REST com status HTTP apropriados:
   - `200` - Sucesso (GET, PUT)
   - `201` - Criado com sucesso (POST)
   - `204` - Sem conteúdo (DELETE)
   - `400` - Requisição inválida
   - `404` - Recurso não encontrado
   - `500` - Erro interno do servidor

3. **Formato JSON**: Todos os dados são enviados e recebidos em formato JSON.

4. **Validação**: Campos obrigatórios são validados antes das operações no banco de dados.

5. **Tratamento de Erro**: Todos os controllers implementam tratamento de erros adequado.

### Relacionamentos

- **Alunos** se relacionam com **Turmas** e **Responsáveis**
- **Avaliações** se relacionam com **Alunos**, **Turmas** e **Professores**
- **Frequências** se relacionam com **Alunos** e **Turmas**
- **Turmas** se relacionam com **Professores**

### Fluxo de Exemplo

1. **Cadastrar Responsável**: `POST /api/Responsaveis`
2. **Cadastrar Professor**: `POST /api/Professores`
3. **Criar Turma**: `POST /api/Turmas`
4. **Cadastrar Aluno**: `POST /api/Alunos`
5. **Registrar Frequência**: `POST /api/Frequencias`
6. **Criar Avaliação**: `POST /api/Avaliacoes`
7. **Registrar Refeição**: `POST /api/Refeicoes`
8. **Criar Comunicado**: `POST /api/Comunicados`

### Estrutura de Arquivos

Cada conjunto de controllers está organizado em sua própria pasta:
- `ControllersAlunos/` - Gerenciamento de alunos
- `ControllersAvaliacoes/` - Gerenciamento de avaliações
- `ControllersComunicados/` - Gerenciamento de comunicados
- `ControllersFrequencia/` - Controle de frequência
- `ControllerProfessor/` - Gerenciamento de professores
- `ControllersRefeicoes/` - Controle de refeições
- `ControllersResponsaveis/` - Gerenciamento de responsáveis
- `ControllersTurma/` - Gerenciamento de turmas

### Dependências

- **Express.js** - Framework web
- **Sequelize** - ORM para PostgreSQL
- **Bootstrap** - Configurações da aplicação
- **Constants** - Constantes da aplicação (status HTTP, etc.)

---

*Documentação gerada para o Sistema de Gestão Educacional - Projeto ADS*
*Última atualização: 1 de julho de 2025*
