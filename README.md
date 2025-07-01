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
│   ├── Controllers/         # Lógica dos controladores da aplicação
│   │   ├── ControllerProfessor/     # Controladores para professores
│   │   ├── ControllersAlunos/       # Controladores para alunos
│   │   ├── ControllersAvaliacoes/   # Controladores para avaliações
│   │   ├── ControllersComunicados/  # Controladores para comunicados
│   │   ├── ControllersFrequencia/   # Controladores para frequência
│   │   ├── ControllersRefeicoes/    # Controladores para refeições
│   │   ├── ControllersResponsaveis/ # Controladores para responsáveis
│   │   └── ControllersTurma/        # Controladores para turmas
│   └── Models/              # Definição dos modelos Sequelize
│       ├── ModelResponsaveis/       # Modelos para responsáveis
│       ├── ModelsAlunos/            # Modelos para alunos
│       ├── ModelsAvaliacoes/        # Modelos para avaliações
│       ├── ModelsComunicados/       # Modelos para comunicados
│       ├── ModelsFrequencia/        # Modelos para frequência
│       ├── ModelsRefeicoes/         # Modelos para refeições
│       └── ModelsTurma/             # Modelos para turmas
├── bootstrap/               # Arquivos de inicialização do projeto
├── config/                  # Configurações gerais (banco de dados, constantes)
├── docker/
│   ├── nginx/               # Configurações do NGINX
│   ├── node22-web/          # Configurações do container Node.js
│   └── postgres/            # Configurações do container PostgreSQL
├── docs/                    # Documentação do projeto
├── public/                  # Arquivos públicos (ex: index.html)
├── routes/                  # Definição das rotas da API
│   ├── RoutesAlunos/        # Rotas para alunos
│   ├── RoutesAvaliacoes/    # Rotas para avaliações
│   ├── RoutesComunicados/   # Rotas para comunicados
│   ├── RoutesFrequencia/    # Rotas para frequência
│   ├── RoutesRefeicoes/     # Rotas para refeições
│   ├── RoutesResponsavel/   # Rotas para responsáveis
│   ├── RoutesTurma/         # Rotas para turmas
│   └── web.js               # Arquivo principal de rotas
├── server.js                # Arquivo principal do servidor
├── docker-compose.yml       # Orquestração dos containers
├── Insomnia.yaml            # Configurações para testes de API
├── package.json             # Dependências e scripts do projeto
├── .env.example             # Exemplo de variáveis de ambiente
└── README.md                # Documentação do projeto
```
## Como rodar o projeto

1. Clonar o repositório:

   ```sh
   git clone https://github.com/mafetrega/Projeto_ADS.git
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd Projeto_ADS
   ```

3. Criar o arquivo `.env` na raiz do projeto copiando o `.env.example`:

   > No Windows:

   ```sh
   copy .env.example .env
   ```

   > No Linux:

   ```sh
   cp .env.example .env
   ```

4. Abra o Projeto no VS Code

   ```sh
   code .
   ```

5. Abrir o arquivo `.env` recém criado e preencher os campos abaixo:

   ```env
   POSTGRES_HOST=postgres_host
   POSTGRES_PORT=5432
   POSTGRES_USER=meu_usuario
   POSTGRES_PASSWORD=minha_senha
   POSTGRES_DB=Sistema_Escolar
   ```

6. Instalar as dependências:

   ```sh
   npm install
   ```

7. Subir a aplicação com Docker Compose:

   > Docker Compose tradicional:

   ```sh
   docker-compose up --build
   ```

   > Docker Compose moderno:

   ```sh
   docker compose up --build
   ```

8. **Acesse a aplicação**  
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