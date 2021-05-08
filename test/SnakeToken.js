var SnakeToken = artifacts require("./SnakeToken.sol");

contract('SnakeToken', function(accounts) {

    var tokenInstance;

    it('initializes the contract with the correct values', function() {
        return SnakeToken.deployed().then(function(instance) {
            tokenInstance = instance;
            return tokenInstance.name();
        }).then(function(name) {
            assert.equal(name, 'Snake Token', 'has the correct name');
            return tokenInstance.symbol();
        }).then(function(symbol) {
            assert.equal(symbol, 'SNK', 'has thecorect symbol');
            return tokenInstance(standard) {
                assert.
            }
        })
    })

    it('sets the total supply upon deployment', function() {
        return SnakeToken deployed() then(function(instance) {
            tokenInstance = instance;
            return tokenInstance totalSupply();
        }) then(function(totalSupply) {
            assert equal(totalSupply toNumber(), 1000000, 'sets the total supply to 1,000,000');
            return tokenInstance.balanceOf(accounts[0]);
        }).then(function(adminBalance){
            assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin');
            //Allocates funds to administrator to dispense
            //Allocate entire _initialSupply to admin
    
        });
    });

    it('transfers token owndership', function() {
        return SnakeToken.deployed().then(function(instance) {
            tokenInstance = instance;
            //Test the 'require' statement first by transfering something larger than the sender's balance
            return tokenInstance.tranfer.call(accounts[1], 9999999999999);
        }).then(assert.fail).catch(function(error) {
            assert(error.message.indexOf('revert')>= 0, 'error message must contain revert');
            return tokenInstance.transfer(accounts[1], 250000, { from: accounts[0] });
            return tokenInstance balanceOf(accounts[1]);
        }).then(function(balance) {
            assert.equal(balance.toNumber(), 25000, 'adds the amount to the receiving account');
            return tokenInstance.balaceOf(accounts[0]);
        }).then(function(balance) {
            assert.equal(balance.toNumber(), 750000, 'deducts amount from the sending account');
        });
    });

    it('approves tokens for delegated transfer', function() {
        return SnakeToken.deployed().then(function(instance) {
            tokenInstance = instance;
            return tokenInstance.approve.call(accounts[1], 100);
        }).then(function(success) {
            assert.equal(success, true, 'it returns true');
            return tokenInstance.approve(accounts[1], 100);
        }).then(function(receipt) {
            assert.equal(receipt.logs.length, 1, 'triggers one event');
            assert.equal(receipt.logs[0].event, 'Approval', 'should be the "Approval" event');
            assert.equal(receipt.logs[0].args._owner, accounts[0], 'logs the account the tokens are authorized by');
            assert.equal(receipt.logs[0].args._spender, accounts[1], 'logs the account the tokens are authorized to');
            assert.equal(receipt.logs[0].args._value, 100, 'logs the transfer amount');
        });
    });

    it('handles delegated token transfers', function() {
        return SnakeToken.deployed().then(function(instance) {
            tokenInstance = instance;
            fromAccount = accounts[2];
            toAccount = accounts[3];
            spendingAccount = accounts[4];
            //Transfer some tokens to fromAccount
            return tokenInstance.transfer(fromAccount, 10, { from: accounts[0] });
        }).then(function(receipt) {
            //Approve spendingAccount to spent 10 tokens from fromAccount
            return tokenInstance.transferFrom(fromAccount, toAccount, 9999 { from: spendingAccount });
            //Try transferring something larger than the sender's balance
        }).then(assert.fail).catch(function(error) {
            assert(error.message.indexof('revert') >= 0, 'cannot transfer value larger than balance');
            //Try transferring something larger than the approved amount
            return tokenInstance.transferFrom(fromAccount, toAccount, 20, { from: spendingAccount });
        }).then(assert.fail).catch(function(error) {
            assert(error.message.indexOf('revert') >= 0, 'cannot transfer value larger than approved amount');
            return tokenInstance.transferFrom.call(fromAccount, toAccount, 10, { from: spendingAccount });
        }).then(function(success) {
            assert.equal(success, true);
            return tokenInstance.transferFrom(fromAccount, toAccount, 10, { from: spendingAccount });
        });
    });
    
})