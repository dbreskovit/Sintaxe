## Introdução 
Escopo é a propriedade que determina onde uma variável pode ser utilizada como um identificador em um programa. Uma variável declarada em uma função é normalmente local; o contexto define o escopo.

Quando você declara um elemento de programa, como uma classe, função ou variável, seu nome só pode ser "visto" e usado em determinadas partes do programa. O contexto no qual um nome é visível é chamado de escopo. 

Em resumo, escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código.

## Escopo em JavaScript
A grande maioria das linguagens possui o conceito de escopos, e JavaScript não é diferente. 

Com todas as evoluções trazidas nos últimos anos, o JavaScript praticamente se tornou uma linguagem tão completa quanto as linguagens mais antigas e mais tradicionais.

Porém, até para quem já é experiente, alguns conceitos da linguagem ainda não estão totalmente claros. Um desses conceitos é a ideia de escopo.

::: info INFO
O escopo é extremamente importante em JavaScript porque ele pode ser interpretado de diversas formas.
:::

Em outras palavras, o que determina quais são os dados que podem ser acessados em uma determinada parte do código é o escopo.

## Escopo Global e Local
O escopo Global é o espaço que está fora de qualquer `classe`, `função` ou `namespace`. Todas as variáveis declaradas neste espaço podem ser acessadas a qualquer momento e em qualquer lugar do seu código.

Agora o escopo local é mais restrito, as variáveis que são declaradas dentro desse escopo são acessadas somente dentro escopo local.

```javascript
//escopo global
let nome = 'joão';

function exibirNome() {
//escopo local
  let nome = 'maria';
  return nome;
}
```

::: warning CUIDADO
Não confunda reatribuição de valores com as palavras reservadas!
:::

## Mais tipos de Escopo
### Escopo de Função
```javascript
function obterMensagem() {
  var mensagem = 'olá'
  //escopo de função
  console.log(mensagem);//'olá'
}
console.log(mensagem);//not defined
```
### Escopo de Bloco
```javascript
function obterNome () {
//escopo de função
  var nome = 'lucas'
  
  if (nome) {
    // escopo de bloco
    var idade = 18;
  }
  console.log(nome) // 'lucas'
  console.log(idade) // 18
}
```

## Praticando com JavaScript



**Referências**

* [Escopo em JavaScript - Imasters](https://imasters.com.br/desenvolvimento/escopos-em-javascript)

* [Escopo Global e Local - Blog Cod3r](https://blog.cod3r.com.br/escopo-global-e-local-entendendo-suas-diferencas/#:~:text=Onde%20o%20escopo%20global%20%C3%A9,uma%20caixa%20dentro%20da%20outra.)