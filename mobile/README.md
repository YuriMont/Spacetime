* criar o projeto

> npx create-expo-app nome_do_projeto

* Instalar nativewind

> npm i nativewind
> npm i tailwindcss -D 
> npx tailwindcss init

* no arquivo tailwind.config.js
substituir a linha content existente por:  
> content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],

* No arquivo babel.consig.js adicionar no escopo de retorno:
> plugins: ["nativewind/babel"],

* Arquivo tsconfig.json:
{
  "compilerOptions": {
    "types": ["nativewind/types"]
  },
  "extends": "expo/tsconfig.base"
} 

* Instalar eslint da rocketseat
> npm i eslint @rocketseat/eslint-config -D   
 criar o arquivo .eslintrc.json e adicionar:
 {
  "extends": ["next/core-web-vitals", "@rocketseat/eslint-config/react"]
}   

* Instalar fomartador
> npm i prettier-plugin-tailwindcss -D  

criar arquivo prettier.config.js e adicionar
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}

* Instalar fonts

> npx expo install @expo-google-fonts/<font> expo-font

* Leitor de svg

> npx expo install react-native-svg

* sections
> npx expo install expo-auth-session expo-crypto

* axios
> npm i axios  

*Store
> npx expo install expo-secure-store

*Routes
> npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler

>npm install react-native-keyboard-aware-scroll-view

>npx expo install expo-image-picker

>npm i dayjs

* executar projeto

> npm run start

