# Iniciando 
Para instalação e utilização do TypeScript, você precisará do [Node.js](https://nodejs.org/en/download/) instalado e seu gerenciador de pacotes padrão: NPM.

Pelo menos para sistemas operacionais Windows, o NPM já vem com Node.js quando o instalamos.

## Base do TypeScript
Para escrevermos códigos utilizando o TypeScript devemos saber JavaScript, pois toda a base dele é referente a essa linguagem, dessa maneira, aconselho você antes estudar e aprender [JavaScript](/topicos/linguagens/javascript/sobre.html), para depois, partir para o aprendizado desse superset.

## NodeJs
O  NodeJs é um container web de execução de código Javascript. Ele é usado para desenvolvermos projetos com Javascript e disponibilizarmos os mesmos na web.

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
    console.log('Oi, Mundo');
  }
  //linha responsável por executar a função acima
  escrever();
```

::: info :information_source: Informação
Pode parecer que a sintaxe `typescript` é semelhante ao `javascript`, isso é porqie ainda não exploramos os novos recursos e convenções.
:::

3. Os navegadores ainda não entendem arquivos no formato `.ts` sendo assim é necessário executar o comando que **compila/transpila** nosso código para `.js`.
  ```sh
  tsc script.ts 
  ```

::: info :information_source: Informação
 Como este comando deverá ser criado o arquivo `script.js` compatível com os navegadores
:::

4. Importe o arquivo `script.js` em um arquivo `.html` ou se preferir poderemos a partir de agora utilizar o NodeJs para executar arquivo `js` fora dos navegadores.
 ```sh
node script.js 
```

## Node + TypeScript
A partir de agora vamos explorar os recursos do TypeScript utilizando convenções e recursos mínimos do mercado:

Vamos iniciat a construção de um projeto com Node + TypeScript denominado `estudo-ts`.

1. Crie uma pasta demoninada de `estudo-ts`

2. Dentro da pasta iremos iniciar as configurações de nosso projeto

::: details Criando um projeto Node

- com npm:

  ```sh
  npm init -y
  ```
- com yarn:
  ```sh
  yarn init -y
  ```
:::

::: info :information_source: Informação
 Observe que após a execução do comando abaixo, será criado o arquivo chamado `package.json` com o conteúdo parecio com código abaixo
:::

```json
{
  "name": "estudo-ts",
  "version": "1.0.0",
  "description": "",
  "main": "script.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
3. Agora precisamos indentificar em nosso projeto que o código será escrito em typescript.

```sh
tsc --init
```

::: warning :bell: Atenção
Duas mudanças aconteceram em seu diretório, primeiro o surgimento da pasta `node_modules` e a alteração do arquivo `package.json` com inclusão do elemento `dependencies`
:::
```json
"dependencies": {
    "tsc-init": "^2.1.0"
}
```


