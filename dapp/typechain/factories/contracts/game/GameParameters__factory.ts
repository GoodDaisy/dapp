/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GameParameters,
  GameParametersInterface,
} from "../../../contracts/game/GameParameters";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newStakeLockTime",
        type: "uint256",
      },
    ],
    name: "StakeLockTimeUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeLockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newStakeLockTime",
        type: "uint256",
      },
    ],
    name: "updateStakeLockTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405262015180600155348015610016575f80fd5b5061003361002861003860201b60201c565b61003f60201b60201c565b610100565b5f33905090565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61059b8061010d5f395ff3fe608060405234801561000f575f80fd5b5060043610610055575f3560e01c806308262b4214610059578063246a1a4514610075578063715018a6146100935780638da5cb5b1461009d578063f2fde38b146100bb575b5f80fd5b610073600480360381019061006e919061035f565b6100d7565b005b61007d610120565b60405161008a9190610399565b60405180910390f35b61009b610126565b005b6100a5610139565b6040516100b291906103f1565b60405180910390f35b6100d560048036038101906100d09190610434565b610160565b005b6100df6101e2565b7f788228f6f4aac93c91c7223f681f08770a1df288f42ee450ce38dbc538095f468160405161010e9190610399565b60405180910390a18060018190555050565b60015481565b61012e6101e2565b6101375f610260565b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101686101e2565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101cd906104df565b60405180910390fd5b6101df81610260565b50565b6101ea610321565b73ffffffffffffffffffffffffffffffffffffffff16610208610139565b73ffffffffffffffffffffffffffffffffffffffff161461025e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025590610547565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f80fd5b5f819050919050565b61033e8161032c565b8114610348575f80fd5b50565b5f8135905061035981610335565b92915050565b5f6020828403121561037457610373610328565b5b5f6103818482850161034b565b91505092915050565b6103938161032c565b82525050565b5f6020820190506103ac5f83018461038a565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103db826103b2565b9050919050565b6103eb816103d1565b82525050565b5f6020820190506104045f8301846103e2565b92915050565b610413816103d1565b811461041d575f80fd5b50565b5f8135905061042e8161040a565b92915050565b5f6020828403121561044957610448610328565b5b5f61045684828501610420565b91505092915050565b5f82825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f20615f8201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b5f6104c960268361045f565b91506104d48261046f565b604082019050919050565b5f6020820190508181035f8301526104f6816104bd565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725f82015250565b5f61053160208361045f565b915061053c826104fd565b602082019050919050565b5f6020820190508181035f83015261055e81610525565b905091905056fea264697066735822122038d7651c469c068c6116e2f9f8459444ecc59c52e9bdb807fa02a391a6dd5b8a64736f6c63430008150033";

type GameParametersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GameParametersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GameParameters__factory extends ContractFactory {
  constructor(...args: GameParametersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<GameParameters> {
    return super.deploy(overrides || {}) as Promise<GameParameters>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GameParameters {
    return super.attach(address) as GameParameters;
  }
  override connect(signer: Signer): GameParameters__factory {
    return super.connect(signer) as GameParameters__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GameParametersInterface {
    return new utils.Interface(_abi) as GameParametersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GameParameters {
    return new Contract(address, _abi, signerOrProvider) as GameParameters;
  }
}
