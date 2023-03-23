## Risoflora-ui

Risoflora-ui é uma biblioteca de componentes React de código aberto que inclui uma coleção de componentes pré-construídos prontos para semrem introduzidos nos projetos em produção.

## Instalação

Ao baixar o repositório é necessário executar `npm install` ou `yarn` para instalar as dependências do projeto.
Paraque possamos visualizar e testar cada componente é necessário iniciar o storybook com o comando `npm run storybook`.

## Visualiazação em ambiente local
Para que o usuário possa testar a biblioteca antes de publica-la em ambiente de produção, basta executar o comando `npm run build` para gerar a pasta dist(caso já exista a pasta, é necessário excluí-la antes de executar o comando), `npm link` ou `yarn link` que criará um link simbólico entre o pacote e o projeto. Execute o código gerado (ex: npm link "risoflora-ui" ou yarn link "risoflora-ui") em seu projeto e basta fazer as importações e testar os componentes.

## Publicação no NPM
Para publicação do pacote basta executar:
`npm adduser` ou `yarn adduser` e faça o login com sua conta npm.
Após fazer login com sua conta basta rodar o comando `npm run deploy` e finalizar o processo de publicação.