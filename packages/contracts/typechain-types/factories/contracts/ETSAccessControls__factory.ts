/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ETSAccessControls,
  ETSAccessControlsInterface,
} from "../../contracts/ETSAccessControls";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "prevAddress",
        type: "address",
      },
    ],
    name: "PlatformSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerLockToggled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "AUCTION_ORACLE_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RELAYER_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RELAYER_FACTORY_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RELAYER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SMART_CONTRACT_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_currentOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "changeRelayerOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlatformAddress",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "getRelayerAddressFromName",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getRelayerAddressFromOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getRelayerNameFromAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_platformAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isAuctionOracle",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isRelayer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isRelayerAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isRelayerAndNotPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isRelayerByAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "isRelayerByName",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isRelayerByOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isRelayerFactory",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isRelayerLocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isSmartContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayerOwner",
        type: "address",
      },
    ],
    name: "pauseRelayerByOwnerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "registerRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "relayerContractToName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "relayerLocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "relayerNameToContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "relayerOwnerToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_platform",
        type: "address",
      },
    ],
    name: "setPlatform",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_role",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_adminRole",
        type: "bytes32",
      },
    ],
    name: "setRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "toggleRelayerLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0604052306080523480156200001557600080fd5b506200002062000026565b620000e7565b600054610100900460ff1615620000935760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811614620000e5576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6080516128b96200011f60003960008181610e5c01528181610ee101528181610fd80152818161105d01526111dd01526128b96000f3fe6080604052600436106102d15760003560e01c80636ab04a9311610179578063a3f4df7e116100d6578063c4d66de81161008a578063dd37dc2211610064578063dd37dc2214610905578063df3b558014610939578063f968b8771461097257600080fd5b8063c4d66de814610891578063c8d8311d146108b1578063d547741f146108e557600080fd5b8063a8e2f235116100bb578063a8e2f235146107ee578063ac9f40a514610827578063bf2a22411461085d57600080fd5b8063a3f4df7e14610785578063a710f73e146107ce57600080fd5b8063926d7d7f1161012d578063985dcdac11610112578063985dcdac14610730578063a10138e814610750578063a217fddf1461077057600080fd5b8063926d7d7f146106cc578063942da8f01461070057600080fd5b80638776887a1161015e5780638776887a1461062b5780638e0ed37c1461066657806391d148541461068657600080fd5b80636ab04a93146105d7578063857d2608146105f757600080fd5b8063347308b2116102325780634f1ef286116101e6578063541d5548116101c0578063541d55481461057757806358594dc4146105975780636945c5ea146105b757600080fd5b80634f1ef286146105225780635235075c1461053557806352d1902d1461056257600080fd5b806336568abe1161021757806336568abe146104c45780633659cfe6146104e45780633c0c45661461050457600080fd5b8063347308b2146104845780633498e6ab146104a457600080fd5b8063248a9ca311610289578063277c3f401161026e578063277c3f40146104245780632b70420b146104445780632f2ff15d1461046457600080fd5b8063248a9ca3146103c657806324d7806c1461040457600080fd5b80631a943187116102ba5780631a9431871461032b5780631e4e00911461038457806321c82406146103a657600080fd5b806301b96189146102d657806301ffc9a71461030b575b600080fd5b3480156102e257600080fd5b506102f66102f13660046122de565b610992565b60405190151581526020015b60405180910390f35b34801561031757600080fd5b506102f66103263660046122fb565b610a33565b34801561033757600080fd5b5061036c6103463660046123c9565b805160208183018101805160fd825292820191909301209152546001600160a01b031681565b6040516001600160a01b039091168152602001610302565b34801561039057600080fd5b506103a461039f366004612412565b610aca565b005b3480156103b257600080fd5b506103a46103c13660046122de565b610ae4565b3480156103d257600080fd5b506103f66103e1366004612434565b60009081526065602052604090206001015490565b604051908152602001610302565b34801561041057600080fd5b506102f661041f3660046122de565b610b6f565b34801561043057600080fd5b506102f661043f3660046123c9565b610baf565b34801561045057600080fd5b506103a461045f36600461244d565b610bec565b34801561047057600080fd5b506103a461047f3660046124e5565b610d1b565b34801561049057600080fd5b506102f661049f3660046122de565b610d40565b3480156104b057600080fd5b506102f66104bf3660046122de565b610d80565b3480156104d057600080fd5b506103a46104df3660046124e5565b610dc0565b3480156104f057600080fd5b506103a46104ff3660046122de565b610e51565b34801561051057600080fd5b5060fb546001600160a01b031661036c565b6103a4610530366004612515565b610fcd565b34801561054157600080fd5b506105556105503660046122de565b611136565b60405161030291906125a5565b34801561056e57600080fd5b506103f66111d0565b34801561058357600080fd5b506102f66105923660046122de565b611295565b3480156105a357600080fd5b506102f66105b23660046122de565b6112df565b3480156105c357600080fd5b506103a46105d23660046122de565b61131f565b3480156105e357600080fd5b506102f66105f23660046122de565b61139c565b34801561060357600080fd5b506103f67f9d49f397ae9ef1a834b569acb967799a367061e305932181a44f5773da873bfd81565b34801561063757600080fd5b506102f66106463660046122de565b6001600160a01b03908116600090815260ff602052604090205416151590565b34801561067257600080fd5b506103a46106813660046125d8565b6113f3565b34801561069257600080fd5b506102f66106a13660046124e5565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156106d857600080fd5b506103f67fe2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc481565b34801561070c57600080fd5b506102f661071b3660046122de565b60fc6020526000908152604090205460ff1681565b34801561073c57600080fd5b5061055561074b3660046122de565b6115dd565b34801561075c57600080fd5b506103a461076b3660046122de565b611689565b34801561077c57600080fd5b506103f6600081565b34801561079157600080fd5b506105556040518060400160405280601381526020017f4554532061636365737320636f6e74726f6c730000000000000000000000000081525081565b3480156107da57600080fd5b5061036c6107e93660046123c9565b6117b0565b3480156107fa57600080fd5b506102f66108093660046122de565b6001600160a01b0316600090815260fc602052604090205460ff1690565b34801561083357600080fd5b5061036c6108423660046122de565b60ff602052600090815260409020546001600160a01b031681565b34801561086957600080fd5b506103f67f619071fe1792701f31c1707f419d418b505e01c7642551568874b32ede501d7481565b34801561089d57600080fd5b506103a46108ac3660046122de565b6117e1565b3480156108bd57600080fd5b506103f67f2cbe5b3d4b4f5f80bc7c9aec91d5a1a298a641fa1affcd6a45a69ca24162cd4a81565b3480156108f157600080fd5b506103a46109003660046124e5565b61190e565b34801561091157600080fd5b506103f67fc08ea83d6e841581b661c1aa701959924c664fd108ef1527375a9e577ac521b081565b34801561094557600080fd5b5061036c6109543660046122de565b6001600160a01b03908116600090815260ff60205260409020541690565b34801561097e57600080fd5b506102f661098d3660046122de565b611933565b600061099d8261139c565b80156109c257506001600160a01b038216600090815260fc602052604090205460ff16155b8015610a2d5750816001600160a01b031663b187bd266040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2b9190612606565b155b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b000000000000000000000000000000000000000000000000000000001480610a2d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610a2d565b6000610ad5816119b4565b610adf83836119be565b505050565b7f619071fe1792701f31c1707f419d418b505e01c7642551568874b32ede501d74610b0e816119b4565b6001600160a01b038216600081815260fc6020908152604091829020805460ff81161560ff1990911617905590519182527fd7583b62f34b665d4b94bca179b3d822171f6c2de14f9c4d65841621d0ead59091015b60405180910390a15050565b6001600160a01b03811660009081527fffdfc1249c027f9191656349feb0761381bb32c9f557e01f419fd08754bf5a1b602052604081205460ff16610a2d565b6000806001600160a01b031660fd83604051610bcb9190612628565b908152604051908190036020019020546001600160a01b0316141592915050565b7fc08ea83d6e841581b661c1aa701959924c664fd108ef1527375a9e577ac521b0610c16816119b4565b8460fd8585604051610c29929190612644565b908152604080516020928190038301902080546001600160a01b0319166001600160a01b03948516179055918716600090815260fe90915220610c6d908585612230565b506001600160a01b03828116600090815260ff6020908152604080832080546001600160a01b031916948a16948517905592825260fc905220805460ff19169055610cd87fe2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc486610d1b565b6040516001600160a01b03861681527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c59060200160405180910390a15050505050565b600082815260656020526040902060010154610d36816119b4565b610adf8383611a09565b6001600160a01b03811660009081527fa8a39816577859e51725a02b4f42e61c6db9d8a6707506489ff3a06ff39128ea602052604081205460ff16610a2d565b6001600160a01b03811660009081527f9b94ea8f6f9f9e6eb660315c7f1317a68dfb989750fa2840fcca4b2685162e24602052604081205460ff16610a2d565b6001600160a01b0381163314610e435760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b610e4d8282611aab565b5050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610edf5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610e3a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610f3a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610fa55760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610e3a565b610fae81611b2e565b60408051600080825260208201909252610fca91839190611b39565b50565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561105b5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610e3a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166110b67f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146111215760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610e3a565b61112a82611b2e565b610e4d82826001611b39565b60fe602052600090815260409020805461114f90612654565b80601f016020809104026020016040519081016040528092919081815260200182805461117b90612654565b80156111c85780601f1061119d576101008083540402835291602001916111c8565b820191906000526020600020905b8154815290600101906020018083116111ab57829003601f168201915b505050505081565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146112705760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610e3a565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6001600160a01b03811660009081527f9b94ea8f6f9f9e6eb660315c7f1317a68dfb989750fa2840fcca4b2685162e24602052604081205460ff1680610a2d5750610a2d82610992565b6001600160a01b03811660009081527f7c35304d3265d21fc1bcb98392cbfb6b530bbdf20000aed21f3d19f9a32ed2ba602052604081205460ff16610a2d565b600061132a816119b4565b60fb80546001600160a01b038481166001600160a01b031983161790925516611354600084610d1b565b604080516001600160a01b038086168252831660208201527f0e8ce4b57fd24de168e9c8d76109cb59a7852e78b3575da1ba2077dd53d330ec910160405180910390a1505050565b6040805160008082526020808301808552835190206001600160a01b038616835260fe909152838220919390926113d492910161268f565b6040516020818303038152906040528051906020012014159050919050565b7fe2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc461141d816119b4565b6114263361139c565b6114725760405162461bcd60e51b815260206004820152601560248201527f43616c6c6572206973206e6f742072656c6179657200000000000000000000006044820152606401610e3a565b6001600160a01b038316336001600160a01b031663893d20e86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114de919061272b565b6001600160a01b0316146115345760405162461bcd60e51b815260206004820152601160248201527f4e6f742072656c61796572206f776e65720000000000000000000000000000006044820152606401610e3a565b6001600160a01b03808316600090815260ff6020526040902054161561159c5760405162461bcd60e51b815260206004820181905260248201527f4e6577206f776e657220616c7265616479206f776e7320612072656c617965726044820152606401610e3a565b506001600160a01b03918216600090815260ff602052604080822080546001600160a01b031990811690915592909316815291909120805490911633179055565b6001600160a01b038116600090815260fe6020526040902080546060919061160490612654565b80601f016020809104026020016040519081016040528092919081815260200182805461163090612654565b801561167d5780601f106116525761010080835404028352916020019161167d565b820191906000526020600020905b81548152906001019060200180831161166057829003601f168201915b50505050509050919050565b7f619071fe1792701f31c1707f419d418b505e01c7642551568874b32ede501d746116b3816119b4565b6001600160a01b03808316600090815260ff60205260409020541615610e4d576001600160a01b03808316600090815260ff60205260408120549091169050806001600160a01b031663b187bd266040518163ffffffff1660e01b8152600401602060405180830381865afa158015611730573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117549190612606565b610adf57806001600160a01b0316638456cb596040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561179357600080fd5b505af11580156117a7573d6000803e3d6000fd5b50505050505050565b600060fd826040516117c29190612628565b908152604051908190036020019020546001600160a01b031692915050565b600054610100900460ff16158080156118015750600054600160ff909116105b8061181b5750303b15801561181b575060005460ff166001145b61188d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610e3a565b6000805460ff1916600117905580156118b0576000805461ff0019166101001790555b6118b8611cd9565b6118c3600033611a09565b6118cc8261131f565b8015610e4d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602001610b63565b600082815260656020526040902060010154611929816119b4565b610adf8383611aab565b6001600160a01b03811660009081527f9b94ea8f6f9f9e6eb660315c7f1317a68dfb989750fa2840fcca4b2685162e24602052604081205460ff1680610a2d57506001600160a01b03821660009081527f9bc9734c87cad716c86f45e418af08967498fe7cc94a515dbe81525dee2c1f5f602052604090205460ff16610a2d565b610fca8133611d58565b600082815260656020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16610e4d5760008281526065602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611a673390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff1615610e4d5760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610e4d816119b4565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611b6c57610adf83611dcd565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611bc6575060408051601f3d908101601f19168201909252611bc391810190612748565b60015b611c385760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610e3a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611ccd5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610e3a565b50610adf838383611e8b565b600054610100900460ff16611d565760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610e3a565b565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16610e4d57611d8b81611eb6565b611d96836020611ec8565b604051602001611da7929190612761565b60408051601f198184030181529082905262461bcd60e51b8252610e3a916004016125a5565b6001600160a01b0381163b611e4a5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610e3a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b611e94836120b0565b600082511180611ea15750805b15610adf57611eb083836120f0565b50505050565b6060610a2d6001600160a01b03831660145b60606000611ed78360026127f8565b611ee2906002612817565b67ffffffffffffffff811115611efa57611efa61233d565b6040519080825280601f01601f191660200182016040528015611f24576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611f5b57611f5b61282f565b60200101906001600160f81b031916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611fa657611fa661282f565b60200101906001600160f81b031916908160001a9053506000611fca8460026127f8565b611fd5906001612817565b90505b600181111561205a577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106120165761201661282f565b1a60f81b82828151811061202c5761202c61282f565b60200101906001600160f81b031916908160001a90535060049490941c9361205381612845565b9050611fd8565b5083156120a95760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610e3a565b9392505050565b6120b981611dcd565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606120a9838360405180606001604052806027815260200161285d602791396060600080856001600160a01b03168560405161212d9190612628565b600060405180830381855af49150503d8060008114612168576040519150601f19603f3d011682016040523d82523d6000602084013e61216d565b606091505b509150915061217e86838387612188565b9695505050505050565b606083156121f45782516121ed576001600160a01b0385163b6121ed5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610e3a565b50816121fe565b6121fe8383612206565b949350505050565b8151156122165781518083602001fd5b8060405162461bcd60e51b8152600401610e3a91906125a5565b82805461223c90612654565b90600052602060002090601f01602090048101928261225e57600085556122a4565b82601f106122775782800160ff198235161785556122a4565b828001600101855582156122a4579182015b828111156122a4578235825591602001919060010190612289565b506122b09291506122b4565b5090565b5b808211156122b057600081556001016122b5565b6001600160a01b0381168114610fca57600080fd5b6000602082840312156122f057600080fd5b81356120a9816122c9565b60006020828403121561230d57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146120a957600080fd5b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561236e5761236e61233d565b604051601f8501601f19908116603f011681019082821181831017156123965761239661233d565b816040528093508581528686860111156123af57600080fd5b858560208301376000602087830101525050509392505050565b6000602082840312156123db57600080fd5b813567ffffffffffffffff8111156123f257600080fd5b8201601f8101841361240357600080fd5b6121fe84823560208401612353565b6000806040838503121561242557600080fd5b50508035926020909101359150565b60006020828403121561244657600080fd5b5035919050565b6000806000806060858703121561246357600080fd5b843561246e816122c9565b9350602085013567ffffffffffffffff8082111561248b57600080fd5b818701915087601f83011261249f57600080fd5b8135818111156124ae57600080fd5b8860208285010111156124c057600080fd5b60208301955080945050505060408501356124da816122c9565b939692955090935050565b600080604083850312156124f857600080fd5b82359150602083013561250a816122c9565b809150509250929050565b6000806040838503121561252857600080fd5b8235612533816122c9565b9150602083013567ffffffffffffffff81111561254f57600080fd5b8301601f8101851361256057600080fd5b61256f85823560208401612353565b9150509250929050565b60005b8381101561259457818101518382015260200161257c565b83811115611eb05750506000910152565b60208152600082518060208401526125c4816040850160208701612579565b601f01601f19169190910160400192915050565b600080604083850312156125eb57600080fd5b82356125f6816122c9565b9150602083013561250a816122c9565b60006020828403121561261857600080fd5b815180151581146120a957600080fd5b6000825161263a818460208701612579565b9190910192915050565b8183823760009101908152919050565b600181811c9082168061266857607f821691505b6020821081141561268957634e487b7160e01b600052602260045260246000fd5b50919050565b600080835481600182811c9150808316806126ab57607f831692505b60208084108214156126cb57634e487b7160e01b86526022600452602486fd5b8180156126df57600181146126f05761271d565b60ff1986168952848901965061271d565b60008a81526020902060005b868110156127155781548b8201529085019083016126fc565b505084890196505b509498975050505050505050565b60006020828403121561273d57600080fd5b81516120a9816122c9565b60006020828403121561275a57600080fd5b5051919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612799816017850160208801612579565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516127d6816028840160208801612579565b01602801949350505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615612812576128126127e2565b500290565b6000821982111561282a5761282a6127e2565b500190565b634e487b7160e01b600052603260045260246000fd5b600081612854576128546127e2565b50600019019056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122046b7e0a346be7b428d1f8ba6f0369d604e32584b3c290930e3b51d248bfcf47464736f6c634300080c0033";

type ETSAccessControlsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ETSAccessControlsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ETSAccessControls__factory extends ContractFactory {
  constructor(...args: ETSAccessControlsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ETSAccessControls & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ETSAccessControls__factory {
    return super.connect(runner) as ETSAccessControls__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ETSAccessControlsInterface {
    return new Interface(_abi) as ETSAccessControlsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ETSAccessControls {
    return new Contract(address, _abi, runner) as unknown as ETSAccessControls;
  }
}
