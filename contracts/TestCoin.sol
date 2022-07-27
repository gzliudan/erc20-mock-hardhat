// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// ==================== External Imports ====================

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title TestCoin
 * @author Danile Liu
 */
contract TestCoin is ERC20 {
    // ==================== Constructor function ====================

    constructor() ERC20("Test Coin", "TC") {}

    // ==================== External functions ====================

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    function burn(address to, uint256 amount) external {
        _burn(to, amount);
    }
}
