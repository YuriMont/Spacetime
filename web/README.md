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
npm i dayjs
```

Esses comandos instalarão as seguintes bibliotecas:

- `prettier-plugin-tailwindcss`: um plugin do Prettier para integração com o Tailwind CSS.
- `@rocketseat/eslint-config`: uma configuração do ESLint fornecida pela Rocketseat para padronizar as regras de linting.
- `lucide-react`: uma biblioteca de ícones SVG para React.
- `axios`: uma biblioteca para fazer requisições HTTP.
- `@tailwindcss/forms`: um plugin do Tailwind CSS para estilizar formulários.
- `js-cookie`: uma biblioteca para lidar com cookies em JavaScript.
- `@types/js-cookie`: tipos TypeScript para a biblioteca js-cookie.
- `dayjs`: uma biblioteca capaz de manipular datas


## Arquivos de configuração

* Arquivo `tailwind.config.js`:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },

      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        purple: {
          50: '#f3eefc',
          100: '#d8cbf7',
          200: '#c6b2f3',
          300: '#ab8eee',
          400: '#9b79ea',
          500: '#8257e5',
          600: '#764fd0',
          700: '#5c3ea3',
          800: '#48307e',
          900: '#372560',
        },
        green: {
          50: '#e6fbef',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },
        orange: {
          50: '#ffefeb',
          100: '#ffccc2',
          200: '#ffb4a4',
          300: '#ff927b',
          400: '#ff7d61',
          500: '#ff5c3a',
          600: '#e85435',
          700: '#b54129',
          800: '#8c3320',
          900: '#6b2718',
        },
        yellow: {
          50: '#fff9ec',
          100: '#ffebc4',
          200: '#ffe2a7',
          300: '#ffd47f',
          400: '#ffcc66',
          500: '#ffbf40',
          600: '#e8ae3a',
          700: '#b5882d',
          800: '#8c6923',
          900: '#6b501b',
        },
      },

      backgroundImage: {
        stripes:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)',
      },
      backgroundSize: {
        stripes: '100% 8px',
      },
      blur: {
        full: '194px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

```

* Arquivo `.eslintrc.json`:
```
{
  "extends": ["next/core-web-vitals", "@rocketseat/eslint-config/react"]
}
```

* Arquivo `next.config.js`:
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'localhost'],
  },
}

module.exports = nextConfig

```

* Arquivo `prettier.config.js`:
```
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}
``` 


## Conclusão

Após seguir os passos acima, e configurando a aplicação Next.js conforme a documentação oficial das bibliotecas intaladas para o desenvolvimento do projeto. Basta executar a aplicação usando o comando: `npm run dev `


