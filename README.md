
  

# Grimorio do Dand'a
This project is a Grimore Online for the list of spells of the RPG Dand'a.
You can view a online version here: https://antomarsi.github.io/grimorio-danda/
## Getting Started
If you know how to make a ReactJS, so you know how to start, if not, follow the instructions below:
To change the DATA of the spells, just edit the file located at `public/data/magics.json`.
### Prerequisites
The project is a ReactJS, so you need to install npm ([Node.js](https://nodejs.org)). Optionally, you can use [Yarn](https://yarnpkg.com).
```
node +8
npm +6
yarn +1.15
```
### Installing
After cloning or downloading the project, go to the project folder and install all dependencies.
```
$ npm install
OR
$ yarn
```
## Running in Development (locally)
Run the command below to use the `react-script start`, or you can change to use another server, your choose.
```
$ npm start
OR
$ yarn start
```
### Testing
No implementation. );
## Building
To build the project, just run the command `build`, after the build, a folder called `build` in the root of your project. PS: The build command always runs when deploying, read below.
```
$ npm run build
OR
$ yarn build
```
## Deployment
To publish to your [GithubPages](https://pages.github.com/), check if is enabled in your project and it will use the branch `gh-pages`.
Run the command below to send the `build` folder to your [GithubPages](https://pages.github.com/), the project will build before your deploy:
```
$ npm run deploy
OR
$ yarn deploy
```
## Authors
*  **Antônio Marco da Silva** - *Basically Everything* - [antomarsi](https://github.com/antomarsi)
*  **Diogo "Stone" da Silva** - *Geração das informações para o JSON* - [DiogoStone](https://github.com/DiogoStone)
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.