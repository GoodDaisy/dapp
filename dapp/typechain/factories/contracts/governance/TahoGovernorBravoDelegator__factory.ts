/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TahoGovernorBravoDelegator,
  TahoGovernorBravoDelegatorInterface,
} from "../../../contracts/governance/TahoGovernorBravoDelegator";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldImplementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "NewImplementation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldPendingAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProposalCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ProposalQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldProposalThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newProposalThreshold",
        type: "uint256",
      },
    ],
    name: "ProposalThresholdSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "VoteCast",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldVotingDelay",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVotingDelay",
        type: "uint256",
      },
    ],
    name: "VotingDelaySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldVotingPeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVotingPeriod",
        type: "uint256",
      },
    ],
    name: "VotingPeriodSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "WhitelistAccountExpirationSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldGuardian",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newGuardian",
        type: "address",
      },
    ],
    name: "WhitelistGuardianSet",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    name: "_setImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
    name: "implementation",
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
    name: "pendingAdmin",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801562000010575f80fd5b503373ffffffffffffffffffffffffffffffffffffffff16637aadef8b6040518163ffffffff1660e01b81526004016020604051808303815f875af11580156200005c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620000829190620005d7565b3373ffffffffffffffffffffffffffffffffffffffff1663cbc7803a6040518163ffffffff1660e01b81526004016020604051808303815f875af1158015620000cd573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620000f3919062000649565b3373ffffffffffffffffffffffffffffffffffffffff16637aadef8b6040518163ffffffff1660e01b81526004016020604051808303815f875af11580156200013e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620001649190620005d7565b3373ffffffffffffffffffffffffffffffffffffffff1663b68099596040518163ffffffff1660e01b81526004016020604051808303815f875af1158015620001af573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620001d59190620005d7565b614380806a1f04ef12cb04cf15800000335f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620002cd84888886868660405160240162000244959493929190620006a4565b6040516020818303038152906040527fd13f90b4000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200032a60201b60201c565b620002de84620003ac60201b60201c565b845f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050505062000914565b5f808373ffffffffffffffffffffffffffffffffffffffff168360405162000353919062000773565b5f60405180830381855af49150503d805f81146200038d576040519150601f19603f3d011682016040523d82523d5f602084013e62000392565b606091505b50915091505f8203620003a6573d60208201fd5b50505050565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146200043c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000433906200080f565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620004ad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004a490620008c9565b60405180910390fd5b5f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a8160025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405162000566929190620008e9565b60405180910390a15050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620005a18262000576565b9050919050565b620005b38162000595565b8114620005be575f80fd5b50565b5f81519050620005d181620005a8565b92915050565b5f60208284031215620005ef57620005ee62000572565b5b5f620005fe84828501620005c1565b91505092915050565b5f620006138262000576565b9050919050565b620006258162000607565b811462000630575f80fd5b50565b5f8151905062000643816200061a565b92915050565b5f6020828403121562000661576200066062000572565b5b5f620006708482850162000633565b91505092915050565b620006848162000607565b82525050565b5f819050919050565b6200069e816200068a565b82525050565b5f60a082019050620006b95f83018862000679565b620006c8602083018762000679565b620006d7604083018662000693565b620006e6606083018562000693565b620006f5608083018462000693565b9695505050505050565b5f81519050919050565b5f81905092915050565b5f5b838110156200073257808201518184015260208101905062000715565b5f8484015250505050565b5f6200074982620006ff565b62000755818562000709565b93506200076781856020860162000713565b80840191505092915050565b5f6200078082846200073d565b915081905092915050565b5f82825260208201905092915050565b7f476f7665726e6f72427261766f44656c656761746f723a3a5f736574496d706c5f8201527f656d656e746174696f6e3a2061646d696e206f6e6c7900000000000000000000602082015250565b5f620007f76036836200078b565b915062000804826200079b565b604082019050919050565b5f6020820190508181035f8301526200082881620007e9565b9050919050565b7f476f7665726e6f72427261766f44656c656761746f723a3a5f736574496d706c5f8201527f656d656e746174696f6e3a20696e76616c696420696d706c656d656e7461746960208201527f6f6e206164647265737300000000000000000000000000000000000000000000604082015250565b5f620008b1604a836200078b565b9150620008be826200082f565b606082019050919050565b5f6020820190508181035f830152620008e281620008a3565b9050919050565b5f604082019050620008fe5f83018562000679565b6200090d602083018462000679565b9392505050565b61066f80620009225f395ff3fe608060405260043610610042575f3560e01c806326782247146100ea5780635c60da1b14610114578063bb913f411461013e578063f851a4401461016657610049565b3661004957005b5f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff165f366040516100929291906103f7565b5f60405180830381855af49150503d805f81146100ca576040519150601f19603f3d011682016040523d82523d5f602084013e6100cf565b606091505b505090506040513d5f823e815f81146100e6573d82f35b3d82fd5b3480156100f5575f80fd5b506100fe610190565b60405161010b919061044e565b60405180910390f35b34801561011f575f80fd5b506101286101b5565b604051610135919061044e565b60405180910390f35b348015610149575f80fd5b50610164600480360381019061015f9190610495565b6101da565b005b348015610171575f80fd5b5061017a610398565b604051610187919061044e565b60405180910390f35b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610267576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025e90610540565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036102d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cc906105f4565b60405180910390fd5b5f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a8160025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161038c929190610612565b60405180910390a15050565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f81905092915050565b828183375f83830152505050565b5f6103de83856103bb565b93506103eb8385846103c5565b82840190509392505050565b5f6104038284866103d3565b91508190509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6104388261040f565b9050919050565b6104488161042e565b82525050565b5f6020820190506104615f83018461043f565b92915050565b5f80fd5b6104748161042e565b811461047e575f80fd5b50565b5f8135905061048f8161046b565b92915050565b5f602082840312156104aa576104a9610467565b5b5f6104b784828501610481565b91505092915050565b5f82825260208201905092915050565b7f476f7665726e6f72427261766f44656c656761746f723a3a5f736574496d706c5f8201527f656d656e746174696f6e3a2061646d696e206f6e6c7900000000000000000000602082015250565b5f61052a6036836104c0565b9150610535826104d0565b604082019050919050565b5f6020820190508181035f8301526105578161051e565b9050919050565b7f476f7665726e6f72427261766f44656c656761746f723a3a5f736574496d706c5f8201527f656d656e746174696f6e3a20696e76616c696420696d706c656d656e7461746960208201527f6f6e206164647265737300000000000000000000000000000000000000000000604082015250565b5f6105de604a836104c0565b91506105e98261055e565b606082019050919050565b5f6020820190508181035f83015261060b816105d2565b9050919050565b5f6040820190506106255f83018561043f565b610632602083018461043f565b939250505056fea26469706673582212207368b5927cbe0694184d43232b65195af381f44cee3dd01d952a68cb2810aaae64736f6c63430008150033";

type TahoGovernorBravoDelegatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TahoGovernorBravoDelegatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TahoGovernorBravoDelegator__factory extends ContractFactory {
  constructor(...args: TahoGovernorBravoDelegatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<TahoGovernorBravoDelegator> {
    return super.deploy(overrides || {}) as Promise<TahoGovernorBravoDelegator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TahoGovernorBravoDelegator {
    return super.attach(address) as TahoGovernorBravoDelegator;
  }
  override connect(signer: Signer): TahoGovernorBravoDelegator__factory {
    return super.connect(signer) as TahoGovernorBravoDelegator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TahoGovernorBravoDelegatorInterface {
    return new utils.Interface(_abi) as TahoGovernorBravoDelegatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TahoGovernorBravoDelegator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TahoGovernorBravoDelegator;
  }
}
