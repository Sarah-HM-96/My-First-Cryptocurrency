const SnakeToken = artifacts.require("./SnakeToken.sol");

//Creating an artifact allows us to create a contract abstraction that Truffle can use to run in a Javascript Runtime Environment

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
