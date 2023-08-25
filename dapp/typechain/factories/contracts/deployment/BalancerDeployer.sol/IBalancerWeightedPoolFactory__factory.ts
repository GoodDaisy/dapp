/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBalancerWeightedPoolFactory,
  IBalancerWeightedPoolFactoryInterface,
} from "../../../../contracts/deployment/BalancerDeployer.sol/IBalancerWeightedPoolFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "normalizedWeights",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "rateProviders",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBalancerWeightedPoolFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IBalancerWeightedPoolFactoryInterface {
    return new utils.Interface(_abi) as IBalancerWeightedPoolFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBalancerWeightedPoolFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBalancerWeightedPoolFactory;
  }
}
