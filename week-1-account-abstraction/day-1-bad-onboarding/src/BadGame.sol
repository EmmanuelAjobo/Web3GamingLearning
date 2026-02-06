// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
contract BadGame {

    mapping (address => bool) public hasSword;
    mapping (address => uint256) public swordStrength;

    uint256 private claimNumber;

    event SwordClaimed(address indexed player, uint256 power);
    event SwordUpgraded(address indexed player, uint256 newPower);


    function claimSword() public {

        require(!hasSword[msg.sender], "Already has sword, theif");

        hasSword[msg.sender] = true;
        claimNumber++;
        swordStrength[msg.sender] = 1;

        emit SwordClaimed(msg.sender, swordStrength[msg.sender]);
        
    }

    function upgradeSword() public {
        require (hasSword[msg.sender], "Can't upgrade what you dont have");
        swordStrength[msg.sender]++;

       emit SwordUpgraded(msg.sender, swordStrength[msg.sender]);
    }

    function checkPlayerStats() public view returns (bool, uint256){
        return(hasSword[msg.sender], swordStrength[msg.sender]);
    }

}
