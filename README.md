# Grimorio do Dand'a

Esse projeto é um Grimório online para as magias do Dand'a RPG.

Você pode acessar a versão final aqui: https://antomarsi.github.io/grimorio-danda/

## Getting Started

Se você já sabe como funciona um aplicativo React, então você já sabe como funciona, mas caso contrário, siga as instruções abaixo.
Para poder alterar as informações das magias, devesse alterar o arquivo `src/data/magias.json`.

### Prerequisites

Como é um projeto em node e react, você só precisa do [Node.js](https://nodejs.org) e o npm (que é incluso ao nodejs).

```
node +8
npm +6
```

### Installing

Após clonar o projeto, entre na pasta do projeto e rode o seguinte comando para instalar todos os pacotes necessários para o projeto

```
$ npm install
```

## Running in Development (locally)

Para rodar o projeto, somente rode o comando abaixo:
```
$ npm start
```
Depois de compilar, abrirá uma página em seu navegador para o caminho `http://localhost:3000`, qualquer alteração ao seu projeto irá atualizar a página.

### Testing

Nenhum teste foi implementado.

## Building

Para buildar o projeto, basta somente rodar o comando `build` do npm, assim ele irá criar uma pasta `build` na raiz do projeto. O build é rodado automaticamente se for feito um `deploy` do projeto.

```
$ npm run build
```

## Deployment

Para publicar para seu [GithubPages](https://pages.github.com/), certifique que o está habilitado em seu projeto, e que ele utilizará a branch `gh-pages`.
Utilize o comando abaixo para enviar para o seu [GithubPages](https://pages.github.com/), o `build` do projeto ocorrerá antes da publicação:

```
$ npm run deploy
```

## Authors

* **Antônio Marco da Silva** - *Basicamente tudo* - [antomarsi](https://github.com/antomarsi)
* **Diogo "Stone" da Silva** - *Geração das informações para o JSON* - [DiogoStone](https://github.com/DiogoStone)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details