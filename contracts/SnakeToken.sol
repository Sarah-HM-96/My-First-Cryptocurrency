pragma solidity ^0.5.16;

contract SnakeToken {
    string public name = "Snake Token";
    string public symbol = "SNK";
    string public symbol = "SNK";

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    //this will store the totalSupply state variable;
    //everytime you declare a state variable public, Solidity gives you a Getter function FOR FREE!

    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    //The one below is a nested mapping
    mapping(address => mapping(address => uint256)) public allowance;

    //A mapping in Solidity is like an associative array or hashmap, it needs a key AND a value(the address, the value is uint256)
    //The argument will be the key looked up in this mapping, the return value will be uint256
    //Mappings in Solidity have default values, in the case of uint256 it's "zero"

    function SnakeToken (uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
        //totalSupply is a state variable, meaning it's accessible to the ENTIRE contract-any time you update this variable it'll update to the blockchain
    }
    //Declare a Reader function that will allow us to read the variable for free
    //Transfer function must return a boolen value (true or false) depending on whether or note the transfer was succesful
    //value-number of tokens you actually wish to transfer

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        //"-=" is the decrement operator
        balanceOf[_to] += _value;
        //"+=" is the increment operator
    }

    //Approve event
    function approval(address _spender, uint256 _value) public returns (bool success) {
        //Allowance
        //Approve event
        Approval(msg.sender, _spender, _value);

        return true;
    }
}