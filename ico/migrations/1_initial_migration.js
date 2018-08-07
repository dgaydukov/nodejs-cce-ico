const token = artifacts.require("../contracts/cretToken");
const crowdsale = artifacts.require("../contracts/cretCrowdsale");

module.exports = (deployer, network, accounts)=>{
    const openingTime = 1533081600000; // 1 of august 2018
    const closingTime = 1535673600000; // 31 of august 2018
    const rate = new web3.BigNumber(10); // 10 tokens for 1 ether
    const wallet = '0x1f7025b5e31fa3ca4939dcc97d575ea15b7f3347';
    const cap = 200;
    const goal = 100;

    return deployer
        .then(() => {
            return deployer.deploy(token);
        })
        .then(() => {
            return deployer.deploy(
                crowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                cap,
                token.address,
                goal
            );
        })
        .then(() => {
            const tokenContract = web3.eth.contract(token.abi).at(token.address);
            web3.eth.defaultAccount = web3.eth.accounts[0];
            tokenContract.transferOwnership(crowdsale.address);
        });
};