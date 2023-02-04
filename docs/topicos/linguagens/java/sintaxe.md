# Sintaxe e Semântica

Tudo na vida possui forma e conteúdo, mas um bom conteúdo com forma ruim é problema, e uma forma bacana com conteúdo ruim, pior ainda.

Projetar software é lidar com isso toda hora. Modelos, especificações, código: precisam de uma boa forma (sintaxe) e um bom conteúdo (semântica). Entender como ter qualidade na sintaxe e na semântica é fundamental!

Na Engenharia de Software quando falamos de sintaxe geralmente nos referimos à forma de escrever código fonte (palavras reservadas, comandos, recursos diversos).

Quanto à semântica, de um modo geral é o estudo do significado das coisas (do conteúdo das “formas”). Na Engenharia de Software, quando falamos de semântica nos referimos ao significado dos modelos, ao nível de entendimento (clareza, objetividade, detalhamento, coesão etc.) de alguma coisa.

Por exemplo: uma redação bem escrita (sem erros de concordância, gramática etc.), mas com um texto ruim (sem contexto, sem início/meio/fim, com uma estória confusa) possui boa “sintaxe”, mas uma “semântica” ruim.

## Escopo

Em Ciência da Computação escopo é um contexto delimitante aos quais valores e expressões estão associados. Linguagens de programação têm diversos tipos de escopos. O tipo de escopo vai determinar quais tipos de entidades este pode conter e como estas são afetadas, em outras palavras, a sua semântica. Normalmente, o escopo é utilizado para definir o grau de ocultação da informação, isto é, a visibilidade e acessibilidade às variáveis em diferentes partes do programa. Escopos podem:

* Conter declarações ou definições de identificadores;
* Conter instruções e/ou expressões, que definem um algoritmo executável ou parte dele;
* Aninhar ou ser aninhados.

::: info :information_source: Informação
Em resumo, escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código.
:::

A grande maioria das linguagens oferecem uma estrutura bem definida de codificação, seguindo o pseudocódigo conforme abaixo:

```java
class { 

  //escopo global ou de classe
  globalNumber = 10

  methodOne(){
    //escopo de método
    myNumber = 1

    print(globalNumber)  //10
  }

  methodTwo(){
     //escopo de método
    myNumber = 1
    
    //escopo de bloco ou de fluxo
    if(true){

        yourNumber = 2

        myNumber = yourNumber
    }

    print(myNumber) //2
    print(yourNumber) //error - acesso somente dentro do fluxo
  
  }

}
```

**Referências**

* [Sintaxe e Semântica - Até o momento](https://www.ateomomento.com.br/sintaxe-e-semantica-forma-e-conteudo-na-producao-de-software/)
* [Escopo](https://pt.wikipedia.org/wiki/Escopo_(computa%C3%A7%C3%A3o))