# ICO (Initial coin offering) for our CCE (Crypto currency exchange)

## Content
* [Description](#description)
* [Installation](#installation)
* [Run](#run)
* [Built With](#built-with)
* [Authors](#authors)

### Description

This project is a set of 2 ico contracts written on solidity:
* [Token](https://github.com/dgaydukov/nodejs-cce-ico/blob/master/ico/contracts/cretToken.sol) - the contract that manage token logic
* [CrowdSale](https://github.com/dgaydukov/nodejs-cce-ico/blob/master/ico/contracts/cretCrowdSale.sol) - the contract to manage ico itself
For more information about this you can read on our [whitepaper](https://github.com/dgaydukov/nodejs-cce-ico/blob/master/ico/whitepaper.md)

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

### Run
```shell
# run local blockchain with testprc on port different from the mainnet port
testrpc --port=8546

# attach to geth
geth attach http://:8546

# compile & deploy smart contract
truffle migrate --reset

# go to truffle console to check token balance
truffle console

# send money to contract to check how it works
tokenAddr="0xf0e8dfa40863f871d1f992fe2d9e22c02bf3b1a6" # token smart contract address
crowdsaleAddr="0xe590a8b441603c47fe79e4435a220ffd3d8d2e94" # crowdsale smart contract address
myAddr="0xa2ca1db1afb97aa2caac29b68b72f020242baf6a" # some address from which we will test token transfer
# get token smart-contract instance
token=cretToken.at(t)
token.balanceOf(account) # 0
# send money
web3.eth.sendTransaction({from: myAddr, to: crowdsaleAddr, value: web3.toWei(0.01, 'ether'), gas: 1000000})
token.balanceOf(account) # 10
```


### Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)
