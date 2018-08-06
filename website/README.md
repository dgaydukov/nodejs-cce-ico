# ICO (Initial coin offering) for our CCE (Crypto currency exchange)

## Content
* [Description](#description)
* [Installation](#installation)
* [Built With](#built-with)
* [Authors](#authors)

### Description

This project is a core or our CCE product. Almost all today's crypto projects start from ICO. The idea is simple. To check if their
product is really unique and in demand, people take an ICO, collect money, and based on this build there product.
For more information about this you can read on our [whitepaper](https://github.com/dgaydukov/nodejs-cce-ico/blob/master/whitepaper.md)

### Installation

```shell
# 1. install node.js & npm
sudo apt-get install nodejs
sudo apt-get install npm

# 2. install geth
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum

# 3. install testrpc
npm install -g ethereumjs-testrpc

# 4. install truffle
npm install -g truffle

# 5. init truffle
mkdir truffle && cd truffle
truffle init

# 6. install OpenZeppelin Solidity
npm init
npm install -E openzeppelin-solidity
```

### Built With
* [Solidity](http://solidity.readthedocs.io/en/v0.4.24/) - Ethereum language to write smart contracts
* [Node.js](https://nodejs.org/en/) - Node.js for running projects
* [Geth](https://geth.ethereum.org/) - Ethereum blockchain program for block syncing
* [Truffle](https://truffleframework.com/) - A tool for compile & deploy smart contracts
* [TestRPC](https://github.com/trufflesuite/ganache-cli) - Utility to run local blockchain to test smart contracts
* [OpenZeppelin Solidity](https://github.com/OpenZeppelin/openzeppelin-solidity/) - A library of many smart contracts. You can use their
smart contracts to write above them your own. Just like in programming you can write from scratch or can use ready-to-use libraries and
frameworks


## Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)
