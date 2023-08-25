/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalancerDeployer,
  BalancerDeployerInterface,
} from "../../../../contracts/deployment/BalancerDeployer.sol/BalancerDeployer";

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
    inputs: [],
    name: "deploy",
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
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b5061002c61002161003160201b60201c565b61003860201b60201c565b6100f9565b5f33905090565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61160f806101065f395ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c8063715018a61461004e578063775c300c146100585780638da5cb5b14610076578063f2fde38b14610094575b5f80fd5b6100566100b0565b005b6100606100c3565b60405161006d9190610bbb565b60405180910390f35b61007e610943565b60405161008b9190610bbb565b60405180910390f35b6100ae60048036038101906100a99190610c0f565b61096a565b005b6100b86109ec565b6100c15f610a6a565b565b5f6100cc6109ec565b5f3373ffffffffffffffffffffffffffffffffffffffff1663cbc7803a6040518163ffffffff1660e01b81526004016020604051808303815f875af1158015610117573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061013b9190610c4e565b90505f805f61015e847382af49447d8a07e3bd95bd0d56f35241523fbab1610b2b565b915091505f600267ffffffffffffffff81111561017e5761017d610c79565b5b6040519080825280602002602001820160405280156101ac5781602001602082028036833780820191505090505b50905082815f815181106101c3576101c2610ca6565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050818160018151811061021257610211610ca6565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505f600267ffffffffffffffff81111561026857610267610c79565b5b6040519080825280602002602001820160405280156102965781602001602082028036833780820191505090505b5090506706f05b59d3b20000815f815181106102b5576102b4610ca6565b5b6020026020010181815250506706f05b59d3b20000816001815181106102de576102dd610ca6565b5b6020026020010181815250505f600267ffffffffffffffff81111561030657610305610c79565b5b6040519080825280602002602001820160405280156103345781602001602082028036833780820191505090505b5090505f815f8151811061034b5761034a610ca6565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505f8160018151811061039a57610399610ca6565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505073c7e5ed1054a24ef31d827e6f86caa58b3bc168d773ffffffffffffffffffffffffffffffffffffffff16632182c8fe848484660aa87bee5380003373ffffffffffffffffffffffffffffffffffffffff16634db197986040518163ffffffff1660e01b81526004016020604051808303815f875af1158015610459573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061047d9190610c4e565b3373ffffffffffffffffffffffffffffffffffffffff16630632242b6040518163ffffffff1660e01b81526004016020604051808303815f875af11580156104c7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104eb9190610d06565b6040518763ffffffff1660e01b815260040161050c96959493929190610f20565b6020604051808303815f875af192505050801561054757506040513d601f19601f820116820180604052508101906105449190610c4e565b60015b6108c3575f3373ffffffffffffffffffffffffffffffffffffffff16635408c47a6040518163ffffffff1660e01b81526004016020604051808303815f875af1158015610596573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105ba9190610c4e565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361062a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062190611005565b60405180910390fd5b5f8173ffffffffffffffffffffffffffffffffffffffff166338fff2d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610674573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106989190610d06565b90505f73ba12222222228d8ba445958a75a0704d566bf2c873ffffffffffffffffffffffffffffffffffffffff1663f94d4668836040518263ffffffff1660e01b81526004016106e89190611023565b5f60405180830381865afa158015610702573d5f803e3d5ffd5b505050506040513d5f823e3d601f19601f8201168201806040525081019061072a9190611249565b505090508551815114610772576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076990611341565b60405180910390fd5b855f8151811061078557610784610ca6565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16815f815181106107b6576107b5610ca6565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614610814576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080b906113cf565b60405180910390fd5b8560018151811061082857610827610ca6565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168160018151811061085a57610859610ca6565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16146108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af9061145d565b60405180910390fd5b8298505050506108c8565b809650505b5f73ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1603610936576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092d906114c5565b60405180910390fd5b8597505050505050505090565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6109726109ec565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d790611553565b60405180910390fd5b6109e981610a6a565b50565b6109f4610b75565b73ffffffffffffffffffffffffffffffffffffffff16610a12610943565b73ffffffffffffffffffffffffffffffffffffffff1614610a68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5f906115bb565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610610b67578284610b6a565b83835b915091509250929050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610ba582610b7c565b9050919050565b610bb581610b9b565b82525050565b5f602082019050610bce5f830184610bac565b92915050565b5f604051905090565b5f80fd5b5f80fd5b610bee81610b9b565b8114610bf8575f80fd5b50565b5f81359050610c0981610be5565b92915050565b5f60208284031215610c2457610c23610bdd565b5b5f610c3184828501610bfb565b91505092915050565b5f81519050610c4881610be5565b92915050565b5f60208284031215610c6357610c62610bdd565b5b5f610c7084828501610c3a565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f819050919050565b610ce581610cd3565b8114610cef575f80fd5b50565b5f81519050610d0081610cdc565b92915050565b5f60208284031215610d1b57610d1a610bdd565b5b5f610d2884828501610cf2565b91505092915050565b5f82825260208201905092915050565b7f5441484f2d5745544800000000000000000000000000000000000000000000005f82015250565b5f610d75600983610d31565b9150610d8082610d41565b602082019050919050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b610dbd81610b9b565b82525050565b5f610dce8383610db4565b60208301905092915050565b5f602082019050919050565b5f610df082610d8b565b610dfa8185610d95565b9350610e0583610da5565b805f5b83811015610e35578151610e1c8882610dc3565b9750610e2783610dda565b925050600181019050610e08565b5085935050505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f819050919050565b610e7d81610e6b565b82525050565b5f610e8e8383610e74565b60208301905092915050565b5f602082019050919050565b5f610eb082610e42565b610eba8185610e4c565b9350610ec583610e5c565b805f5b83811015610ef5578151610edc8882610e83565b9750610ee783610e9a565b925050600181019050610ec8565b5085935050505092915050565b610f0b81610e6b565b82525050565b610f1a81610cd3565b82525050565b5f610100820190508181035f830152610f3881610d69565b90508181036020830152610f4b81610d69565b90508181036040830152610f5f8189610de6565b90508181036060830152610f738188610ea6565b90508181036080830152610f878187610de6565b9050610f9660a0830186610f02565b610fa360c0830185610bac565b610fb060e0830184610f11565b979650505050505050565b7f43616e64696461746520706f6f6c206e6f7420736574000000000000000000005f82015250565b5f610fef601683610d31565b9150610ffa82610fbb565b602082019050919050565b5f6020820190508181035f83015261101c81610fe3565b9050919050565b5f6020820190506110365f830184610f11565b92915050565b5f80fd5b5f601f19601f8301169050919050565b61105982611040565b810181811067ffffffffffffffff8211171561107857611077610c79565b5b80604052505050565b5f61108a610bd4565b90506110968282611050565b919050565b5f67ffffffffffffffff8211156110b5576110b4610c79565b5b602082029050602081019050919050565b5f80fd5b5f6110dc6110d78461109b565b611081565b905080838252602082019050602084028301858111156110ff576110fe6110c6565b5b835b8181101561112857806111148882610c3a565b845260208401935050602081019050611101565b5050509392505050565b5f82601f8301126111465761114561103c565b5b81516111568482602086016110ca565b91505092915050565b5f67ffffffffffffffff82111561117957611178610c79565b5b602082029050602081019050919050565b61119381610e6b565b811461119d575f80fd5b50565b5f815190506111ae8161118a565b92915050565b5f6111c66111c18461115f565b611081565b905080838252602082019050602084028301858111156111e9576111e86110c6565b5b835b8181101561121257806111fe88826111a0565b8452602084019350506020810190506111eb565b5050509392505050565b5f82601f8301126112305761122f61103c565b5b81516112408482602086016111b4565b91505092915050565b5f805f606084860312156112605761125f610bdd565b5b5f84015167ffffffffffffffff81111561127d5761127c610be1565b5b61128986828701611132565b935050602084015167ffffffffffffffff8111156112aa576112a9610be1565b5b6112b68682870161121c565b92505060406112c7868287016111a0565b9150509250925092565b7f43616e64696461746520706f6f6c2068617320646966666572656e74206e756d5f8201527f626572206f6620746f6b656e7300000000000000000000000000000000000000602082015250565b5f61132b602d83610d31565b9150611336826112d1565b604082019050919050565b5f6020820190508181035f8301526113588161131f565b9050919050565b7f43616e64696461746520706f6f6c2068617320646966666572656e74204120745f8201527f6f6b656e00000000000000000000000000000000000000000000000000000000602082015250565b5f6113b9602483610d31565b91506113c48261135f565b604082019050919050565b5f6020820190508181035f8301526113e6816113ad565b9050919050565b7f43616e64696461746520706f6f6c2068617320646966666572656e74204220745f8201527f6f6b656e00000000000000000000000000000000000000000000000000000000602082015250565b5f611447602483610d31565b9150611452826113ed565b604082019050919050565b5f6020820190508181035f8301526114748161143b565b9050919050565b7f5441484f2f45544820706f6f6c206e6f74206465706c6f7965642e00000000005f82015250565b5f6114af601b83610d31565b91506114ba8261147b565b602082019050919050565b5f6020820190508181035f8301526114dc816114a3565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f20615f8201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b5f61153d602683610d31565b9150611548826114e3565b604082019050919050565b5f6020820190508181035f83015261156a81611531565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725f82015250565b5f6115a5602083610d31565b91506115b082611571565b602082019050919050565b5f6020820190508181035f8301526115d281611599565b905091905056fea264697066735822122015db22c7b17227778c91f7c501efee24529dfbdba019a212ce1c3761f80be1d264736f6c63430008150033";

type BalancerDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerDeployer__factory extends ContractFactory {
  constructor(...args: BalancerDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<BalancerDeployer> {
    return super.deploy(overrides || {}) as Promise<BalancerDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BalancerDeployer {
    return super.attach(address) as BalancerDeployer;
  }
  override connect(signer: Signer): BalancerDeployer__factory {
    return super.connect(signer) as BalancerDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerDeployerInterface {
    return new utils.Interface(_abi) as BalancerDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerDeployer {
    return new Contract(address, _abi, signerOrProvider) as BalancerDeployer;
  }
}
