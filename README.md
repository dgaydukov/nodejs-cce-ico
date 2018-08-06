# ICO (Initial coin offering) for our CCE (Crypto currency exchange)

## Content
* [Description](#description)
* [Project List](#project-list)
* [Authors](#authors)

### Description

This project is a core or our CCE product. Almost all today's crypto projects start from ICO. The idea is simple. To check if their
product is really unique and in demand, people take an ICO, collect money, and based on this build there product.
This project consists of 2 subprojects. The ICO project itself, where smart-contract logic is stored. And a website where user can buy
out tokens. Why do we need a website. Well, the best way to make ico is, that user send ether from his account and get tokens in response.
But in real world it can happen that user has bitcoins and has no ideas about ethereum, or he has fiat money and want to buy tokens.
Of course you can write user instruction how to get ethereum account and make token purchase, but it's not user friendly.
The best way in this case (user want to buy tokens with bitcoin) is to give him a web app, where he can sing up/in. Generate his new ethereum
account (if he doesnt have one). ** Notice - account generation - should be purely frontend stuff, so that nobody accuse you of account stealing.
And the work as a standard change service. You give user a bitcoin address and ask an ethereum address (or use his auto generated one).
When you got money to your generatd bitcoin address, you send request to ico contract to send money to the user ethereum address



### Project List

* [ICO](https://github.com/dgaydukov/nodejs-cce-ico/tree/master/ico) - ico contracts written in ethereum
* [Website](https://github.com/dgaydukov/nodejs-cce-ico/tree/master/website) - website written in node.js

### Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)
