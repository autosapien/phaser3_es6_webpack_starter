Phaser 3 WebPack 4 Starter for ES6

## Goals

- Modern web development is done with ES6
- Many browsers do not support ES6, we use babel to transpile to ES5
- It is important to be able to debug code in ES6 while it runs as ES5 in the browser. Done using sourcemaps
- Use modular development (scenses etc.)
- Autoreload during develppment (file watching)


## Requirements
Node.js and npm are used to install and run the scripts

## Setup

Clone the project to your local system and run
```
cd phaser3_es6_webpack_starter
npm init -y
```

#### Install Dev Dependencies

Required during development

```
npm install phaser babel-core babel-loader babel-preset-env --save-dev
npm install webpack webpack-dev-server webpack-cli --save-dev 
npm install html-webpack-plugin copy-webpack-plugin clean-webpack-plugin uglifyjs-webpack-plugin --save-dev
npm install yargs --save-dev
```

## Build for Development
```
npm run dev
```

## Build for Production
```
npm run build
```

## Run

Use any http server to serve the files. We are using the package ``http-server``

```
npm install -g http-server

cd dist
http-server -p 80
```