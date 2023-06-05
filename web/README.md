# Documentação da aplicação Web

Esta documentação fornecerá as instruções básicas para configurar uma aplicação Next.js e instalar as bibliotecas necessárias para o desenvolvimento.

## Pré-requisitos

- Node.js instalado (versão 18.16.0 ou posterior)
- NPM instalado 

## Passo 1: Criar o aplicativo Next.js

Para começar, você precisa criar um novo aplicativo Next.js. Para fazer isso, abra seu terminal e execute o seguinte comando:

```
npx create-next-app@latest web --use-npm
```

Este comando criará uma nova pasta chamada `web` com um projeto Next.js básico configurado.

## Passo 2: Instalar bibliotecas adicionais

Depois de criar o aplicativo Next.js, você precisará instalar algumas bibliotecas adicionais para atender às necessidades específicas do seu projeto. Execute os seguintes comandos no terminal:

```
npm i prettier-plugin-tailwindcss -D
npm i @rocketseat/eslint-config -D
npm i lucide-react
npm i axios
npm i @tailwindcss/forms -D
npm i js-cookie
npm i --save-dev @types/js-cookie
```

Esses comandos instalarão as seguintes bibliotecas:

- `prettier-plugin-tailwindcss`: um plugin do Prettier para integração com o Tailwind CSS.
- `@rocketseat/eslint-config`: uma configuração do ESLint fornecida pela Rocketseat para padronizar as regras de linting.
- `lucide-react`: uma biblioteca de ícones SVG para React.
- `axios`: uma biblioteca para fazer requisições HTTP.
- `@tailwindcss/forms`: um plugin do Tailwind CSS para estilizar formulários.
- `js-cookie`: uma biblioteca para lidar com cookies em JavaScript.
- `@types/js-cookie`: tipos TypeScript para a biblioteca js-cookie.


## Conclusão

Após seguir os passos acima, você terá configurado uma aplicação Next.js e instalado as bibliotecas necessárias para o desenvolvimento do seu projeto. Agora você pode começar a construir sua aplicação usando o comando: `npm run dev `


