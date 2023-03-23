# Componentes da da api

Documento de referência da API. Neste guia é possível aprender sobre as props, css e outras APIs suportado por cada componente.

## Grid
Layout responsivo adaptável ao tamanho e orientações da tela, permitindo uma ampla variedade de designs.

#### Importar

```
import Grid from "risoflora-ui";
```
ou
````
import { Grid } from "risoflora-ui"
````

#### Adereços (props)

| Nome  |Tipo  |Defalt |Descrição|
|:-----:|:----:|:-----:|:--------|
|`children`|`node`||Conteúdo do componente|
|`style`|`Array`||É usado para digitar o objeto de estilo que consiste em nomes e valores de propriedades CSS.|
|`justify`|`flex-start`<br/>`flex-end`<br/>`center`<br/>`space-between`<br/>`space-around`<br/>`space-evenly`|'flex-start'|Define a `justifyContent` ao componente.|
|`flexDirection`|`row`<br/>`row-reverse`<br/>`column`<br/>`column-reversen`|'row'|Define a `flexDirection` ao componente|
|`alignItems`|`start`<br/>`center`<br/>`end`<br/>`stretch`||Define a `alignItems` ao componente|
|`xs`|`number`|12|Define o número de colunas que o item utiliza. Esse valor não pode ser maior que 12 que é o total de colunas do container.|
|`sm`|`number`|12|Define o número de colunas que o item utiliza. Esse valor não pode ser maior que 12 que é o total de colunas do container.|
|`md`|`number`|12|Define o número de colunas que o item utiliza. Esse valor não pode ser maior que 12 que é o total de colunas do container.|
|`lg`|`number`|12|Define o número de colunas que o item utiliza. Esse valor não pode ser maior que 12 que é o total de colunas do container.|
|`xl`|`number`|12|Define o número de colunas que o item utiliza. Esse valor não pode ser maior que 12 que é o total de colunas do container.|



