/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export type StrategyParamsStruct = {
  performanceFee: BigNumberish;
  activation: BigNumberish;
  debtRatio: BigNumberish;
  minDebtPerHarvest: BigNumberish;
  maxDebtPerHarvest: BigNumberish;
  lastReport: BigNumberish;
  totalDebt: BigNumberish;
  totalGain: BigNumberish;
  totalLoss: BigNumberish;
};

export type StrategyParamsStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  performanceFee: BigNumber;
  activation: BigNumber;
  debtRatio: BigNumber;
  minDebtPerHarvest: BigNumber;
  maxDebtPerHarvest: BigNumber;
  lastReport: BigNumber;
  totalDebt: BigNumber;
  totalGain: BigNumber;
  totalLoss: BigNumber;
};

export interface VaultAPIInterface extends utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "apiVersion()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "creditAvailable()": FunctionFragment;
    "debtOutstanding()": FunctionFragment;
    "decimals()": FunctionFragment;
    "deposit(uint256,address)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "deposit()": FunctionFragment;
    "depositLimit()": FunctionFragment;
    "expectedReturn()": FunctionFragment;
    "governance()": FunctionFragment;
    "guardian()": FunctionFragment;
    "management()": FunctionFragment;
    "maxAvailableShares()": FunctionFragment;
    "name()": FunctionFragment;
    "permit(address,address,uint256,uint256,bytes)": FunctionFragment;
    "pricePerShare()": FunctionFragment;
    "report(uint256,uint256,uint256)": FunctionFragment;
    "revokeStrategy()": FunctionFragment;
    "setDepositLimit(uint256)": FunctionFragment;
    "strategies(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "token()": FunctionFragment;
    "totalAssets()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowance"
      | "apiVersion"
      | "approve"
      | "balanceOf"
      | "creditAvailable"
      | "debtOutstanding"
      | "decimals"
      | "deposit(uint256,address)"
      | "deposit(uint256)"
      | "deposit()"
      | "depositLimit"
      | "expectedReturn"
      | "governance"
      | "guardian"
      | "management"
      | "maxAvailableShares"
      | "name"
      | "permit"
      | "pricePerShare"
      | "report"
      | "revokeStrategy"
      | "setDepositLimit"
      | "strategies"
      | "symbol"
      | "token"
      | "totalAssets"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "withdraw(uint256,address)"
      | "withdraw(uint256)"
      | "withdraw()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "apiVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "creditAvailable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "debtOutstanding",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit(uint256,address)",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "deposit()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "expectedReturn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "management",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxAvailableShares",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pricePerShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "report",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeStrategy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "strategies", values: [string]): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(uint256,address)",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw()",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "apiVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "creditAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "debtOutstanding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposit(uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deposit(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expectedReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "management", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxAvailableShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pricePerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "report", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "strategies", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw()", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface VaultAPI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultAPIInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    apiVersion(overrides?: CallOverrides): Promise<[string]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    balanceOf(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    creditAvailable(overrides?: CallOverrides): Promise<[BigNumber]>;

    debtOutstanding(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    "deposit(uint256,address)"(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "deposit()"(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    expectedReturn(overrides?: CallOverrides): Promise<[BigNumber]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    guardian(overrides?: CallOverrides): Promise<[string]>;

    management(overrides?: CallOverrides): Promise<[string]>;

    maxAvailableShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    permit(
      owner: string,
      spender: string,
      amount: BigNumberish,
      expiry: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    pricePerShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    report(
      _gain: BigNumberish,
      _loss: BigNumberish,
      _debtPayment: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    revokeStrategy(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setDepositLimit(
      limit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    strategies(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<[StrategyParamsStructOutput]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "withdraw(uint256,address)"(
      maxShares: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      maxShares: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "withdraw()"(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  apiVersion(overrides?: CallOverrides): Promise<string>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  balanceOf(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

  creditAvailable(overrides?: CallOverrides): Promise<BigNumber>;

  debtOutstanding(overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<BigNumber>;

  "deposit(uint256,address)"(
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "deposit(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "deposit()"(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositLimit(overrides?: CallOverrides): Promise<BigNumber>;

  expectedReturn(overrides?: CallOverrides): Promise<BigNumber>;

  governance(overrides?: CallOverrides): Promise<string>;

  guardian(overrides?: CallOverrides): Promise<string>;

  management(overrides?: CallOverrides): Promise<string>;

  maxAvailableShares(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  permit(
    owner: string,
    spender: string,
    amount: BigNumberish,
    expiry: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  pricePerShare(overrides?: CallOverrides): Promise<BigNumber>;

  report(
    _gain: BigNumberish,
    _loss: BigNumberish,
    _debtPayment: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  revokeStrategy(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setDepositLimit(
    limit: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  strategies(
    _strategy: string,
    overrides?: CallOverrides
  ): Promise<StrategyParamsStructOutput>;

  symbol(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "withdraw(uint256,address)"(
    maxShares: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    maxShares: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "withdraw()"(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    apiVersion(overrides?: CallOverrides): Promise<string>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    creditAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    debtOutstanding(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "deposit(uint256,address)"(
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deposit()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositLimit(overrides?: CallOverrides): Promise<BigNumber>;

    expectedReturn(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<string>;

    guardian(overrides?: CallOverrides): Promise<string>;

    management(overrides?: CallOverrides): Promise<string>;

    maxAvailableShares(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    permit(
      owner: string,
      spender: string,
      amount: BigNumberish,
      expiry: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    pricePerShare(overrides?: CallOverrides): Promise<BigNumber>;

    report(
      _gain: BigNumberish,
      _loss: BigNumberish,
      _debtPayment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokeStrategy(overrides?: CallOverrides): Promise<void>;

    setDepositLimit(
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    strategies(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<StrategyParamsStructOutput>;

    symbol(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "withdraw(uint256,address)"(
      maxShares: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdraw(uint256)"(
      maxShares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdraw()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    apiVersion(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    balanceOf(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    creditAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    debtOutstanding(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "deposit(uint256,address)"(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "deposit()"(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    depositLimit(overrides?: CallOverrides): Promise<BigNumber>;

    expectedReturn(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    guardian(overrides?: CallOverrides): Promise<BigNumber>;

    management(overrides?: CallOverrides): Promise<BigNumber>;

    maxAvailableShares(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      amount: BigNumberish,
      expiry: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    pricePerShare(overrides?: CallOverrides): Promise<BigNumber>;

    report(
      _gain: BigNumberish,
      _loss: BigNumberish,
      _debtPayment: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    revokeStrategy(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setDepositLimit(
      limit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    strategies(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "withdraw(uint256,address)"(
      maxShares: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "withdraw(uint256)"(
      maxShares: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "withdraw()"(overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    apiVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditAvailable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    debtOutstanding(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "deposit(uint256,address)"(
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "deposit(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "deposit()"(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    expectedReturn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    management(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxAvailableShares(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permit(
      owner: string,
      spender: string,
      amount: BigNumberish,
      expiry: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    pricePerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    report(
      _gain: BigNumberish,
      _loss: BigNumberish,
      _debtPayment: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    revokeStrategy(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setDepositLimit(
      limit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    strategies(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,address)"(
      maxShares: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      maxShares: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "withdraw()"(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
