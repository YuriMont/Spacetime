# Documentação Mobile

## Descrição
O projeto mobile foi criado usando o Expo, Tailwind CSS e outras dependências relevantes. O projeto visa fornecer uma estrutura inicial para o desenvolvimento de um aplicativo mobile utilizando o React Native.

## Requisitos
Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:
- NNode.js (versão 18.16.0 ou posterior)
- npm (gerenciador de pacotes do Node.js)
- Expo CLI (instalado globalmente)

## Configuração

### 1. Criação do projeto Expo
Abra o terminal e execute o seguinte comando para criar o projeto Expo:
```
npx create-expo-app mobile
```

### 2. Instalação do Tailwind CSS
Para utilizar o Tailwind CSS no projeto, execute os seguintes comandos:
```
npm i nativewind
npm i tailwindcss -D
npx tailwindcss init
```

### 3. Configuração do Tailwind CSS
No arquivo `tailwind.config.js`, substitua a linha `content` existente por:
```javascript
content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
```

### 4. Configuração do Babel
No arquivo `babel.config.js`, adicione o seguinte plugin no escopo de retorno:
```javascript
plugins: ["nativewind/babel"],
```

### 5. Configuração do TypeScript
Crie o arquivo `tsconfig.json` e adicione o seguinte conteúdo:
```json
{
  "compilerOptions": {
    "types": ["nativewind/types"]
  },
  "extends": "expo/tsconfig.base"
}
```

### 6. Instalação do ESLint
Para utilizar o ESLint, execute os seguintes comandos:
```
npm i eslint @rocketseat/eslint-config -D
```
Crie o arquivo `.eslintrc.json` e adicione o seguinte conteúdo:
```json
{
  "extends": ["next/core-web-vitals", "@rocketseat/eslint-config/react"]
}
```

### 7. Instalação do Prettier
Para utilizar o Prettier, execute os seguintes comandos:
```
npm i prettier-plugin-tailwindcss -D
```
Crie o arquivo `prettier.config.js` e adicione o seguinte conteúdo:
```javascript
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}
```

### 8. Instalação de Fontes
Para instalar fontes do Google Fonts, execute o seguinte comando para cada fonte desejada:
```
npx expo install @expo-google-fonts/<font> expo-font
```

### 9. Instalação do Leitor de SVG
Para utilizar o leitor de SVG no React Native, execute o seguinte comando:
```
npx expo install react-native-svg
```

### 10. Instalação das Dependências de Seções
Para instalar as dependências relacionadas às seções do aplicativo, execute o seguinte comando:
```
npx expo install expo-auth-session expo-crypto
```

### 11. Instalação do Axios
Para utilizar o Axios para fazer requisições HTTP, execute o seguinte comando:
```
npm i axios
```

### 

12. Instalação do Expo Secure Store
Para utilizar o Expo Secure Store para armazenar dados de forma segura, execute o seguinte comando:
```
npx expo install expo-secure-store
```

### 13. Instalação das Dependências de Rotas
Para instalar as dependências relacionadas às rotas do aplicativo, execute o seguinte comando:
```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
```
Além disso, instale também a dependência `react-native-keyboard-aware-scroll-view`:
```
npm install react-native-keyboard-aware-scroll-view
```

### 14. Instalação do Expo Image Picker
Para utilizar o Expo Image Picker para seleção de imagens, execute o seguinte comando:
```
npx expo install expo-image-picker
```

### 15. Instalação do Day.js
Para utilizar o Day.js para manipulação de datas, execute o seguinte comando:
```
npm i dayjs
```

## Execução do Projeto
Execute o seguinte comando para iniciar o projeto:
```
npm run start
```

## Considerações Finais
Esta documentação forneceu as instruções básicas para configurar e executar o projeto utilizando Expo, Tailwind CSS e outras dependências relacionadas. Lembre-se de consultar a documentação oficial de cada pacote ou ferramenta utilizada para obter informações adicionais sobre como utilizá-los de forma eficaz.