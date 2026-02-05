// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
contract Game {

    uint256 private healthbar = 10;

    function fight() public returns (uint256){

        healthbar++;
        return healthbar;
    }

}
