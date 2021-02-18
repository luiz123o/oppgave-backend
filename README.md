# Node - TASK MANAGER
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/luiz123o/TaskManager-BackEnd/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/luiz123o/TaskManager-BackEnd.svg)
![](https://img.shields.io/github/last-commit/luiz123o/TaskManager-BackEnd.svg?color=red)
![](https://img.shields.io/github/languages/top/luiz123o/TaskManager-BackEnd.svg?color=yellow)
![](https://img.shields.io/github/languages/count/luiz123o/TaskManager-BackEnd.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/luiz123o/TaskManager-BackEnd.svg)
![](https://img.shields.io/github/repo-size/luiz123o/TaskManager-BackEnd.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)

Aplicação TaskManager usando Node.js, Express, Multer, date-fns, Youch, dotenv e Sentry.

## Índice

- [Desenvolvimento](#desenvolvimento)

  - [Instalação do Projeto](#Instalação-de-Projeto)

  - [Execução do Projeto](#Execução-de-Projeto-para-Produção-no-Node.js)
  - [Testes Realizados no Insomnia](#Testes-Insomnia)

### Bibliotecas

- [@sentry/node](https://www.npmjs.com/package/@sentry/node)
```
yarn add @sentry/node@5.10.2
```
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
```
yarn add bcryptjs
```
- [date-fns](https://www.npmjs.com/package/date-fns)
```
yarn add date-fns
```
- [dotenv](https://www.npmjs.com/package/dotenv)
```
yarn add dotenv
```
- [ESLint](https://www.npmjs.com/package/eslint)
```
yarn add eslint -D
```
  ### Instalação no projeto Node.js

  Para um projeto Node.js, as configurações são:

  <sub> How would you like to use ESLint? **To check syntax, find problems, and enforce code style** </sub>

  Se estiver utilizando o Sucrase:
  <sub> What type of modules does your project use? **JavaScript modules (import/export)** </sub>
  Senão estiver:
  <sub> What type of modules does your project use? **CommonJS (require/exports)** </sub>

  <sub> Which framework does your project use? **None of these** </sub>

  <sub> Where does your code run? **Node** </sub>

  <sub> How would you like to define a style for your project? **Use a popular style guide** </sub>

  <sub> Which style guide do you want to follow? **Airbnb (https://github.com/airbnb/javascript)** </sub>

  <sub> What format do you want your config file to be in? **JavaScript** </sub>

  <sub> Would you like to install them now with npm? (Y/n) **Y** </sub>


- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
```
yarn add eslint-config-prettier -D
```
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
```
yarn add eslint-plugin-prettier -D
```
- [Express](https://www.npmjs.com/package/express)
```
yarn add express
```
- [ExpressJS Async Errors](https://www.npmjs.com/package/express-async-errors)
```
yarn add express-async-errors
```
- [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
```
yarn add jsonwetoken
```
- [Nodemon](https://www.npmjs.com/package/nodemon)
```
yarn add nodemon -D
```
- [pg](https://www.npmjs.com/package/pg)
```
yarn add pg
```
- [pg-hstore](https://www.npmjs.com/package/pg-hstore)
```
yarn add pg-hstore
```
- [Prettier](https://www.npmjs.com/package/prettier)
```
yarn add prettier -D
```
- [Sequelize](https://www.npmjs.com/package/sequelize)
```
yarn add sequelize
```
- [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
```
yarn add sequelize-cli -D
```
- [Sucrase](https://www.npmjs.com/package/sucrase)
```
yarn add sucrase -D
```
- [Youch](https://www.npmjs.com/package/youch)
```
yarn add Youch
```
- [Yup](https://www.npmjs.com/package/yup)
```
yarn add yup
```

### API

- **Interna**

  - **Rotas**

    - Tarefas

      - Lista todas as tarefas
      - Adiciona uma nova tarefa
      - Atualiza uma tarfea.
      - Cancela uma tarefa existente

    - Usuários

      - Adiciona novos usuários
      - Edita dados de usuários existentes

    - Sessões

      - Realiza uma nova sessão



### Ferramentas

- [Docker](https://www.docker.com/docker-community)
  - Imagem do PostgreSQL:
    - [postgres](https://hub.docker.com/_/postgres)

  - Criar um container e executar:
    - docker run --name <nome_container> -p <0000>:<0000> -d -t <nome_imagem>

- [Insomnia](https://insomnia.rest)

- [Postbird](https://electronjs.org/apps/postbird)

- [Sentry](https://www.npmjs.com/package/@sentry/node)

# Instalações

## Instalação de Projeto

Depois de instalado o Node.js/Yarn, abra o prompt de comando e dentro da pasta do projeto execute os comandos abaixo.

Instalar as dependências do projeto:

```
npm install | yarn
```
## Adicionar container docker
Crie um container com a imagem postgres

```
docker run --name taskmanager -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres
```

Logo após crie uma database dentro da imagem do postgres com o nome taskmanager.

## Criando as tabelas
```

```

## Execução de Projeto para Desenvolvimento no Node.js

Executar o projeto para desenvolvimento (incluindo Nodemon):

```
npm dev | yarn dev
```

## Execução de Projeto para Produção no Node.js

Executar o projeto para produção:

```
npm start | yarn start
```
# Testes

## Testes Insomnia
01 - Criando Novo Usuario
![](https://github.com/luiz123o/TaskManager-BackEnd/blob/master/src/database/SS's%20para%20readme/01%20-%20Cadastro.JPG?raw=true)
02 - Realizando Sessão
![](https://github.com/luiz123o/TaskManager-BackEnd/blob/master/src/database/SS's%20para%20readme/02%20-%20Login.JPG?raw=true)
03 - Criando Tarefa
![](https://github.com/luiz123o/TaskManager-BackEnd/blob/master/src/database/SS's%20para%20readme/03%20-%20Criando%20Tarefas.JPG?raw=true)
04 - Atualizando para Concluída
![](https://github.com/luiz123o/TaskManager-BackEnd/blob/master/src/database/SS's%20para%20readme/04%20-%20Atualizando%20para%20concluida.JPG?raw=true)
05 - Listando Tarefas com query
![](https://github.com/luiz123o/TaskManager-BackEnd/blob/master/src/database/SS's%20para%20readme/05%20-%20listando%20tarefa%20do%20dia%20query%20selecionada.JPG?raw=true)
06 - Excluindo Tarefa
![](https://github.com/luiz123o/TaskManager-BackEnd/blob/master/src/database/SS's%20para%20readme/06%20-%20excluindo%20tarefa.JPG?raw=true)
