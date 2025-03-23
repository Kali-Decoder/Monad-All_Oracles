// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";

contract Buzzify_Oracle_Pyth {
    IPyth public pyth;
    mapping(string => bytes32) public priceFeeds;

    constructor(address _pyth, bytes32 _ethUsdPriceId, bytes32 _btcUsdPriceId, bytes32 _bnbUsdPriceId) {
        pyth = IPyth(_pyth);
        priceFeeds["ETH/USD"] = _ethUsdPriceId;
        priceFeeds["BTC/USD"] = _btcUsdPriceId;
        priceFeeds["BNB/USD"] = _bnbUsdPriceId;
    }

    function read(string memory priceFeedName) public view returns (uint) {
        bytes32 priceFeedId = priceFeeds[priceFeedName];
        require(priceFeedId != bytes32(0), "Price feed not found");
        PythStructs.Price memory price = pyth.getPriceNoOlderThan(priceFeedId, 60);
        uint price18Decimals = (uint(uint64(price.price)) * (10 ** 18)) / 
            (10 ** uint8(uint32(-1 * price.expo)));
        return price18Decimals;
    }

    function updatePriceFeed(string memory name, bytes32 priceFeedId) public {
        priceFeeds[name] = priceFeedId;
    }

    function getPriceFeedId(string memory name) public view returns (bytes32) {
        return priceFeeds[name];
    }
}