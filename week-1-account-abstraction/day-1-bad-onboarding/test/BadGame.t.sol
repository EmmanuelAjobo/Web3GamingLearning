// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {BadGame} from "src/BadGame.sol";

contract BadGameTest is Test {

    BadGame private game;

    address private user1 = makeAddr("user1");
    address private user2 = makeAddr("user2");

    /*////////// SETUP //////////*/

    function setUp() public {
        game = new BadGame();
    }

    /*////////// CLAIM SWORD TESTS //////////*/

    function test_UserCanClaimSword() public {
        vm.startPrank(user1);
        
        game.claimSword();

        (bool hasSword, uint256 strength) = game.checkPlayerStats();

        assertTrue(hasSword);
        assertEq(strength, 1);

        vm.stopPrank();
    }

    function test_RevertIfUserClaimsSwordTwice() public {
        vm.startPrank(user1);

        game.claimSword();

        vm.expectRevert("Already has sword, theif");
        game.claimSword();

        vm.stopPrank();
    }

    /*////////// UPGRADE SWORD TESTS //////////*/

    function test_UserCanUpgradeSword() public {
        vm.startPrank(user1);

        game.claimSword();
        game.upgradeSword();

        (, uint256 strength) = game.checkPlayerStats();

        assertEq(strength, 2);

        vm.stopPrank();
    }

    function test_RevertIfUserWithoutSwordUpgrades() public {
        vm.prank(user2);

        vm.expectRevert("Can't upgrade what you dont have");
        game.upgradeSword();
    }

    /*////////// MULTI USER STATE //////////*/

    function test_UsersHaveIndependentSwordStrength() public {
        vm.prank(user1);
        game.claimSword();

        vm.startPrank(user2);
        game.claimSword();
        game.upgradeSword();
        vm.stopPrank();

        vm.prank(user1);
        (, uint256 strengthUser1) = game.checkPlayerStats();

        vm.prank(user2);
        (, uint256 strengthUser2) = game.checkPlayerStats();

        assertEq(strengthUser1, 1);
        assertEq(strengthUser2, 2);
    }
}
