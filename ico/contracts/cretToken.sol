pragma solidity ^0.4.23;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

// Main token smart contract
contract CRETToken is MintableToken {
    string public constant name = "Crypto Currency Exchange Token";
    string public constant symbol = "CRET";
    uint8 public constant decimals = 18;
}