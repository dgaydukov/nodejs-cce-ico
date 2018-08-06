# ICO (Initial coin offering) for our CCE (Crypto currency exchange)

## Content
* [Description](#description)
* [Installation](#installation)
* [Built With](#built-with)
* [Module loading](#module-loading)
* [Authors](#authors)

### Description

This project is a website of our ICO. 

### Installation

```shell
git clone https://github.com/dgaydukov/nodejs-cce-ico
cd website
npm i
npm start
```

### Built With
* [Express](https://www.npmjs.com/package/express)
* [MongoDb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu) - how to install & run mongo
* [Mongoose](https://www.npmjs.com/package/mongoose) - node.js module for mongoDb


### Module loading

For modules loading inside the project we use [module-alias](https://www.npmjs.com/package/module-alias). For this we write in package.json
```json
  "_moduleAliases": {
    "@root": "dist",
    "@db": "dist/db",
    "@logic": "dist/logic"
  }
```
But this only for compiled javascript to work. In order to use this functionality in typescript and compile successfully, we use standartd
typescript functions. For this purpose we write in typescript config ts.config.json the following
```json
{
    "baseUrl": ".",
    "paths": {
      "@root/*": ["src/*"],
      "@db/*": ["src/db/*"],
      "@logic/*": ["src/logic/*"]
      }
}
```

### Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)
