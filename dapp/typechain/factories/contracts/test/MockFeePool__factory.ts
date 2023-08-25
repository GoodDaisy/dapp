/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockFeePool,
  MockFeePoolInterface,
} from "../../../contracts/test/MockFeePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "targetManagementFee_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FeeWithdrawal",
    type: "event",
  },
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "accruedFees",
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
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRate",
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
    inputs: [],
    name: "feeRateLastUpdated",
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
    inputs: [
      {
        internalType: "uint256",
        name: "targetManagementFee_",
        type: "uint256",
      },
    ],
    name: "setManagementFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sharesPerDepositedUnderlying",
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
    inputs: [],
    name: "targetManagementFee",
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
    inputs: [],
    name: "totalSupply",
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
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526107d0600355670de0b6b3a764000060065534801562000022575f80fd5b50604051620011013803806200110183398181016040528101906200004891906200017c565b620000686200005c6200007660201b60201c565b6200007d60201b60201c565b8060038190555050620001ac565b5f33905090565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f80fd5b5f819050919050565b620001588162000144565b811462000163575f80fd5b50565b5f8151905062000176816200014d565b92915050565b5f6020828403121562000194576200019362000140565b5b5f620001a38482850162000166565b91505092915050565b610f4780620001ba5f395ff3fe608060405234801561000f575f80fd5b50600436106100e8575f3560e01c8063978bbdb91161008a578063d957e4af11610064578063d957e4af146101ec578063dadd99711461020a578063f2fde38b14610228578063fe56e23214610244576100e8565b8063978bbdb914610194578063aee83727146101b2578063b6b55f25146101d0576100e8565b8063682c2058116100c6578063682c20581461011e57806370a082311461013c578063715018a61461016c5780638da5cb5b14610176576100e8565b806318160ddd146100ec5780633ccfd60b1461010a578063476343ee14610114575b5f80fd5b6100f4610260565b6040516101019190610b7a565b60405180910390f35b610112610266565b005b61011c6102ea565b005b610126610338565b6040516101339190610b7a565b60405180910390f35b61015660048036038101906101519190610bf1565b61033e565b6040516101639190610b7a565b60405180910390f35b610174610352565b005b61017e610365565b60405161018b9190610c2b565b60405180910390f35b61019c61038d565b6040516101a99190610b7a565b60405180910390f35b6101ba610393565b6040516101c79190610b7a565b60405180910390f35b6101ea60048036038101906101e59190610c6e565b610399565b005b6101f46103dc565b6040516102019190610b7a565b60405180910390f35b6102126103e2565b60405161021f9190610b7a565b60405180910390f35b610242600480360381019061023d9190610bf1565b6103e8565b005b61025e60048036038101906102599190610c6e565b61046a565b005b60015481565b5f805f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490506102b0338261047e565b7f4e70a604b23a8edee2b1d0a656e9b9c00b73ad8bb1afc2c59381ee9f69197de7816040516102df9190610b7a565b60405180910390a150565b6102f2610692565b5f6102fc33610710565b90507f706d7f48c702007c2fb0881cea5759732e64f52faee427d5ab030787cfb7d7878160405161032d9190610b7a565b60405180910390a150565b60025481565b5f602052805f5260405f205f915090505481565b61035a610692565b6103635f6107f5565b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60045481565b60055481565b7f4d6ce1e535dbade1c23defba91e23b8f791ce5edc0cc320257a2b364e4e384266103c433836108b8565b6040516103d19190610b7a565b60405180910390a150565b60065481565b60035481565b6103f0610692565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361045e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045590610d19565b60405180910390fd5b610467816107f5565b50565b610472610692565b61047b81610aa5565b50565b5f81116104c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b790610d5a565b60405180910390fd5b5f60055403610504576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fb90610d5a565b60405180910390fd5b5f60015411610548576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053f90610d5a565b60405180910390fd5b5f6301e133806005544261055c9190610da5565b6004546105699190610dd8565b6105739190610e46565b90508060025f8282546105869190610e76565b925050819055508060015f82825461059e9190610e76565b925050819055505f6001541180156105b7575080600154115b156105eb57806001546105ca9190610da5565b6001546006546105da9190610dd8565b6105e49190610e46565b6006819055505b815f808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546106369190610da5565b925050819055508160015f82825461064e9190610da5565b9250508190555042600581905550620186a06003546002546001546106739190610da5565b61067d9190610dd8565b6106879190610e46565b600481905550505050565b61069a610b5b565b73ffffffffffffffffffffffffffffffffffffffff166106b8610365565b73ffffffffffffffffffffffffffffffffffffffff161461070e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070590610ef3565b60405180910390fd5b565b5f806301e13380600554426107259190610da5565b6004546107329190610dd8565b61073c9190610e46565b90508060015f82825461074f9190610e76565b925050819055505f816002546107659190610e76565b9050805f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546107b29190610e76565b925050819055505f60028190555042600581905550620186a06003546001546107db9190610dd8565b6107e59190610e46565b6004819055508092505050919050565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f8082116108fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f290610d5a565b60405180910390fd5b5f80600554148061090d57505f600154145b8061091c575060015460025410155b1561094957670de0b6b3a7640000600654846109389190610dd8565b6109429190610e46565b90506109f9565b5f6301e133806005544261095d9190610da5565b60045461096a9190610dd8565b6109749190610e46565b90508060025f8282546109879190610e76565b925050819055508060015f82825461099f9190610e76565b92505081905550806001546109b49190610da5565b6001546006546109c49190610dd8565b6109ce9190610e46565b600681905550670de0b6b3a7640000600654856109eb9190610dd8565b6109f59190610e46565b9150505b805f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254610a449190610e76565b925050819055508060015f828254610a5c9190610e76565b9250508190555042600581905550620186a0600354600254600154610a819190610da5565b610a8b9190610dd8565b610a959190610e46565b6004819055508091505092915050565b5f6005541115610b0e575f6301e1338060055442610ac39190610da5565b600454610ad09190610dd8565b610ada9190610e46565b90508060025f828254610aed9190610e76565b925050819055508060015f828254610b059190610e76565b92505081905550505b806003819055505f6005541115610b585742600581905550620186a0600354600254600154610b3d9190610da5565b610b479190610dd8565b610b519190610e46565b6004819055505b50565b5f33905090565b5f819050919050565b610b7481610b62565b82525050565b5f602082019050610b8d5f830184610b6b565b92915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610bc082610b97565b9050919050565b610bd081610bb6565b8114610bda575f80fd5b50565b5f81359050610beb81610bc7565b92915050565b5f60208284031215610c0657610c05610b93565b5b5f610c1384828501610bdd565b91505092915050565b610c2581610bb6565b82525050565b5f602082019050610c3e5f830184610c1c565b92915050565b610c4d81610b62565b8114610c57575f80fd5b50565b5f81359050610c6881610c44565b92915050565b5f60208284031215610c8357610c82610b93565b5b5f610c9084828501610c5a565b91505092915050565b5f82825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f20615f8201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b5f610d03602683610c99565b9150610d0e82610ca9565b604082019050919050565b5f6020820190508181035f830152610d3081610cf7565b9050919050565b50565b5f610d455f83610c99565b9150610d5082610d37565b5f82019050919050565b5f6020820190508181035f830152610d7181610d3a565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610daf82610b62565b9150610dba83610b62565b9250828203905081811115610dd257610dd1610d78565b5b92915050565b5f610de282610b62565b9150610ded83610b62565b9250828202610dfb81610b62565b91508282048414831517610e1257610e11610d78565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f610e5082610b62565b9150610e5b83610b62565b925082610e6b57610e6a610e19565b5b828204905092915050565b5f610e8082610b62565b9150610e8b83610b62565b9250828201905080821115610ea357610ea2610d78565b5b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725f82015250565b5f610edd602083610c99565b9150610ee882610ea9565b602082019050919050565b5f6020820190508181035f830152610f0a81610ed1565b905091905056fea2646970667358221220587bfad3373e935fb347f71cecc3ccf348a489f7748805a08fcaf35920e7b3d564736f6c63430008150033";

type MockFeePoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockFeePoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockFeePool__factory extends ContractFactory {
  constructor(...args: MockFeePoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    targetManagementFee_: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<MockFeePool> {
    return super.deploy(
      targetManagementFee_,
      overrides || {}
    ) as Promise<MockFeePool>;
  }
  override getDeployTransaction(
    targetManagementFee_: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(targetManagementFee_, overrides || {});
  }
  override attach(address: string): MockFeePool {
    return super.attach(address) as MockFeePool;
  }
  override connect(signer: Signer): MockFeePool__factory {
    return super.connect(signer) as MockFeePool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFeePoolInterface {
    return new utils.Interface(_abi) as MockFeePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFeePool {
    return new Contract(address, _abi, signerOrProvider) as MockFeePool;
  }
}
