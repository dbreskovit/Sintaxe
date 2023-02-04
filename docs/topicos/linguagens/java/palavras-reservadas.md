# Palavras reservadas

Palavras reservadas do java, ou keywords(palavras-chave), são palavras que possuem significado especifico no código.

A linguagem contém 52 palavras distribuídas em categorias com finalidades e fronteiras de uso bem definidas conforme tabela abaixo:

### Modificadores de acesso

| Palavra   | Descrição                                       | Classe | Variável |   Método   |
| --------- | ----------------------------------------------- | :----: | :------: | :--------: |
| public    | Acesso de qualquer classe                       |   -    |    X     | no retorno |
| private   | Acesso apenas dentro da classe                  |   -    |    X     | no retorno |
| protected | Acesso por classes no mesmo pacote e subclasses |   -    |    X     | no retorno |

### Tipos primitivos

| Palavra | Descrição                                    | Classe | Variável |   Método   |
| ------- | -------------------------------------------- | :----: | :------: | :--------: |
| boolean | um valor indicando verdadeiro ou falso       |   -    |    X     | no retorno |
| byte    | um inteiro de 8 bits (signed)                |   -    |    X     | no retorno |
| char    | um caráter Unicode (16-bit unsigned)         |   -    |    X     | no retorno |
| double  | um caráter Unicode (16-bit unsigned)         |   -    |    X     | no retorno |
| float   | um número de ponto flutuante de 32 bits      |   -    |    X     | no retorno |
| int     | um inteiro de 32 bits (signed)               |   -    |    X     | no retorno |
| long    | um inteiro de 64 bits (signed)               |   -    |    X     | no retorno |
| short   | um inteiro de 32 bits (signed)               |   -    |    X     | no retorno |
| void    | indica que o método não tem retorno de valor |   -    |    X     | no retorno |

### Modificadores de classes, variáveis ou métodos

| Palavra      | Descrição                                                                                                                                          | Classe | Variável |   Método   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | :----: | :------: | :--------: |
| abstract     | classe que não pode ser instanciada ou método que precisa ser implementado, por uma subclasse não abstrata                                         |   -    |    X     | no retorno |
| class        | especifica uma classe                                                                                                                              |   -    |    X     | no retorno |
| extends      | indica a superclasse que a subclasse está estendendo                                                                                               |   -    |    X     | no retorno |
| final        | impossibilita que uma classe seja estendida, que um método seja sobrescrito ou que uma variável seja reinicializada                                |   -    |    X     | no retorno |
| implements   | indica as interfaces que uma classe irá implementar                                                                                                |   -    |    X     | no retorno |
| interface    | especifica uma interface                                                                                                                           |   -    |    X     | no retorno |
| native       | indica que um método está escrito em uma linguagem dependente de plataforma, como o C                                                              |   -    |    X     | no retorno |
| new          | instancia um novo objeto, chamando seu construtor                                                                                                  |   -    |    X     | no retorno |
| static       | faz um método ou variável pertencer à classe ao invés de às instâncias                                                                             |   -    |    X     | no retorno |
| strictfp     | usado em frente a um método ou classe para indicar que os números de ponto flutuante seguirão as regras de ponto flutuante, em todas as expressões |   -    |    X     | no retorno |
| synchronized | indica que um método só pode ser acessado por uma thread de cada vez transient: impede a serialização de campos                                    |   -    |    X     | no retorno |
| volatile     | indica que uma variável pode ser alterada durante o uso de threads                                                                                 |   -    |    X     | no retorno |

### Controle de fluxo dentro de um bloco de código

| Palavra    | Descrição                                                                                                                                      | Classe | Variável |   Método   |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | :----: | :------: | :--------: |
| break      | sai do bloco de código em que ele está                                                                                                         |   -    |    X     | no retorno |
| case       | executa um bloco de código dependendo do teste do switch                                                                                       |   -    |    X     | no retorno |
| continue   | pula a execução do código que viria, após essa linha e vai para a próxima passagem do loop                                                     |   -    |    X     | no retorno |
| default    | executa esse bloco de código caso nenhum dos teste de switch-case seja verdadeiro                                                              |   -    |    X     | no retorno |
| do         | executa um bloco de código uma vez, e então realiza um teste em conjunto com o while para determinar se o bloco deverá ser executado novamente |   -    |    X     | no retorno |
| else       | executa um bloco de código alternativo caso o teste "if" seja falso                                                                            |   -    |    X     | no retorno |
| for        | usado para realizar um loop condicional de um bloco de código                                                                                  |   -    |    X     | no retorno |
| if         | usado para realizar um teste lógico de verdadeiro ou falso                                                                                     |   -    |    X     | no retorno |
| instanceof | determina se um objeto é uma instância de determinada classe, superclasse ou interface                                                         |   -    |    X     | no retorno |
| return     | retorna um método sem executar qualquer código, que venha depois desta linha (também pode retornar uma variável)                               |   -    |    X     | no retorno |
| switch     | indica a variável a ser comparada nas expressões case                                                                                          |   -    |    X     | no retorno |
| while      | executa um bloco de código repetidamente enquanto a condição for verdadeira                                                                    |   -    |    X     | no retorno |

### Tratamento de erros
  
| Palavra | Descrição                                                                                                                   | Classe | Variável |   Método   |
| ------- | --------------------------------------------------------------------------------------------------------------------------- | :----: | :------: | :--------: |
| assert  | testa uma expressão condicional, para verificar uma suposição do programador                                                |   -    |    X     | no retorno |
| catch   | declara o bloco de código usado para tratar uma exceção                                                                     |   -    |    X     | no retorno |
| finally | bloco de código, após um try-catch, que é executado independentemente do fluxo de programa seguido ao lidar com uma exceção |   -    |    X     | no retorno |
| throw   | usado para passar uma exceção para o método que o chamou                                                                    |   -    |    X     | no retorno |
| throws  | indica que um método pode passar uma exceção para o método que o chamou                                                     |   -    |    X     | no retorno |
| try     | bloco de código que tentará ser executado, mas que pode causar uma exceção                                                  |   -    |    X     | no retorno |


### Controle de pacotes

| Palavra | Descrição                                                          | Classe | Variável |   Método   |
| ------- | ------------------------------------------------------------------ | :----: | :------: | :--------: |
| import  | importa pacotes ou classes para dentro do código                   |   -    |    X     | no retorno |
| package | especifica a que pacote, todas as classes de um arquivo pertencem. |   -    |    X     | no retorno |

### Variáveis de referência

| Palavra | Descrição                             | Classe | Variável |   Método   |
| ------- | ------------------------------------- | :----: | :------: | :--------: |
| super   | refere-se a superclasse imediata      |   -    |    X     | no retorno |
| this    | refere-se a instância atual do objeto |   -    |    X     | no retorno |

### Palavras reservadas não utilizadas

| Palavra | Descrição                                                           | Classe | Variável |   Método   |
| ------- | ------------------------------------------------------------------- | :----: | :------: | :--------: |
| const   | não utilize para declarar constantes                                |   -    |    X     | no retorno |
| goto    | não implementada na linguagem Java, por ser considerada prejudicial |   -    |    X     | no retorno |


Referências

* [Palavras Reservadas - Linha do Código](http://www.linhadecodigo.com.br/artigo/83/as-52-palavras-reservadas-do-java.aspx)
* [Palavras Reservadas - Como Programar](https://comoprogramarjava.com.br/frameworks/java-base/palavras-reservadas-do-java/)
