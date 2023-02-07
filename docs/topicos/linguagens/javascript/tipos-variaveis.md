# Introdução
Com toda certeza, uma hora ou outra, seja na sua vida acadêmica ou profissional na área de desenvolvimento você já ouviu falar em tipos de variáveis.

Isso se deve ao fato de que o computador tem a necessidade de que o programador “explique” para ele o que exatamente quer, da forma mais especificada o possível, e no JavaScript não é diferente.

## Por que utilizar variáveis?
Variáveis são ferramentas indispensáveis na programação, são nelas que colocamos valores para podermos trabalhar com eles posteriormente, similar à álgebra da matemática. As variáveis são um dos fatores para mantermos o código dinâmico, fácil de ser lido, compreendido e escalável.

## Definindo variáveis com JS
Diferentemente de outras linguagens, como Java, no JavaScript não há necessidade de declarar o tipo da variável, mas isso não significa que ela não tem tipo, na verdade o JS faz a tipagem dinamicamente, similar ao PHP.

Por exemplo, na declaração da variável fruta, como pode-se ver abaixo:

```javascript
const fruta = "laranja";
```

::: info :information_source: Informação
Vale lembrar que podemos fazer a declaração de uma variável no JavaScript com três operadores, são eles `var`, `let` e `const`. Tendo em mente que de acordo com o ECMA2015, utilizar o operador var se tornou uma má pratica.
:::

## JavaScript é Case Sensitive
Case Sensitive significa algo como “sensível à caixa das letras” ou “sensível a maiúsculas e minúsculas”.

Exemplo:

```javascript
// Variáveis diferentes
const Fruta = "banana"; 
const fruta = "maçã";
```

O JavaScript identifica que é outra variável, bastando um caractere da declaração ser diferente, no caso F é diferente de f, com isso, o JS interpreta como uma variável diferente.

## Tipos de variáveis em JavaScript
Os tipos de variáveis em JS são classificados em:

`Strings` - Uma String nada mais é que texto puro.

`Numbers` - São os números, seja eles integer, float, double etc.

`Booleans` - São os operadores booleanos (`true` ou `false`).

`Arrays` - É uma estrutura de dado para armazenar uma coleção de valores, sendo eles de qualquer tipo.

`Objects` - Conjunto de atributos aninhados a uma variável denomina-se um objeto.

`Functions` - Em JavaScript é possível declarar uma variável como uma função, podendo fazer operações e retornando o valor para a variável de declaração. Obs: muito utilizado no paradigma de programação funcional.

## Tipagem dinâmica
Como eu havia falado anteriormente, o JavaScript, diferentemente do Java, possui sua tipagem dinâmica, ou seja, o próprio JS consegue saber que tipo é o valor atribuído à variável e fazer o casting automático.

Exemplo:

```javascript
const totalBananas = 3
// retorna: 3 do tipo number;

const totalBananas = "3"
// retorna: "3" do tipo string;
```

## Conclusão
Javascript é uma poderosa linguagem, hoje em dia, ela está presente desde o front-end até o back-end. A comunidade é bem grande e sempre terá um conteúdo novo para estudar.

**Referências**
* [Tipos e Variáveis](https://medium.com/trainingcenter/entendendo-os-tipos-e-variaveis-em-javascript-f9753b4c7b61)