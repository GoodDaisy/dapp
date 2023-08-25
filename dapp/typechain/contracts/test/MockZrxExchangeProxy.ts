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
  PayableOverrides,
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

export interface MockZrxExchangeProxyInterface extends utils.Interface {
  functions: {
    "sellToUniswap(address[],uint256,uint256,bool)": FunctionFragment;
    "sellToUniswap1(address[],uint256,uint256,bool)": FunctionFragment;
    "sellToUniswap2(address[],uint256,uint256,bool)": FunctionFragment;
    "sellToUniswap3(address[],uint256,uint256,bool)": FunctionFragment;
    "sellToUniswap4(address[],uint256,uint256,bool)": FunctionFragment;
    "sellToUniswap5(address[],uint256,uint256,bool)": FunctionFragment;
    "sellToUniswap6(address[],uint256,uint256,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "sellToUniswap"
      | "sellToUniswap1"
      | "sellToUniswap2"
      | "sellToUniswap3"
      | "sellToUniswap4"
      | "sellToUniswap5"
      | "sellToUniswap6"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "sellToUniswap",
    values: [string[], BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sellToUniswap1",
    values: [string[], BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sellToUniswap2",
    values: [string[], BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sellToUniswap3",
    values: [string[], BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sellToUniswap4",
    values: [string[], BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sellToUniswap5",
    values: [string[], BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sellToUniswap6",
    values: [string[], BigNumberish, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "sellToUniswap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellToUniswap1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellToUniswap2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellToUniswap3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellToUniswap4",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellToUniswap5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellToUniswap6",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockZrxExchangeProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockZrxExchangeProxyInterface;

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
    sellToUniswap(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    sellToUniswap1(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    sellToUniswap2(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    sellToUniswap3(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    sellToUniswap4(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    sellToUniswap5(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    sellToUniswap6(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  sellToUniswap(
    _1: string[],
    _2: BigNumberish,
    _3: BigNumberish,
    _4: boolean,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  sellToUniswap1(
    _1: string[],
    _2: BigNumberish,
    _3: BigNumberish,
    _4: boolean,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  sellToUniswap2(
    _1: string[],
    _2: BigNumberish,
    _3: BigNumberish,
    _4: boolean,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  sellToUniswap3(
    _1: string[],
    _2: BigNumberish,
    _3: BigNumberish,
    _4: boolean,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  sellToUniswap4(
    _1: string[],
    _2: BigNumberish,
    _3: BigNumberish,
    _4: boolean,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  sellToUniswap5(
    _1: string[],
    _2: BigNumberish,
    _3: BigNumberish,
    _4: boolean,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  sellToUniswap6(
    _1: string[],
    _2: BigNumberish,
    _3: BigNumberish,
    _4: boolean,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    sellToUniswap(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    sellToUniswap1(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    sellToUniswap2(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    sellToUniswap3(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    sellToUniswap4(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    sellToUniswap5(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    sellToUniswap6(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    sellToUniswap(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    sellToUniswap1(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    sellToUniswap2(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    sellToUniswap3(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    sellToUniswap4(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    sellToUniswap5(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    sellToUniswap6(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    sellToUniswap(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sellToUniswap1(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sellToUniswap2(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sellToUniswap3(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sellToUniswap4(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sellToUniswap5(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sellToUniswap6(
      _1: string[],
      _2: BigNumberish,
      _3: BigNumberish,
      _4: boolean,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
