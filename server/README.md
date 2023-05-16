Backend

> npm init -y 

> npm i typescript -D  

> npm i @types/node -D

> npx tsc --init    

> npm i tsx -D 

* arquivo tsconfig.json

> target: es2020

* arquivo package.json na tag script adicionar:

> "dev": "tsx watch src/server.ts"

* instalar fastify

> npm i fastify


* Instalar o eslint

> npm install eslint -D    

configuração da rocketseat
> npm i @rocketseat/eslint-config -D
em package.json na tag script adicionar "lint": "eslint src --ext .ts --fix"

configuração pessoal

>npx eslint --init


* Instalação do Prisma

> npm i prisma -D

* Iniciando prisma 

> npx prisma init --datasource-provider SQLite

* Atualizar migration do prisma
> npx prisma migrate dev   

* Instalar prisma client
> npm i @prisma/client

