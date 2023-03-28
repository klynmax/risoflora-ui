*******
##### Índice
1. [Documentação da api](#documentation)
2. [Avatar](#avatar)
3. [AvatarName](#avatarName)
4. [Button](#button)
5. [Container](#container)
6. [Divider](#divider)
7. [Grid](#grid)
8. [Cores do tema](#cores)
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

<div id='button'/>

# Button

Os botões são componentes bastante utilizados no desenvolvimento web. Eles permitem que os usuários executem ações e façam escolhas com apenas um toque.

#### Importar

```
import Button from "risoflora-ui";
```
ou
````
import { Button } from "risoflora-ui";
````

#### Adereços (props)

| Nome  |Tipo  |Padrão |Descrição|
|:-----:|:----:|:-----:|:--------|
|`children`|`node`||Conteúdo do componente.|
|`style`|`Array`||É usado para digitar o objeto de estilo que consiste em nomes e valores de propriedades CSS.|
|`onClick`|`() => void`||Captura as ações executadas.|
|`variant`|`contained`<br/>`outlined`<br/>`text`|`contained`|A variante que determina o estilo do botão.|
|`size`|`small`<br/>`medium`<br/>`large`|`medium`|Tamanho do botão.|
|`disabled`|`boolean`|`false`|Se `true`, desabilita o botão.|
|`disabled`|`boolean`|`false`|Se `true`, desabilita o botão.|
|`color`|`blue`<br/>`red`<br/>`orange`<br/>`yellow`<br/>`green`<br/>`cyan`<br/>`violet`|`blue`|Determina as cores padrões utilizadas nos botões.|
|`startIcon`|`node`||Ícone adicionado antes do nome do botão|
|`endIcon`|`node`||Ícone adicionado depois do nome do botão|

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

<div id='cores'/>

## Cores do tema

Paleta de cores utilizadas no desenvolvimento da biblioteca.

#### Tabela das Cores Primárias

|Nome da Cor|Código hexadecimal|Código|Estado|
|:-------:|:----:|:----:|:----:|
|<font color="#2196f3">Blue</font>|`#2196f3`|`blue-500`|`info`|
|<font color="#f44336">Red</font>|`#f44336`|`red-500`|`error`|
|<font color="#4caf50">Green</font>|`#4caf50`|`green-500`|`success`|
|<font color="#ffb300">Yellow</font>|`#ffb300`|`yellow-500`|`warning`|
|<span style="color:#a6a6a6">Gray</span>|`#a6a6a6`|`violet-500`|`Bloqued`|
|<span style="color:#db8000">Orange</span>|`#db8000`|`orange-500`|-|
|<span style="color:#00BCD4">Cyan</span>|`#00BCD4`|`cyan-500`|-|
|<span style="color:#673AB7">Violet</span>|`#673AB7`|`violet-500`|-|


#### Tabela das Cores Gerais

|Código|Código hexadecimal|
|:-------:|:----:|
|Blue-50|`#f0f9ff`|
|Blue-100|`#c5e7fc`|
|Blue-200|`#9bd4fa`|
|Blue-300|`#72c0f7`|
|Blue-400|`#49abf5`|
|Blue-500|`#2196f3`|
|Blue-600|`#1787e8`|
|Blue-700|`#0d73d4`|
|Blue-800|`#045cb5`|
|Blue-900|`#00448c`|
|Red-50|`#fff2f2`|
|Red-100|`#fccfcf`|
|Red-200|`#faa9a7`|
|Red-300|`#fa8682`|
|Red-400|`#f7635c`|
|Red-500|`#f44336`|
|Red-600|`#eb3626`|
|Red-700|`#d62915`|
|Red-800|`#b81c07`|
|Red-900|`#8f1300`|
|Green-50|`#eeffed`|
|Green-100|`#c8f0c7`|
|Green-200|`#a5e0a4`|
|Green-300|`#82cf82`|
|Green-400|`#65bf67`|
|Green-500|`#4caf50`|
|Green-600|`#37ab3c`|
|Green-700|`#22a12a`|
|Green-800|`#0f9119`|
|Green-900|`#007d0c`|
|Yellow-50|`#fffaf2`|
|Yellow-100|`#ffe9c2`|
|Yellow-200|`#ffd991`|
|Yellow-300|`#ffca61`|
|Yellow-400|`#ffbe30`|
|Yellow-500|`#ffb300`|
|Yellow-600|`#f5af00`|
|Yellow-700|`#e0a500`|
|Yellow-800|`#c29100`|
|Yellow-900|`#997500`|
|Orange-50|`#fff8f2`|
|Orange-100|`#ffdfc2`|
|Orange-200|`#fcc690`|
|Orange-300|`#fcb160`|
|Orange-400|`#fa9b2f`|
|Orange-500|`#fa8900`|
|Orange-600|`#f08800`|
|Orange-700|`#db8000`|
|Orange-800|`#bd7100`|
|Orange-900|`#945b00`|
|Cyan-50|`#f2ffff`|
|Cyan-100|`#bcf4f7`|
|Cyan-200|`#87e6ed`|
|Cyan-300|`#57dae6`|
|Cyan-400|`#2acadb`|
|Cyan-500|`#00bcd4`|
|Cyan-600|`#00b1cc`|
|Cyan-700|`#00a0bd`|
|Cyan-800|`#008aa6`|
|Cyan-900|`#006e87`|
|Violet-50|`#f6f2ff`|
|Violet-100|`#d5c9f0`|
|Violet-200|`#b6a1e3`|
|Violet-300|`#987bd4`|
|Violet-400|`#805ac7`|
|Violet-500|`#673ab7`|
|Violet-600|`#5f2bb3`|
|Violet-700|`#531ba8`|
|Violet-800|`#470c99`|
|Violet-900|`#390085`|
|Gray-50|`#f7f7fa`|
|Gray-100|`#f2f2f5`|
|Gray-200|`#e5e5ea`|
|Gray-300|`#d9d9d9`|
|Gray-400|`#c5c6c7`|
|Gray-500|`#a6a6a6`|
|Gray-600|`#8e8e93`|
|Gray-700|`#7a7a7a`|
|Gray-800|`#575757`|
|Gray-900|`#272c36`|
