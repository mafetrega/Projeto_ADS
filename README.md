# Projeto_ADS

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
│ ├── Controllers/ # Lógica dos controladores da aplicação 
│ └── Models/ # Definição dos modelos Sequelize 
├── bootstrap/ # Arquivos de inicialização do projeto 
├── config/ # Configurações gerais (ex: banco de dados) 
├── docker/ 
│ ├── nginx/ # Configurações do NGINX 
│ ├── node22-web/ # Configurações do container Node.js 
│ └── postgres/ # Configurações do container PostgreSQL 
├── docs/ # Documentação do projeto 
├── public/ # Arquivos públicos (ex: assets) 
├── routes/ # Definição das rotas da API 
├── server.js # Arquivo principal do servidor 
├── docker-compose.yml # Orquestração dos containers 
├── .env.example # Exemplo de variáveis de ambiente 
└── readme.md # Documentação do projeto
```
## Como rodar o projeto

1. **Clone o repositório**  
   `git clone <url-do-repositorio>`

2. **Configure o arquivo `.env`**  
   Copie `.env.example` para `.env` e ajuste as variáveis conforme necessário.

3. **Suba os containers com Docker Compose**  
   `docker-compose up --build`

4. **Acesse a aplicação**  
   - Frontend: [http://localhost:8080](http://localhost:8080)
   - API: [http://localhost:8080/api](http://localhost:8080/api)

## Documentação da API

A documentação pode ser acessada via Swagger em `/api-docs` (se configurado).

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize
- Docker & Docker Compose
- NGINX
- Swagger (documentação da API)

## Autores

- Guilherme
- Jefter
- Maria Fernanda
- Thais

---