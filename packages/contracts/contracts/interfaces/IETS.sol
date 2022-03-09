// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/// @notice ETS core interface exposing ability for external contracts to integrate as tagging subcontracts
interface IETS {
    //todo- one pattern I have seen is to have events in interfaces and potentially even structs. need to check if this is official or not

    /// @notice Tag a target with an tag string.
    /// TODO: Finish documenting.
    function tagTarget(
        string calldata _tagString,
        string calldata _targetURI,
        address payable _publisher,
        address _tagger,
        bool _ensure
    ) external payable;

    //todo - go through what else should be part of the interface that other smart contracts may want to interface with. For example;
    //-permittedNftChainIds
}
