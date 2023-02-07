# Conceito de Controle de fluxo

Controlar o fluxo é como ser o diretor do seu próprio filme de tecnologia! Você pode decidir como seu programa vai desenrolar, suas tarefas, através de comandos especiais. É como dar as cartas no jogo, escolhendo quando executar as tarefas de forma seletiva, repetitiva ou até mesmo em casos excepcionais. 

![Fluxo](../../../../../assets/img/linguagens/java/fluxo-1.png)

## Comandos de fluxo

**Eles são divididos em três categorias:**

- **Estruturas condicionais:** *if-else, switch-case.*
- **Estruturas de repetição:** *for, while, do-while.*
- **Estruturas de exceções:** *try-catch-finally, throw.*

## Estruturas condicionais

A Estrutura Condicional, possibilita a escolha de um grupo de ações e comportamentos a serem executadas, quando determinadas condições são ou não satisfeitas. A Estrutura Condicional pode ser Simples ou Composta.

### Condicionais Simples

Quando ocorre uma validação de execução de fluxo, somente quando a condição for positiva, consideramos como uma estrutura Simples, exemplo:

<div align="center">

![Fluxo](../../../../../assets/img/linguagens/java/fluxo-2.png)

</div>

```java
// CaixaEletronico.java
public class CaixaEletronico {
    public static void main(String[] args) {

       double saldo = 25.0;
       double valorSolicitado = 17.0;

       if(valorSolicitado < saldo)
        saldo = saldo - valorSolicitado;

        System.out.println(saldo);

    }
}
```

### Condicionais Composta

Algumas vezes, o nosso programa deverá seguir mais de uma jornada de execução, concionado a uma regra de negócio, este cenário é denominado Estrutura Condicional Composta. Vejamos o exemplo abaixo:

<div align="center">

![Fluxo](../../../../../assets/img/linguagens/java/fluxo-3.png)

</div>

```java
// ResultadoEscolar.java
public class ResultadoEscolar {
    public static void main(String[] args) {

       int nota = 6;
       
       if(nota >= 7)
        System.out.println("Aprovado");

       else
        System.out.println("Reprovado");
    }
}
```
::: tip :bulb: Vale ressaltar aqui, que no Java, em uma condição `if/else` às vezes necessitamos adicionar um bloco de { },se a lógica conter mais de uma linha.
:::

### Condicionais encadeadas

Em um controle de fluxo condicional, nem sempre nos limitamos ao se (if) e senão (else), poderemos ter uma terceira, quarta e ou inúmeras condições.

<div align="center">

![Fluxo](../../../../../assets/img/linguagens/java/fluxo-4.png)

</div>

```java
// ResultadoEscolar.java
public class ResultadoEscolar {
    public static void main(String[] args) {
        int nota = 6;

	if (nota >= 7)
		System.out.println("Aprovado");
	else if (nota >= 5 && nota < 7)
		System.out.println("Recuperação");
	else
		System.out.println("Reprovado");
    }
}
```

### Condição ternária

Como vimos em operadores, podemos abreviar nosso algoritmo condicional, refatorando com o conceito de operador ternário. Vamos refatorar os exemplos acima, para ilustrar o poder deste recurso:

```java
// Cenário 1
public class ResultadoEscolar {
	public static void main(String[] args) {
		int nota = 7;
		String resultado = nota >=7 ? "Aprovado" : "Reprovado";
		System.out.println(resultado);
	}
}
```

```java
// Cenário 2
public class ResultadoEscolar {
	public static void main(String[] args) {
		int nota = 6;
		String resultado = nota >=7 ? "Aprovado" : nota >=5 && nota <7 ? "Recuperação" : "Reprovado";
		System.out.println(resultado);
	}
}
```

### Switch Case

A estrutura `switch`, compara o valor de cada caso, com o da variável sequencialmente e sempre que encontra um valor correspondente, executa o código associado ao caso. Para evitar que as comparações continuem a ser executadas, após um caso correspondente ter sido encontrado, acrescentamos o comando `break` no final de cada bloco de códigos. O comando `break`, quando executado, encerra a execução da estrutura onde ele se encontra.

Vamos imaginar que precisaremos imprimir uma medida, com base em mapa de valores, exemplo:

| Sigla | Medida  |
| ----- | ------- |
| P     | PEQUENO |
| M     | MÉDIO   |
| G     | GRANDE  |

```java	
// SistemaMedida.java

// Modo condicional if/else
public class SistemaMedida {
	public static void main(String[] args) {
		String sigla = "M";

		if(sigla == "P")
			System.out.println("PEQUENO");
		else if(sigla == "M")
			System.out.println("MÉDIO");
		else if(sigla == "G")
			System.out.println("GRANDE");
		else
			System.out.println("INDEFINIDO");
			
		
	}
}
```

```java
// SistemaMedida.java

// Modo condicional switch / case
public class SistemaMedida {
	public static void main(String[] args) {
		String sigla = "M";

		switch (sigla) {
		case "P":{
			System.out.println("PEQUENO");
			break;
		}
		case "M":{
			System.out.println("MÉDIO");
			break;
		}
		case "G":{
			System.out.println("GRANDE");
			break;
		}
		default:
			System.out.println("INDEFINIDO");
		}
			
		
	}
}
```

::: danger :rotating_light: Observe que a nível de sintaxe, não tivemos nenhum ganho quanto a redução de códigos e ainda tivemos mais uma preocupação: informar a palavra break em cada alternativa.
:::

Porém, um cenário que poderíamos adequar o uso do switch/case para melhorar nosso algoritmo seria conforme ilustração abaixo:

Imagina que fomos requisitados a criar um sistema de plano telefônico onde:

- O sistema terá 03 planos: BASIC, MÍDIA , TURBO;
- BASIC: 100 minutos de ligação;
- MÍDIA: 100 minutos de ligação + WhatsApp e Instagram grátis;
- TURBO: 100 minutos de ligação + WhatsApp e Instagram grátis + 5 GB YouTube.

```java	
// Modo condicional convencional
public class PlanoOperadora {
	public static void main(String[] args) {
		String plano = "M"; //M / T
		
		if(plano == "B") {
			System.out.println("100 minutos de ligação");
		}else if(plano == "M") {
			System.out.println("100 minutos de ligação");
			System.out.println("WhatsApp e Instagram grátis");	
		}else if(plano == "T") {
			System.out.println("100 minutos de ligação");
			System.out.println("WhatsApp e Instagram grátis");	
			System.out.println("5Gb Youtube");	
		}
			
		
	}
}
```

```java
// Modo condicional switch/case
public class PlanoOperadora {
	public static void main(String[] args) {
		String plano = "M"; // M / T

		switch (plano) {
			case "T": {
				System.out.println("5Gb Youtube");
			}
			case "M": {
				System.out.println("WhatsApp e Instagram grátis");
			}
			case "B": {
				System.out.println("100 minutos de ligação");
			}
		}
	}
}
```

::: warning :rotating_light: Se optarem por usar switch / case, estudem um pouco mais, sobre os conceitos de continue, break e default.
:::

## Estruturas de repetição

> Laços de repetição, também conhecidos como laços de iteração ou simplesmente loops, são comandos que permitem iteração de código, ou seja, que comandos presentes no bloco sejam repetidos diversas vezes.
> 
> https://diegomariano.com/lacos-de-repeticao-2/

Laços ou repetições são representados pelas seguintes estruturas:

- For (para);
- While (enquanto);
- Do While (faça enquanto).

### For

O comando for (na tradução literal para a língua portuguesa “para”) permite que uma variável contadora, seja testada e incrementada a cada iteração, sendo essas informações definidas na chamada do comando. O comando for recebe como entrada uma variável contadora, a condição para continuar a execução e o valor de incrementação.

A estrutura de sintaxe do controle de repetição for é exibida abaixo:

```java
//estrutura do controle de fluxo for

for (bloco de inicialização; expressão booleana de validação; bloco de atualização)
{
     // comando que será executado até que a 
     // expressão de validação torne-se falsa 
}
```

Vamos imaginar que Joãozinho precisa contar até 20 carneirinhos, para pegar no sono:

<img src="../../../../../assets/img/linguagens/java/fluxo-5.gif" width="100%">

```java
// ExemploFor.java
public class ExemploFor {
	public static void main(String[] args) {
		for(int carneirinhos = 1 ; carneirinhos <=20; carneirinhos ++) {
			System.out.println(carneirinhos + " - Carneirinho(s)");
		}
	}
}
```

**Vamos explicar a estrutura do código acima:**

1. `int carneirinhos = 1;` -> O programa entende que a variável carneirinhos, começa com o valor igual a 1 e isso acontece somente uma vez;
2. `Carneirinhos < = 20;` -> O programa verifica se a variável carneirinhos, ainda é menor que 20;
3. O programa começa a executar o algoritmo, no nosso caso, imprimir a quantidade de carneirinhos em contagem;
4. `Carneirinhos ++` -> O programa aumenta em mais 1, o valor da variável carneirinhos;
5. O fluxo é finalizado, quando a variável carneirinhos for igual a 20.


```java
// Outras estruturas

//estrutura 1
for(int carneirinhos = 1 ; carneirinhos <=20; carneirinhos ++) {
     System.out.println(carneirinhos + " - Carneirinho(s)");
}

//estrutura 2
//o que importa é somente o bloco condicional
int carneirinhos = 1;
for( ; carneirinhos <=20; ) {
     System.out.println(carneirinhos + " - Carneirinho(s)");
     carneirinhos ++;
}

//for(somente 1x; uma expresão boolean; acontecerá a cada final da execução){}
```
Também usamos o controle de fluxo for , para interagir sobre arrays e coleções:

```java
// ExemploFor.java
public class ExemploFor {
public static void main(String[] args) {
	String alunos[] = { "FELIPE", "JONAS", "JULIA", "MARCOS" };

	for (int x=0; x<alunos.length; x++) {
		System.out.println("O aluno no indice x=" + x + " é " + alunos[x]);
	}
}
}
```

> Observe que, como os arrays começam com índice igual a 0 (zero), iniciamos a nossa variável x também com valor zero e validamos a quantidade de repetições, a partir da quantidade de elementos do array.

::: info Fala a verdade: Depois desta explicação deu até sono hein!? 😴😴
:::

## Estruturas excepcionais

<br><br><br>

**Referências**

* [O que são estruturas condicionais?](https://rockcontent.com/br/talent-blog/estruturas-condicionais-2)            
* [Algoritmo – Estruturas Condicionais](http://fabrica.ms.senac.br/2013/06/algoritmo-estruturas-condicionais/)           
* [Estrutura de Decisão Condicional Switch em Java](http://www.bosontreinamentos.com.br/java/estrutura-de-decisao-condicional-switch-em-java/#:~:text=O%20condicional%20switch%20testa%20o,representados%20pela%20palavra%20reservada%20case.&text=A%20estrutura%20switch%20compara%20o,o%20c%C3%B3digo%20associado%20ao%20caso.)         
