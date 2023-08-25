/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface TreasuryVesterInterface extends utils.Interface {
  functions: {
    "claim()": FunctionFragment;
    "lastUpdate()": FunctionFragment;
    "recipient()": FunctionFragment;
    "setRecipient(address)": FunctionFragment;
    "taho()": FunctionFragment;
    "vestingAmount()": FunctionFragment;
    "vestingBegin()": FunctionFragment;
    "vestingCliff()": FunctionFragment;
    "vestingEnd()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claim"
      | "lastUpdate"
      | "recipient"
      | "setRecipient"
      | "taho"
      | "vestingAmount"
      | "vestingBegin"
      | "vestingCliff"
      | "vestingEnd"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastUpdate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setRecipient",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "taho", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vestingAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestingBegin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestingCliff",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestingEnd",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastUpdate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "taho", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vestingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingBegin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingCliff",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vestingEnd", data: BytesLike): Result;

  events: {};
}

export interface TreasuryVester extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TreasuryVesterInterface;

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
    claim(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    lastUpdate(overrides?: CallOverrides): Promise<[BigNumber]>;

    recipient(overrides?: CallOverrides): Promise<[string]>;

    setRecipient(
      recipient_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    taho(overrides?: CallOverrides): Promise<[string]>;

    vestingAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    vestingBegin(overrides?: CallOverrides): Promise<[BigNumber]>;

    vestingCliff(overrides?: CallOverrides): Promise<[BigNumber]>;

    vestingEnd(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  claim(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  lastUpdate(overrides?: CallOverrides): Promise<BigNumber>;

  recipient(overrides?: CallOverrides): Promise<string>;

  setRecipient(
    recipient_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  taho(overrides?: CallOverrides): Promise<string>;

  vestingAmount(overrides?: CallOverrides): Promise<BigNumber>;

  vestingBegin(overrides?: CallOverrides): Promise<BigNumber>;

  vestingCliff(overrides?: CallOverrides): Promise<BigNumber>;

  vestingEnd(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    claim(overrides?: CallOverrides): Promise<void>;

    lastUpdate(overrides?: CallOverrides): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<string>;

    setRecipient(recipient_: string, overrides?: CallOverrides): Promise<void>;

    taho(overrides?: CallOverrides): Promise<string>;

    vestingAmount(overrides?: CallOverrides): Promise<BigNumber>;

    vestingBegin(overrides?: CallOverrides): Promise<BigNumber>;

    vestingCliff(overrides?: CallOverrides): Promise<BigNumber>;

    vestingEnd(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    claim(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    lastUpdate(overrides?: CallOverrides): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<BigNumber>;

    setRecipient(
      recipient_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    taho(overrides?: CallOverrides): Promise<BigNumber>;

    vestingAmount(overrides?: CallOverrides): Promise<BigNumber>;

    vestingBegin(overrides?: CallOverrides): Promise<BigNumber>;

    vestingCliff(overrides?: CallOverrides): Promise<BigNumber>;

    vestingEnd(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    lastUpdate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRecipient(
      recipient_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    taho(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestingAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestingBegin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestingCliff(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestingEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
