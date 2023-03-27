*******
##### Índice
 1. [Documentação da api](#documentation)
 2. [Avatar](#avatar)
 3. [AvatarName](#avatarName)
 4. [Container](#container)
 5. [Divider](#divider)
 6. [Grid](#grid)
*******

<div id='documentation'/>

# Documentação da api
Documento de referência da API. Neste guia é possível aprender sobre as props, css e outras APIs suportado por cada componente.

<div id='avatar'/>

# Avatar

Usado para exibir imagem ou marca.

#### Importar

```
import Avatar from "risoflora-ui";
```
ou
````
import { Avatar } from "risoflora-ui";
````

#### Adereços (props)

| Nome  |Tipo  |Padrão |Descrição|
|:-----:|:----:|:-----:|:--------|
|`style`|`Array`||É usado para digitar o objeto de estilo que consiste em nomes e valores de propriedades CSS.|
|`variant`|`circular`<br/>`square`<br/>`rounded`|`circular`|Define o formato da imagem.|
|`size`|`string`<br/>`xs`<br/>`sm`<br/>`md`<br/>`lg`|`md`|Define o tamanho do avatar.|
|`src`|`string`||Recebe a url da imagem.|
|`alt`|`string`||Usado junto ao src para fornecer um atributo alt para a img.|
|`notify`|`boolean`|`false`|Define um badge de notificação na imagem.|
|`value`|`number`||Insere o total de notificação ao badge.|
|`group`|`limited`<br/>`all`||Define o total de imagem no grupo.|
|`spacing`|`boolean`|`false`|Define se haverá espaço entre as imagens no modo group.|

<div id='avatarName'/>

## AvatarName

Avatar contendo caracteres simples que retornam as iniciais do nome e sobrenome do usuário.

#### Importar

```
import AvatarName from "risoflora-ui";
```
ou
````
import { AvatarName } from "risoflora-ui";
````

#### Adereços (props)

| Nome  |Tipo  |Padrão |Descrição|
|:-----:|:----:|:-----:|:--------|
|`style`|`Array`||É usado para digitar o objeto de estilo que consiste em nomes e valores de propriedades CSS.|
|`userName`|`string`||Define o nome e sobrenome do usuário usados para redenrização|

<div id='container'/>

## Container

Centraliza seu conteúdo horizontalmente.

#### Importar

```
import Container from "risoflora-ui";
```
ou
````
import { Container } from "risoflora-ui";
````

#### Adereços (props)

| Nome  |Tipo  |Padrão |Descrição|
|:-----:|:----:|:-----:|:--------|
|`children`|`node`||Conteúdo do componente|
|`style`|`Array`||É usado para digitar o objeto de estilo que consiste em nomes e valores de propriedades CSS.|
|`maxWidth`|`xs`<br/>`sm`<br/>`md`<br/>`lg`<br/>`xl`<br/>`string`||Determina a largura máxima do container. Responsiva como padrão, porém se o usuário desejar poderá utilizar os breakpoints para diferentes lagura do container.

<div id='divider'/>

## Divider

Um divisor é uma linha fina que separam os conteúdos em grupos bem definidos.

#### Importar

```
import Divider from "risoflora-ui";
```
ou
````
import { Divider } from "risoflora-ui";
````

#### Adereços (props)

| Nome  |Tipo  |Padrão |Descrição|
|:-----:|:----:|:-----:|:--------|
|`style`|`Array`||É usado para digitar o objeto de estilo que consiste em nomes e valores de propriedades CSS.|
|`name`|`string`|{}|É utilizado para dar um título ao componente|
|`horizontal`|`boolean`|'false'|Altera a orientação do compenente para horizontal|

<div id='grid'/>

## Grid

Layout responsivo adaptável ao tamanho e orientações da tela, permitindo uma ampla variedade de designs.

#### Importar

```
import Grid from "risoflora-ui";
```
ou
````
import { Grid } from "risoflora-ui";
````

#### Adereços (props)

| Nome  |Tipo  |Padrão |Descrição|
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
