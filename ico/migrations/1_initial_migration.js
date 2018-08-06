const token = artifacts.require("../contracts/cretToken.sol");
const crowdsale = artifacts.require("../contracts/cretCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
    const openingTime = 1533081600000; // 1 of august 2018
    const closingTime = 1535673600000; // 31 of august 2018
    const rate = new web3.BigNumber(0.1); //
    const wallet = '0x1f7025b5e31fa3ca4939dcc97d575ea15b7f3347';
    const cap = 5;
    const goal = 2;

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
            // Crowdsale должен владеть токеном
            var tokenContract = web3.eth.contract(token.abi).at(token.address);
            web3.eth.defaultAccount = web3.eth.accounts[0];
            tokenContract.transferOwnership(crowdsale.address);
        });
};