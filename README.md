# Project Blogs Api

Este repositório contém o projeto Blogs Api desenvolvido por [Raquel G. C Würzler](https://www.linkedin.com/in/raquel-c-wurzler/) enquanto estudava na [Trybe](https://www.betrybe.com/) no módulo de BackEnd :rocket:

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa paga quando conseguir um bom trabalho."_

#### Projeto de conclusão da seção 6, no módulo de Back-end

### Principal objetivo:
* Criar uma API e um banco de dados para a produção de conteúdo para um blog. Essa aplicação deve ser em Node.js e usando o pacote sequelize para fazer um CRUD (Create, Read, Update e Delete) de usuário, categorias e posts.

### Detalhes desse projeto:
* Utilização da ORM (Object-Relational Mapping - *mapeamento objeto-relacional*) - Sequelize;
* Utilização de um servidor Noje.js;
* Utilização do framework Express para criar uma rota de um endpoint de API, acessível pelo navegador;
* Para melhorar a organização utilizei o express.Router() pra separar os endpoints em outros arquivos;
* Os endpoints foram feitos em arquivos separados pelas rotas: "/user", "/categories", "/post" e "/login" e estão na pasta router;
* Os middlewares foram salvos em uma pasta separada;
* Pastas separadas para cada camada do MSC (Model, Service, Controller);
* Pastas separadas do sequelize (Migrations, Seeders);
* Relacionamentos no sequelize (1:1, 1:N, N:N);
* Utilização de JWT (JSON Web Token) para gerar tokens, autenticar e autorizar o acesso a rotas do Express;

##### Arquivos disponibilizados pela Trybe:
* .eslintignore;
* .eslintrc.json;
* .gitignore;
* .sequelizerc;
* Dockerfile;
* docker-compose.yml;
* jest.config.js;
* package-lock.json;
* package.json;

## Stack utilizada

**Back-end:** Node, Express, JavaScript, MySql, Sequelize

```bash
# Abra um terminal e copie este repositório com o comando
git clone git@github.com:Raquel-Wurzler/project_blogs_api.git

# Entre na pasta do projeto 
cd project_blogs_api

# Instale as dependências
yarn install
ou 
npm install

# Rode o servidor
npm start

# Configure o arquivo .env com suas informações
conforme o arquivo .env-example

# Rode a aplicação
usando extensão Live Server no vs-code na porta que você especificar no arquivo .env

```

