/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IETSAccessControlsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "changeRelayerOwner"
      | "getPlatformAddress"
      | "getRelayerAddressFromName"
      | "getRelayerAddressFromOwner"
      | "getRelayerNameFromAddress"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "isAdmin"
      | "isAuctionOracle"
      | "isRelayer"
      | "isRelayerAdmin"
      | "isRelayerAndNotPaused"
      | "isRelayerByAddress"
      | "isRelayerByName"
      | "isRelayerByOwner"
      | "isRelayerFactory"
      | "isRelayerLocked"
      | "isSmartContract"
      | "pauseRelayerByOwnerAddress"
      | "registerRelayer"
      | "renounceRole"
      | "revokeRole"
      | "setPlatform"
      | "setRoleAdmin"
      | "toggleRelayerLock"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "PlatformSet"
      | "RelayerAdded"
      | "RelayerLockToggled"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "changeRelayerOwner",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatformAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRelayerAddressFromName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRelayerAddressFromOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRelayerNameFromAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAuctionOracle",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayerAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayerAndNotPaused",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayerByAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayerByName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayerByOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayerFactory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayerLocked",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isSmartContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pauseRelayerByOwnerAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerRelayer",
    values: [AddressLike, string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatform",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoleAdmin",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleRelayerLock",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeRelayerOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlatformAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRelayerAddressFromName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRelayerAddressFromOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRelayerNameFromAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAuctionOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isRelayer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRelayerAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRelayerAndNotPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRelayerByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRelayerByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRelayerByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRelayerFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRelayerLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSmartContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pauseRelayerByOwnerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPlatform",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleRelayerLock",
    data: BytesLike
  ): Result;
}

export namespace PlatformSetEvent {
  export type InputTuple = [newAddress: AddressLike, prevAddress: AddressLike];
  export type OutputTuple = [newAddress: string, prevAddress: string];
  export interface OutputObject {
    newAddress: string;
    prevAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RelayerAddedEvent {
  export type InputTuple = [relayer: AddressLike];
  export type OutputTuple = [relayer: string];
  export interface OutputObject {
    relayer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RelayerLockToggledEvent {
  export type InputTuple = [relayer: AddressLike];
  export type OutputTuple = [relayer: string];
  export interface OutputObject {
    relayer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IETSAccessControls extends BaseContract {
  connect(runner?: ContractRunner | null): IETSAccessControls;
  waitForDeployment(): Promise<this>;

  interface: IETSAccessControlsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  changeRelayerOwner: TypedContractMethod<
    [_currentOwner: AddressLike, _newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getPlatformAddress: TypedContractMethod<[], [string], "view">;

  getRelayerAddressFromName: TypedContractMethod<
    [_name: string],
    [string],
    "view"
  >;

  getRelayerAddressFromOwner: TypedContractMethod<
    [_address: AddressLike],
    [string],
    "view"
  >;

  getRelayerNameFromAddress: TypedContractMethod<
    [_address: AddressLike],
    [string],
    "view"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isAdmin: TypedContractMethod<[_addr: AddressLike], [boolean], "view">;

  isAuctionOracle: TypedContractMethod<[_addr: AddressLike], [boolean], "view">;

  isRelayer: TypedContractMethod<[_addr: AddressLike], [boolean], "view">;

  isRelayerAdmin: TypedContractMethod<[_addr: AddressLike], [boolean], "view">;

  isRelayerAndNotPaused: TypedContractMethod<
    [_addr: AddressLike],
    [boolean],
    "view"
  >;

  isRelayerByAddress: TypedContractMethod<
    [_addr: AddressLike],
    [boolean],
    "view"
  >;

  isRelayerByName: TypedContractMethod<[_name: string], [boolean], "view">;

  isRelayerByOwner: TypedContractMethod<
    [_addr: AddressLike],
    [boolean],
    "view"
  >;

  isRelayerFactory: TypedContractMethod<
    [_addr: AddressLike],
    [boolean],
    "view"
  >;

  isRelayerLocked: TypedContractMethod<[_addr: AddressLike], [boolean], "view">;

  isSmartContract: TypedContractMethod<[_addr: AddressLike], [boolean], "view">;

  pauseRelayerByOwnerAddress: TypedContractMethod<
    [_relayerOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  registerRelayer: TypedContractMethod<
    [_relayer: AddressLike, _name: string, _owner: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  setPlatform: TypedContractMethod<
    [_platform: AddressLike],
    [void],
    "nonpayable"
  >;

  setRoleAdmin: TypedContractMethod<
    [_role: BytesLike, _adminRole: BytesLike],
    [void],
    "nonpayable"
  >;

  toggleRelayerLock: TypedContractMethod<
    [_relayer: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "changeRelayerOwner"
  ): TypedContractMethod<
    [_currentOwner: AddressLike, _newOwner: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getPlatformAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRelayerAddressFromName"
  ): TypedContractMethod<[_name: string], [string], "view">;
  getFunction(
    nameOrSignature: "getRelayerAddressFromOwner"
  ): TypedContractMethod<[_address: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getRelayerNameFromAddress"
  ): TypedContractMethod<[_address: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isAdmin"
  ): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isAuctionOracle"
  ): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isRelayer"
  ): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isRelayerAdmin"
  ): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isRelayerAndNotPaused"
  ): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isRelayerByAddress"
  ): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isRelayerByName"
  ): TypedContractMethod<[_name: string], [boolean], "view">;
  getFunction(
    nameOrSignature: "isRelayerByOwner"
  ): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isRelayerFactory"
  ): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isRelayerLocked"
  ): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSmartContract"
  ): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "pauseRelayerByOwnerAddress"
  ): TypedContractMethod<[_relayerOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "registerRelayer"
  ): TypedContractMethod<
    [_relayer: AddressLike, _name: string, _owner: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPlatform"
  ): TypedContractMethod<[_platform: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRoleAdmin"
  ): TypedContractMethod<
    [_role: BytesLike, _adminRole: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "toggleRelayerLock"
  ): TypedContractMethod<[_relayer: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "PlatformSet"
  ): TypedContractEvent<
    PlatformSetEvent.InputTuple,
    PlatformSetEvent.OutputTuple,
    PlatformSetEvent.OutputObject
  >;
  getEvent(
    key: "RelayerAdded"
  ): TypedContractEvent<
    RelayerAddedEvent.InputTuple,
    RelayerAddedEvent.OutputTuple,
    RelayerAddedEvent.OutputObject
  >;
  getEvent(
    key: "RelayerLockToggled"
  ): TypedContractEvent<
    RelayerLockToggledEvent.InputTuple,
    RelayerLockToggledEvent.OutputTuple,
    RelayerLockToggledEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    "PlatformSet(address,address)": TypedContractEvent<
      PlatformSetEvent.InputTuple,
      PlatformSetEvent.OutputTuple,
      PlatformSetEvent.OutputObject
    >;
    PlatformSet: TypedContractEvent<
      PlatformSetEvent.InputTuple,
      PlatformSetEvent.OutputTuple,
      PlatformSetEvent.OutputObject
    >;

    "RelayerAdded(address)": TypedContractEvent<
      RelayerAddedEvent.InputTuple,
      RelayerAddedEvent.OutputTuple,
      RelayerAddedEvent.OutputObject
    >;
    RelayerAdded: TypedContractEvent<
      RelayerAddedEvent.InputTuple,
      RelayerAddedEvent.OutputTuple,
      RelayerAddedEvent.OutputObject
    >;

    "RelayerLockToggled(address)": TypedContractEvent<
      RelayerLockToggledEvent.InputTuple,
      RelayerLockToggledEvent.OutputTuple,
      RelayerLockToggledEvent.OutputObject
    >;
    RelayerLockToggled: TypedContractEvent<
      RelayerLockToggledEvent.InputTuple,
      RelayerLockToggledEvent.OutputTuple,
      RelayerLockToggledEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
