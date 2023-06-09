# Documentação do Sistema Backend

## Descrição
Este documento descreve os passos necessários para configurar e executar o sistema backend. O sistema utiliza o TypeScript como linguagem de programação, o Fastify como framework web, o Prisma como ORM e banco de dados, e inclui algumas dependências adicionais, como o ESLint e o JWT.

## Requisitos
Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:
- Node.js (versão 18.16.0 ou posterior)
- npm (gerenciador de pacotes do Node.js)

## Configuração

### 1. Inicialização do projeto
Abra o terminal e navegue até a pasta do projeto. Execute o seguinte comando para inicializar o projeto Node.js:
```
npm init -y
```

### 2. Instalação do TypeScript
Para utilizar o TypeScript no projeto, execute o seguinte comando:
```
npm i typescript -D
```

### 3. Instalação das definições de tipo do Node.js
Para obter as definições de tipo do Node.js, execute o seguinte comando:
```
npm i @types/node -D
```

### 4. Configuração do TypeScript
Execute o seguinte comando para gerar o arquivo de configuração do TypeScript:
```
npx tsc --init
```
Edite o arquivo `tsconfig.json` e certifique-se de que o valor da propriedade `target` esteja definido como `"es2020"`.

### 5. Instalação do pacote ts-node-dev
Execute o seguinte comando para instalar o pacote `ts-node-dev`:
```
npm i ts-node-dev -D
```

### 6. Instalação do Fastify
Para utilizar o Fastify como framework web, execute o seguinte comando:
```
npm i fastify
```

### 7. Instalação do ESLint
Execute o seguinte comando para instalar o ESLint:
```
npm install eslint -D
```

### 8. Configuração da Rocketseat
Se desejar utilizar a configuração do ESLint fornecida pela Rocketseat, execute os seguintes comandos:
```
npm i @rocketseat/eslint-config -D
```
Edite o arquivo `package.json` e adicione o seguinte script na seção `"scripts"`:
```
"lint": "eslint src --ext .ts --fix"
```

### 9. Configuração pessoal do ESLint
Se preferir utilizar sua própria configuração do ESLint, execute o seguinte comando:
```
npx eslint --init
```

### 10. Instalação do Prisma
Para utilizar o Prisma como ORM e banco de dados, execute o seguinte comando:
```
npm i prisma -D
```

### 11. Inicialização do Prisma
Execute o seguinte comando para inicializar o Prisma com o provedor de banco de dados SQLite:
```
npx prisma init --datasource-provider SQLite
```

### 12. Atualização da migração do Prisma
Para atualizar a migração do Prisma, execute o seguinte comando:
```
npx prisma migrate dev
```

### 13. Instalação do Prisma Client
Para instalar o Prisma Client, execute o seguinte comando:
```
npm i @prisma/client
```

### 14. Instalação do Fastify CORS
Para utilizar o CORS com o Fast

ify, execute o seguinte comando:
```
npm i @fastify/cors
```

### 15. Instalação do pacote dotenv
Para utilizar variáveis de ambiente com o pacote dotenv, execute o seguinte comando:
```
npm i dotenv -D
```

### 16. Instalação do Axios
Para utilizar o Axios para fazer requisições HTTP, execute o seguinte comando:
```
npm i axios
```

### 17. Instalação do @fastify/multipart
Para lidar com requisições multipart no Fastify, execute o seguinte comando:
```
npm i @fastify/multipart
```

### 18. Instalação do @fastify/static
Para servir arquivos estáticos no Fastify, execute o seguinte comando:
```
npm i @fastify/static
```

### 19. Instalação do JWT
Para utilizar o JWT (JSON Web Token) no Fastify, execute o seguinte comando:
```
npm i @fastify/jwt
```

## Utilização
Após a conclusão da configuração do sistema backend. Certifique-se de executar os comandos necessários para iniciar o servidor, como o script de desenvolvimento `npm run dev` definido no arquivo `package.json` ou outro comando equivalente especificado em sua configuração.

## Considerações finais
Esta documentação forneceu as instruções básicas para configurar e executar o sistema backend. Lembre-se de consultar a documentação oficial de cada pacote ou ferramenta utilizada para obter informações adicionais sobre como utilizá-los de forma eficaz.