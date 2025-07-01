# Projeto 3º Semestre - Sistema Escolar

Sistema Escolar desenvolvido em Node.js com Express, PostgreSQL, Sequelize e Docker, com arquitetura MVC. O objetivo é gerenciar informações de alunos, professores, turmas, frequência, avaliações, refeições e comunicados.

## Funcionalidades

- Cadastro e listagem de alunos, professores, responsáveis e turmas
- Controle de frequência dos alunos
- Registro de avaliações e notas
- Gerenciamento de refeições
- Envio e consulta de comunicados e ocorrências
- API RESTful documentada
- Deploy com Docker e NGINX

## Estrutura do Projeto
```
.
├── app/
│   ├── controllers/         # Lógica dos controladores da aplicação
│   ├── models/              # Definição dos modelos Sequelize
│   └── services/            # Lógica de negócio e serviços auxiliares
├── bootstrap/               # Arquivos de inicialização do projeto
├── config/                  # Configurações gerais (ex: banco de dados)
├── docker/
│   ├── nginx/               # Configurações do NGINX
│   ├── node/                # Configurações do container Node.js
│   └── postgres/            # Configurações do container PostgreSQL
├── docs/                    # Documentação do projeto
├── migrations/              # Arquivos de migração do banco de dados
├── public/                  # Arquivos públicos (ex: assets)
├── routes/                  # Definição das rotas da API
├── tests/                   # Testes automatizados
├── server.js                # Arquivo principal do servidor
├── docker-compose.yml       # Orquestração dos containers
├── .env.example             # Exemplo de variáveis de ambiente
└── readme.md                # Documentação do projeto
```
## Como rodar o projeto

1. **Clone o repositório**  

   ```ini
   git clone https://github.com/mafetrega/Projeto_ADS.git
   ```
2. **Configure o arquivo `.env`**  
   No windows:

   ```ini
   copy .env.example .env
   ```

   No linux:

   ```ini
   cp .env.example .env
   ```

3. **Suba os containers com Docker Compose**  
   ```ini
   docker-compose up --build
   ```

4. **Acesse a aplicação**  
   - (http://localhost:8080)

## Rotas

### Alunos
- `GET /api/Alunos` - Listar todos os alunos  
- `GET /api/Alunos/:id` - Obter um aluno específico por ID  
- `POST /api/Alunos` - Cadastrar novo aluno  
- `PUT /api/Alunos/:id` - Atualizar dados de um aluno  
- `DELETE /api/Alunos/:id` - Deletar um aluno  

### Avaliações
- `GET /api/Avaliacoes` - Listar todas as avaliações  
- `GET /api/Avaliacoes/:id` - Obter uma avaliação específica por ID  
- `POST /api/Avaliacoes` - Cadastrar nova avaliação  
- `PUT /api/Avaliacoes/:id` - Atualizar dados de uma avaliação  
- `DELETE /api/Avaliacoes/:id` - Deletar uma avaliação  

### Comunicados
- `GET /api/Comunicados` - Listar todos os comunicados  
- `GET /api/Comunicados/:id` - Obter um comunicado específico por ID  
- `POST /api/Comunicados` - Cadastrar novo comunicado  
- `PUT /api/Comunicados/:id` - Atualizar dados de um comunicado  
- `DELETE /api/Comunicados/:id` - Deletar um comunicado  

### Frequência
- `GET /api/frequencias` - Listar todas as frequências  
- `GET /api/frequencias/:id` - Obter uma frequência específica por ID  
- `POST /api/frequencias` - Cadastrar nova frequência  
- `PUT /api/frequencias/:id` - Atualizar dados de uma frequência  
- `DELETE /api/frequencias/:id` - Deletar uma frequência  

### Refeições
- `GET /api/Refeicoes` - Listar todas as refeições  
- `GET /api/Refeicoes/:id` - Obter uma refeição específica por ID  
- `POST /api/Refeicoes` - Cadastrar nova refeição  
- `PUT /api/Refeicoes/:id` - Atualizar dados de uma refeição  
- `DELETE /api/Refeicoes/:id` - Deletar uma refeição  

### Responsáveis
- `GET /api/responsaveis` - Listar todos os responsáveis  
- `GET /api/responsaveis/:id` - Obter um responsável específico por ID  
- `POST /api/responsaveis` - Cadastrar novo responsável  
- `PUT /api/responsaveis/:id` - Atualizar dados de um responsável  
- `DELETE /api/responsaveis/:id` - Deletar um responsável  

### Turmas
- `GET /api/Turma` - Listar todas as turmas  
- `GET /api/Turma/:id` - Obter uma turma específica por ID  
- `POST /api/Turma` - Cadastrar nova turma  
- `PUT /api/Turma/:id` - Atualizar dados de uma turma  
- `DELETE /api/Turma/:id` - Deletar uma turma  

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize
- Docker & Docker Compose
- NGINX

## Autores
- Guilherme Almeida Silva - 6324521
- Jefter Alves - 6424502
- Lucas Gabriel - 6324507
- Maria Fernanda Trega - 6324656
- Tais Gomes - 6324004