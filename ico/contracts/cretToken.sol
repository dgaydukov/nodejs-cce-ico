pragma solidity ^0.4.24;

// Imports
import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

// Main token smart contract
contract cretToken is MintableToken {
    string public constant name = "CryptoExchangeToken";
    string public constant symbol = "CRET";
    uint8 public constant decimals = 18;
}