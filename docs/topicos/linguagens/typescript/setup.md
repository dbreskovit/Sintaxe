# Iniciando 
Para instalação e utilização do TypeScript, você precisará do [Node.js](https://nodejs.org/en/download/) instalado e seu gerenciador de pacotes padrão: NPM.

Pelo menos para sistemas operacionais Windows, o NPM já vem com Node.js quando o instalamos.

## Base do TypeScript
Para escrevermos códigos utilizando o TypeScript devemos saber JavaScript, pois toda a base dele é referente a essa linguagem, dessa maneira, aconselho você antes estudar e aprender [JavaScript](/topicos/linguagens/javascript/sobre.html), para depois, partir para o aprendizado desse superset.

## Instalação

::: warning :bell: Atenção
A partir desta etapa, você precisará ter noções mínimas sobre NPM e ou Yarn.
:::

1. Em um terminal como o `CMD`, `PowerShell` ou de sua preferência realize os comandos abaixo utilizando o `npm` ou `yarn`.

::: details instalando o typescript

- com npm:

  ```sh
  npm install -g typescript
  ```
- com yarn:
  ```sh
  yarn add typescript 
  ```
:::

2. Em um diretório de sua preferência vamos criar o nosso primeiro código typescript denominado de `script.ts` com o respectivo conteúdo:
```js
  function escrever() {
    console.log('Meu primeiro código TypeScript');
  }
  //linha responsável por executar a função acima
  escrever();
```

::: info :information_source: Informação
Pode parecer que a sintaxe `typescript` é semelhante ao `javascript`, isso é porque ainda não exploramos os novos recursos e convenções.
:::

3. Os navegadores ainda não entendem arquivos no formato `.ts` sendo assim é necessário executar o comando que **compila/transpila** nosso código para `.js`.
  ```sh
  tsc script.ts
  ```

::: info :information_source: Informação
 Após este comando deverá ser criado o arquivo `script.js` compatível com os navegadores
:::

4. Importe o arquivo gerado `script.js` em um arquivo `.html` ou se preferir poderemos a partir de agora utilizar o NodeJs para executar arquivo `js` fora dos navegadores.

::: details executando códigos JavaScript

- Pelo Navegador:

  ```html{3}
  <html> 
    <head>
        <script src="script.js" ></script>
    </head> 
    <body>
        <h1>Meu primeiro código com Typescript</h1>
    </body> 
  </html>
  ```
- Via NodeJs:
  ```sh
  node script.js 
  ```
:::

5. VSCode Live Server

A ide VSCode dispõe do plugin [Live Server](/topicos/linguagens/javascript/setup.html#aumente-sua-produtividade) que emula um servidor para testarmos nosso código html com javascript.

## tsconfig

Um dos recursos que podemos encontrar utilizando o TypeScript é sua configuração de compilação necessário para o projeto através de um arquivo chamado `tsconfig.json`.
Este arquivo pode ser criado manualmente ou via linha de comando conforme abaixo:

```sh
tsc --init
```

A partir de agora você poderá modificar a origem de seus arquivos `.ts` e o destino para os arquivos `.js` que serão compilados, entre outras configurações.

::: info :information_source: Informação
Se preferir altere alguma parte em seu arquivo `script.ts`, salve, e em seguida execute novamente o comando `tsc` para regerar os arquivos `.js`.
:::

Após validar que tudo está executando conforme esperado, não é produtivo a cada alteração ter compilar nosso código e reiniciar o serviço do Live Server.

Para agilizar esta etapa repetitiva, execute o comando abaixo:

```sh
tsc -w
```
::: info :information_source: Informação
Com o comando `tsc -w` a cada modificação e gravação em seu arquivo `.ts` será iniciada a compilação automática atualizando o arquivo `.js`.
:::

**Referências**

* [TYPESCRIPT NA PRÁTICA - Matheus Battisti](https://www.youtube.com/watch?v=lCemyQeSCV8)