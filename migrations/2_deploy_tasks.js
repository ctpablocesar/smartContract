const EnterprisesContract = artifacts.require("EnterprisesContract.sol");

module.exports = function (deployer) {
  deployer.deploy(EnterprisesContract);
};