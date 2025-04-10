// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.17;

// import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import {IPriceFeedLegacy} from "./IPriceFeedLegacy.sol";

/**
 * @title Complete price feed interface
 * @author The Redstone Oracles team
 * @dev All required public functions that must be implemented
 * by each Redstone PriceFeed contract
 */
interface IPriceFeed is IPriceFeedLegacy {

  function getDataFeedId() external view returns (bytes32);
}