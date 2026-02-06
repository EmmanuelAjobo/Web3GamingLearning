// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {BadGame} from "src/BadGame.sol";

contract BadGameScript is Script {
    function run() external returns (BadGame) {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);

        console.log("Deploying from: ", deployer);
        console.log("Deployer balance: ", deployer.balance);

        vm.startBroadcast(deployerPrivateKey);

        BadGame game = new BadGame();

        console.log("==========================================");
        console.log("Deployment Summary");
        console.log("==========================================");
        console.log("Contract Address:", address(game));
        console.log("Network: Sepolia");
        console.log("Block:", block.number);
        console.log("Gas Price:", tx.gasprice);
        console.log("==========================================");
        console.log("");
        console.log("Next steps:");
        console.log("1. Verify on Etherscan (auto-verify enabled)");
        console.log("2. Update frontend/index.html with contract address");
        console.log("3. Test claimSword() function");
        console.log("==========================================");

        vm.stopBroadcast();

        return game;
    }
}
