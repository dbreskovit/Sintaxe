## Algorítimos

O algoritmo é a própria sequência de instruções que irão permitir você atingir seu objetivo. Ela basicamente é o mapa, roteiro, guia, que vai permitir a máquina compreender o que deve ser feito.

É possível pegar qualquer coisa que a gente faz cotidianamente e transformar em um algoritmo. Basta entender os processos realizados e conseguimos criá-lo. Vamos tomar como exemplo fazer um pão com manteiga para seu café da manhã.

![](../assets/img/algoritimos-1.png)

## Pseudocódigo

É uma forma “genérica” de escrever um algoritmo. Ou seja: utiliza uma linguagem simples, sem que exista a necessidade de conhecimento da sintaxe de linguagens de programação.

Consiste então, basicamente, em escrever a partir de regras predefinidas, os passos a serem seguidos – está aí então o algoritmo.

Em computação, tudo que acontece na execução é a manipulação de dados, com a finalidade de resultar em informações e para isto manipulamos constantemente, valores denominados de variáveis.

Existem algumas plataformas de pseudocódigo como a [VisuAlg](https://visualg3.com.br/) e [Portugol](https://portugol-webstudio.cubos.io/ide) aqui iremos usar a plataforma Portugol para realizar alguns exemplos.

**As variáveis podem ser do tipo:**

* **inteiro**: números inteiros (0 - 1 - 2 - 3…);
* **reais**: números com casas decimais (0 - 1.2 - 2.5 - 3.75 - 4.0) - veja que se usa " **.** " para decimal;
* **caracter**: armazena os dados como eles são, digitados em um texto. Abarca números reais, letras e outros símbolos;
* **lógico**: pode assumir apenas os valores: Verdadeiro ou Falso.&#x20;

**Para escrever com pseudocódigo requer que você conheça algumas funções.**

* **escreva (” “)** = _comando usado para imprimir uma mensagem na tela_;
* **leia ()** = _comando usado para ler valores digitados no teclado_;

## Fluxo de saque em conta

```
programa {
funcao inicio() {
        real saldoAtual = 10
        real valorSolicitado = 0
        
        escreva("informe o valor desejado \n")
        
        leia(valorSolicitado)
        
        se(valorSolicitado > saldoAtual){
            
            escreva("saldo insuficiente!")
        
        }senao{
        
            saldoAtual = saldoAtual - valorSolicitado
            escreva("saque realizado com sucesso!")        
        }
          escreva("Seu novo saldo é ", saldoAtual)
}
}

```

#### Exercício

Considerando o exemplo apresentado acima, acrescente no algoritmo a seguinte regra:

1. Criar uma variável que represente o dado, **saldo cheque especial** com valor atual de **20**;
2. Na tentativa do saque, verificar se o valor solicitado for maior que o **saldo atual** exibir a seguinte mensagem: "Saldo insuficiente! Deseja usar o cheque especial?"
3. Se a resposta for **"S"** fazer a regra que valide o valor solicitado, comparando com **valor atual** + **valor saldo especial.**

#### Referências

* https://www.embarcados.com.br/pseudocodigo
* https://kenzie.com.br/blog/pseudocodigo
* https://www.ramon.pro.br/comandos-portugol-vs-java"
* http://orion.ipt.pt/~manso/Portugol/help/tipo_dados_basicos.html
