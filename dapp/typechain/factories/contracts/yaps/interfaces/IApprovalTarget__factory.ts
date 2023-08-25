/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IApprovalTarget,
  IApprovalTargetInterface,
} from "../../../../contracts/yaps/interfaces/IApprovalTarget";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permitAndTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IApprovalTarget__factory {
  static readonly abi = _abi;
  static createInterface(): IApprovalTargetInterface {
    return new utils.Interface(_abi) as IApprovalTargetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IApprovalTarget {
    return new Contract(address, _abi, signerOrProvider) as IApprovalTarget;
  }
}
