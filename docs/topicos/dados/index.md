# Digytal Code - Programação, Pesquisa e Educação
[www.digytal.com.br](http://www.digytal.com.br)

[(11) 95894-0362](https://api.whatsapp.com/send?phone=5511958940362)


#### Autores
- [Gleyson Sampaio](https://github.com/glysns)

## Conta Rural

Uma grande instituição financeira resolveu promover uma competição para atrair estudantes e profissionais em tecnologia para assim selecionar os 05 que apresentarem uma solução mais aderente aos problemas que serão apresentados ao longo das fasese e requisitos do projeto.

Trata-se de um produto que este banco pretende lançar no mercado que será conhecido como Conta Rural, uma conta para pessoas físicas e ou micro-empreendedores que não possuem tanto acesso à tecnologia e internet.

Os requisitos do projeto serão estruturados baseados em processos simples, que inicialmente não necessitarão de meios tecnológicos avançados, justamente para cada participante apresentar um solução à baixo custo mais viável possível.

#### Itens de avaliação
* Conhecimento e domínio aos fundamentos e recursos da linguagem escolhida
* Noções do paradígma da orientação a objetos e os pilares da P O O
* Compreensão quanto a leitura e escrita de documentos nos formatos: .json, .csv, .xls
* Interpretação de layouts de documentos como delimitado e posicional
* Engajamento com persistência de dados relacional de forma nativa ou utilizando algum framework ORM
* Configuração e controle de envio de e-mails
* Noções de arquitetura HTTP com base na linguagem e framework escolhido
* Conceito sobre níveis de maturidade dos recursos HTTP
* Prover os recursos da sua aplicação através de uma arquitetura REST
* Implementação de clientes HTTP
* Desenvolvimento de interfaces gráficas como desktop, web e mobile
* Integração entre aplicações

## Fase 01

Vamos iniciar o nosso MVP (Produto Mínimo Viável) considerando o seguinte aspecto:

Espera-se que através de visitas nos estabelecimentos rurais, o time de coleta de dados deverá através de preenchimento dos formulários impressos obter as seguintes informações:

1. Dados Pessoais: Nome, Data Nascimento, CPF\CNPJ,  Sexo, Nome da Mae, Estado Civil, Renda Atual, Telefone, Celular, Email
1. Dados de Endereço: Logradouro, Numero, Bairro, Complemento, Cidade, Estado

> Nesta primeira etapa, devemos considerar a necessidade de explorar os conceitos da orientação a objetos, noções de UML e tipos de dados

#### Fluxos do processo de coleta

1. Todos os consultores deverão entregar as suas fichas para o técnico realizar o processo de armazenamento dos dados;
1. Os dados INICIALMENTE serão armezados em um arquivo denominado de: **conta-rural-fichas-cadastrais.csv**;
1. Um arquivo csv contém suas colunas seperadas por ponto e vírgula ( ; );
1. A ordem das colunas para o arquivo csv será : Nome, Data Nascimento, Sexo, Nome do Pai, Nome da Mae, Estado Civil, Renda Atual, Telefone, Celular, Email, Logradouro, Numero, Bairro, Complemento, Cidade, Estado
1. Após a coleta de todas as fichas e o atualização do arquivo conta-rural-fichas-cadastrais.csv através do sistema, é necessário ler este arquivo para gerar um novo arquivo conforme especificações do BACEN. Ver requisitos do BACEN conforme abaixo:

#### Requisitos do BACEN

O BACEN solicitou para a nossa instituição financeira o envio dos cadastros coletados atráves de uma comunicação inicialmente por e-mail contendo em seu anexo o arquivo de nome **conta-rural-fichas-cadastrais-bacen.txt** conforme layout posicional abaixo:

| Ordem | Campo        | Tamanho | Valor Real                                              | Valor Formatado                | Observação                                                              |
|-------|--------------|---------|---------------------------------------------------------|--------------------------------|-------------------------------------------------------------------------|
| 01    | Nome         | 30      | Raimundo Nonato Loureiro Castelo Branco                 | RAIMUNDO NONATO LOUREIRO CASTE | Se o nome for superior a 30 caracteres, cortar o final do nome          |
| 02    | Data         | 08      | 16/04/1986                                              | 19860416                       |                                                                         |
| 03    | CPF\CNPJ     | 14      | 135.217.791-18                                          | 00013521779118                 |                                                                         |
| 04    | Sexo         | 1       | Masculino (M) / Feminino (F)                            | M / F                          |                                                                         |
| 05    | Nome da Mae  | 30      | Cristina Castelo Branco                                 | CRISTINA CASTELO BRANCO        | Se o nome for inferior a 30 caracteres, preencher com espaços em branco |
| 06    | Estado Civil | 1       | Solteiro(a) (S) / Casado(a) (C), Divorciado(a) (D), Viuvo(a) (V) | S / C / D / V                  |  |


| 04    | Valor          | 10       | 1.275,48                                | 0000127548                    |
| 05    | Tipo Movimento | 1        | RECEITA / DESPESA                       | C ou D                        |
| 06    | Estornado      | 1        | true / false                            | 1 ou 0                        |

