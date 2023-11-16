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
import type { NonPayableOverrides } from "../../../../common";
import type {
  ETSTargetUpgrade,
  ETSTargetUpgradeInterface,
} from "../../../../contracts/test/UUPSTesting.sol/ETSTargetUpgrade";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "etsAccessControls",
        type: "address",
      },
    ],
    name: "AccessControlsSet",
    type: "event",
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
        internalType: "address",
        name: "etsEnrichTarget",
        type: "address",
      },
    ],
    name: "EnrichTargetSet",
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
        internalType: "uint256",
        name: "targetId",
        type: "uint256",
      },
    ],
    name: "TargetCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "targetId",
        type: "uint256",
      },
    ],
    name: "TargetUpdated",
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
    inputs: [
      {
        internalType: "string",
        name: "_targetURI",
        type: "string",
      },
    ],
    name: "computeTargetId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_targetURI",
        type: "string",
      },
    ],
    name: "createTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "targetId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "etsAccessControls",
    outputs: [
      {
        internalType: "contract IETSAccessControls",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "etsEnrichTarget",
    outputs: [
      {
        internalType: "contract IETSEnrichTarget",
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
        name: "_targetURI",
        type: "string",
      },
    ],
    name: "getOrCreateTargetId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_targetId",
        type: "uint256",
      },
    ],
    name: "getTargetById",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "targetURI",
            type: "string",
          },
          {
            internalType: "address",
            name: "createdBy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "enriched",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "httpStatus",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "ipfsHash",
            type: "string",
          },
        ],
        internalType: "struct IETSTarget.Target",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_targetURI",
        type: "string",
      },
    ],
    name: "getTargetByURI",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "targetURI",
            type: "string",
          },
          {
            internalType: "address",
            name: "createdBy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "enriched",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "httpStatus",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "ipfsHash",
            type: "string",
          },
        ],
        internalType: "struct IETSTarget.Target",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_etsAccessControls",
        type: "address",
      },
    ],
    name: "initialize",
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
        internalType: "contract IETSAccessControls",
        name: "_accessControls",
        type: "address",
      },
    ],
    name: "setAccessControls",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_etsEnrichTarget",
        type: "address",
      },
    ],
    name: "setEnrichTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_targetId",
        type: "uint256",
      },
    ],
    name: "targetExistsById",
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
        name: "_targetURI",
        type: "string",
      },
    ],
    name: "targetExistsByURI",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "targets",
    outputs: [
      {
        internalType: "string",
        name: "targetURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "createdBy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "enriched",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "httpStatus",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "ipfsHash",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_targetId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_targetURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_enriched",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_httpStatus",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_ipfsHash",
        type: "string",
      },
    ],
    name: "updateTarget",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradeTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
  "0x60a06040523060805234801561001457600080fd5b5061001d610022565b6100e1565b600054610100900460ff161561008e5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116146100df576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b608051611cbb610118600039600081816108d70152818161095c01528181610a5301528181610ad80152610bc20152611cbb6000f3fe6080604052600436106101445760003560e01c806352d1902d116100c0578063c4d66de811610074578063cd7c68e211610059578063cd7c68e2146103c0578063cf99c815146103e0578063f0496c861461040057600080fd5b8063c4d66de814610380578063cd15832f146103a057600080fd5b80637ab3f1cd116100a55780637ab3f1cd146102ea5780638299f9f91461030a578063a3f4df7e1461032a57600080fd5b806352d1902d146102b5578063794e75fc146102ca57600080fd5b806323c7e9f3116101175780633659cfe6116100fc5780633659cfe61461026c5780633d20b15c1461028e5780634f1ef286146102a257600080fd5b806323c7e9f31461021857806331bb0c691461024c57600080fd5b80630a39ce02146101495780630c48789c146101835780631b2d87c3146101b35780631b8278e2146101e0575b600080fd5b34801561015557600080fd5b50610169610164366004611852565b610420565b60405161017a9594939291906118c3565b60405180910390f35b34801561018f57600080fd5b506101a361019e36600461199b565b61056d565b604051901515815260200161017a565b3480156101bf57600080fd5b506101d36101ce366004611852565b610587565b60405161017a91906119e4565b3480156101ec57600080fd5b50606654610200906001600160a01b031681565b6040516001600160a01b03909116815260200161017a565b34801561022457600080fd5b5061023e61023336600461199b565b805160209091012090565b60405190815260200161017a565b34801561025857600080fd5b5061023e61026736600461199b565b610730565b34801561027857600080fd5b5061028c610287366004611a62565b6108cc565b005b34801561029a57600080fd5b5060016101a3565b61028c6102b0366004611a7f565b610a48565b3480156102c157600080fd5b5061023e610bb5565b3480156102d657600080fd5b506101d36102e536600461199b565b610c7a565b3480156102f657600080fd5b506101a3610305366004611b2c565b610cc5565b34801561031657600080fd5b50606554610200906001600160a01b031681565b34801561033657600080fd5b506103736040518060400160405280600981526020017f455453546172676574000000000000000000000000000000000000000000000081525081565b60405161017a9190611bb9565b34801561038c57600080fd5b5061028c61039b366004611a62565b610d98565b3480156103ac57600080fd5b5061028c6103bb366004611a62565b610ecb565b3480156103cc57600080fd5b506101a36103db366004611852565b6110d2565b3480156103ec57600080fd5b5061023e6103fb36600461199b565b611105565b34801561040c57600080fd5b5061028c61041b366004611a62565b611143565b60676020526000908152604090208054819061043b90611bcc565b80601f016020809104026020016040519081016040528092919081815260200182805461046790611bcc565b80156104b45780601f10610489576101008083540402835291602001916104b4565b820191906000526020600020905b81548152906001019060200180831161049757829003601f168201915b50505060018401546002850154600386015460048701805496976001600160a01b0390941696929550909350906104ea90611bcc565b80601f016020809104026020016040519081016040528092919081815260200182805461051690611bcc565b80156105635780601f1061053857610100808354040283529160200191610563565b820191906000526020600020905b81548152906001019060200180831161054657829003601f168201915b5050505050905085565b80516020820120600090610580816110d2565b9392505050565b6105c26040518060a001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001606081525090565b60008281526067602052604090819020815160a081019092528054829082906105ea90611bcc565b80601f016020809104026020016040519081016040528092919081815260200182805461061690611bcc565b80156106635780601f1061063857610100808354040283529160200191610663565b820191906000526020600020905b81548152906001019060200180831161064657829003601f168201915b505050918352505060018201546001600160a01b0316602082015260028201546040820152600382015460608201526004820180546080909201916106a790611bcc565b80601f01602080910402602001604051908101604052809291908181526020018280546106d390611bcc565b80156107205780601f106106f557610100808354040283529160200191610720565b820191906000526020600020905b81548152906001019060200180831161070357829003601f168201915b5050505050815250509050919050565b600061073b8261056d565b1561078d5760405162461bcd60e51b815260206004820152601060248201527f746172676574206964206578697374730000000000000000000000000000000060448201526064015b60405180910390fd5b60008251116107de5760405162461bcd60e51b815260206004820152600c60248201527f656d7074792074617267657400000000000000000000000000000000000000006044820152606401610784565b81516020808401919091206040805160a081018252858152338185015260008183018190526060820181905282518086018452818152608083015283815260678552919091208151805193949293919261083d92849290910190611745565b506020828101516001830180546001600160a01b0319166001600160a01b039092169190911790556040830151600283015560608301516003830155608083015180516108909260048501920190611745565b50506040518281527f503a6e6145f2d2a2a9b0845c2193aef653400c52f93b1c897bd55d36a396be7c915060200160405180910390a192915050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561095a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610784565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109b57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610a205760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610784565b610a298161128f565b60408051600080825260208201909252610a4591839190611337565b50565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610ad65760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610784565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610b317f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610b9c5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610784565b610ba58261128f565b610bb182826001611337565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c555760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610784565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610cb56040518060a001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001606081525090565b8151602083012061058081610587565b6066546000906001600160a01b03163314610d125760405162461bcd60e51b815260206004820152600d60248201526c1058d8d95cdcc819195b9a5959609a1b6044820152606401610784565b6000888152606760205260409020610d2b9088886117c9565b5060008881526067602052604090206002810186905560038101859055610d569060040184846117c9565b506040518881527f9d29e5045b411bb06d81d8ff11c828d9f1d7eb076eec9ca45eda49fc99f762b29060200160405180910390a1506001979650505050505050565b600054610100900460ff1615808015610db85750600054600160ff909116105b80610dd25750303b158015610dd2575060005460ff166001145b610e445760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610784565b6000805460ff191660011790558015610e67576000805461ff0019166101001790555b606580546001600160a01b0319166001600160a01b0384161790558015610bb1576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b606554604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c90602401602060405180830381865afa158015610f13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f379190611c07565b610f735760405162461bcd60e51b815260206004820152600d60248201526c1058d8d95cdcc819195b9a5959609a1b6044820152606401610784565b6001600160a01b038116610fc95760405162461bcd60e51b815260206004820152601660248201527f416464726573732063616e6e6f74206265207a65726f000000000000000000006044820152606401610784565b604051630935e01b60e21b81523360048201526001600160a01b038216906324d7806c90602401602060405180830381865afa15801561100d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110319190611c07565b61107d5760405162461bcd60e51b815260206004820181905260248201527f43616c6c6572206e6f742061646d696e20696e206e657720636f6e74726163746044820152606401610784565b606580546001600160a01b0319166001600160a01b0383169081179091556040519081527f2f55f724ae3134584dfdd86a4ee1e090635ff9913722b5fe06e064cc7e3ed8b4906020015b60405180910390a150565b600081815260676020526040812080548291906110ee90611bcc565b9050116110fc5760006110ff565b60015b92915050565b80516020808301919091206000818152606790925260408220805483919061112c90611bcc565b9050111561113a5792915050565b61058083610730565b606554604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c90602401602060405180830381865afa15801561118b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111af9190611c07565b6111eb5760405162461bcd60e51b815260206004820152600d60248201526c1058d8d95cdcc819195b9a5959609a1b6044820152606401610784565b6001600160a01b0381166112415760405162461bcd60e51b815260206004820152600b60248201527f42616420616464726573730000000000000000000000000000000000000000006044820152606401610784565b606680546001600160a01b0319166001600160a01b0383169081179091556040519081527fe96313c1f3045cd25cc6a60c1f5b3511040581e2aa833e3e035e1cc5fb836670906020016110c7565b606554604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c90602401602060405180830381865afa1580156112d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112fb9190611c07565b610a455760405162461bcd60e51b815260206004820152600d60248201526c1058d8d95cdcc819195b9a5959609a1b6044820152606401610784565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561136f5761136a836114dc565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156113c9575060408051601f3d908101601f191682019092526113c691810190611c29565b60015b61143b5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610784565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146114d05760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610784565b5061136a83838361159a565b6001600160a01b0381163b6115595760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610784565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6115a3836115c5565b6000825111806115b05750805b1561136a576115bf8383611605565b50505050565b6115ce816114dc565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606105808383604051806060016040528060278152602001611c5f602791396060600080856001600160a01b0316856040516116429190611c42565b600060405180830381855af49150503d806000811461167d576040519150601f19603f3d011682016040523d82523d6000602084013e611682565b606091505b50915091506116938683838761169d565b9695505050505050565b60608315611709578251611702576001600160a01b0385163b6117025760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610784565b5081611713565b611713838361171b565b949350505050565b81511561172b5781518083602001fd5b8060405162461bcd60e51b81526004016107849190611bb9565b82805461175190611bcc565b90600052602060002090601f01602090048101928261177357600085556117b9565b82601f1061178c57805160ff19168380011785556117b9565b828001600101855582156117b9579182015b828111156117b957825182559160200191906001019061179e565b506117c592915061183d565b5090565b8280546117d590611bcc565b90600052602060002090601f0160209004810192826117f757600085556117b9565b82601f106118105782800160ff198235161785556117b9565b828001600101855582156117b9579182015b828111156117b9578235825591602001919060010190611822565b5b808211156117c5576000815560010161183e565b60006020828403121561186457600080fd5b5035919050565b60005b8381101561188657818101518382015260200161186e565b838111156115bf5750506000910152565b600081518084526118af81602086016020860161186b565b601f01601f19169290920160200192915050565b60a0815260006118d660a0830188611897565b6001600160a01b038716602084015285604084015284606084015282810360808401526119038185611897565b98975050505050505050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156119405761194061190f565b604051601f8501601f19908116603f011681019082821181831017156119685761196861190f565b8160405280935085815286868601111561198157600080fd5b858560208301376000602087830101525050509392505050565b6000602082840312156119ad57600080fd5b813567ffffffffffffffff8111156119c457600080fd5b8201601f810184136119d557600080fd5b61171384823560208401611925565b602081526000825160a06020840152611a0060c0840182611897565b90506001600160a01b03602085015116604084015260408401516060840152606084015160808401526080840151601f198483030160a0850152611a448282611897565b95945050505050565b6001600160a01b0381168114610a4557600080fd5b600060208284031215611a7457600080fd5b813561058081611a4d565b60008060408385031215611a9257600080fd5b8235611a9d81611a4d565b9150602083013567ffffffffffffffff811115611ab957600080fd5b8301601f81018513611aca57600080fd5b611ad985823560208401611925565b9150509250929050565b60008083601f840112611af557600080fd5b50813567ffffffffffffffff811115611b0d57600080fd5b602083019150836020828501011115611b2557600080fd5b9250929050565b600080600080600080600060a0888a031215611b4757600080fd5b87359650602088013567ffffffffffffffff80821115611b6657600080fd5b611b728b838c01611ae3565b909850965060408a0135955060608a0135945060808a0135915080821115611b9957600080fd5b50611ba68a828b01611ae3565b989b979a50959850939692959293505050565b6020815260006105806020830184611897565b600181811c90821680611be057607f821691505b60208210811415611c0157634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611c1957600080fd5b8151801515811461058057600080fd5b600060208284031215611c3b57600080fd5b5051919050565b60008251611c5481846020870161186b565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212209883f7249d49fd1e08cf31eb817c3005786075f41e879633c37ea81d192cab1064736f6c634300080c0033";

type ETSTargetUpgradeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ETSTargetUpgradeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ETSTargetUpgrade__factory extends ContractFactory {
  constructor(...args: ETSTargetUpgradeConstructorParams) {
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
      ETSTargetUpgrade & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ETSTargetUpgrade__factory {
    return super.connect(runner) as ETSTargetUpgrade__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ETSTargetUpgradeInterface {
    return new Interface(_abi) as ETSTargetUpgradeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ETSTargetUpgrade {
    return new Contract(address, _abi, runner) as unknown as ETSTargetUpgrade;
  }
}
