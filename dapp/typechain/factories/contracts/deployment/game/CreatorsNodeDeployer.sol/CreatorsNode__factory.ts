/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CreatorsNode,
  CreatorsNodeInterface,
} from "../../../../../contracts/deployment/game/CreatorsNodeDeployer.sol/CreatorsNode";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract GameParameters",
        name: "_gameParameters",
        type: "address",
      },
      {
        internalType: "contract Taho",
        name: "_taho",
        type: "address",
      },
      {
        internalType: "contract VeTaho",
        name: "_veTaho",
        type: "address",
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
        internalType: "string",
        name: "newName",
        type: "string",
      },
    ],
    name: "NameUpdated",
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
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unlockAt",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unstaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "newXpFunctionHash",
        type: "bytes32",
      },
    ],
    name: "XpFunctionUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "newXpFunctionHash",
        type: "bytes32",
      },
    ],
    name: "commitXpFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gameParameters",
    outputs: [
      {
        internalType: "contract GameParameters",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "stakeUnlockTime",
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
    name: "taho",
    outputs: [
      {
        internalType: "contract Taho",
        name: "",
        type: "address",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newName",
        type: "string",
      },
    ],
    name: "updateName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "veTaho",
    outputs: [
      {
        internalType: "contract VeTaho",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "xpFunctionHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405234801562000010575f80fd5b506040516200210e3803806200210e83398181016040528101906200003691906200030e565b6040518060400160405280600d81526020017f43726561746f7273204e6f6465000000000000000000000000000000000000008152508383836200008f620000836200014a60201b60201c565b6200015160201b60201c565b8360019081620000a09190620005cb565b508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505050505050505050620006af565b5f33905090565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620002418262000216565b9050919050565b5f620002548262000235565b9050919050565b620002668162000248565b811462000271575f80fd5b50565b5f8151905062000284816200025b565b92915050565b5f620002968262000235565b9050919050565b620002a8816200028a565b8114620002b3575f80fd5b50565b5f81519050620002c6816200029d565b92915050565b5f620002d88262000235565b9050919050565b620002ea81620002cc565b8114620002f5575f80fd5b50565b5f815190506200030881620002df565b92915050565b5f805f6060848603121562000328576200032762000212565b5b5f620003378682870162000274565b93505060206200034a86828701620002b6565b92505060406200035d86828701620002f8565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680620003e357607f821691505b602082108103620003f957620003f86200039e565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026200045d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000420565b62000469868362000420565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f620004b3620004ad620004a78462000481565b6200048a565b62000481565b9050919050565b5f819050919050565b620004ce8362000493565b620004e6620004dd82620004ba565b8484546200042c565b825550505050565b5f90565b620004fc620004ee565b62000509818484620004c3565b505050565b5b818110156200053057620005245f82620004f2565b6001810190506200050f565b5050565b601f8211156200057f576200054981620003ff565b620005548462000411565b8101602085101562000564578190505b6200057c620005738562000411565b8301826200050e565b50505b505050565b5f82821c905092915050565b5f620005a15f198460080262000584565b1980831691505092915050565b5f620005bb838362000590565b9150826002028217905092915050565b620005d68262000367565b67ffffffffffffffff811115620005f257620005f162000371565b5b620005fe8254620003cb565b6200060b82828562000534565b5f60209050601f83116001811462000641575f84156200062c578287015190505b620006388582620005ae565b865550620006a7565b601f1984166200065186620003ff565b5f5b828110156200067a5784890151825560018201915060208501945060208101905062000653565b868310156200069a578489015162000696601f89168262000590565b8355505b6001600288020188555050505b505050505050565b60805160a05160c051611a0a620007045f395f818161024d015281816103d001528181610417015261072a01525f81816104a2015281816104eb01526106e301525f81816105b101526107bc0152611a0a5ff3fe608060405234801561000f575f80fd5b50600436106100cd575f3560e01c80638da5cb5b1161008a578063c1ceef6111610064578063c1ceef61146101d7578063dd878ab7146101f5578063f0cea98e14610213578063f2fde38b1461022f576100cd565b80638da5cb5b1461016d5780638dfb2dbc1461018b578063a694fc3a146101bb576100cd565b806301d5f742146100d157806306fdde03146100ef5780632e17de781461010d57806339cb745a14610129578063715018a61461014757806384da92a714610151575b5f80fd5b6100d961024b565b6040516100e69190610e03565b60405180910390f35b6100f761026f565b6040516101049190610ea6565b60405180910390f35b61012760048036038101906101229190610f0a565b6102fb565b005b6101316104e9565b60405161013e9190610f55565b60405180910390f35b61014f61050d565b005b61016b6004803603810190610166919061109a565b610520565b005b610175610572565b6040516101829190611101565b60405180910390f35b6101a560048036038101906101a09190611144565b610599565b6040516101b2919061117e565b60405180910390f35b6101d560048036038101906101d09190610f0a565b6105ae565b005b6101df6107b4565b6040516101ec91906111af565b60405180910390f35b6101fd6107ba565b60405161020a91906111e8565b60405180910390f35b61022d6004803603810190610228919061122b565b6107de565b005b61024960048036038101906102449190611144565b610827565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b6001805461027c90611283565b80601f01602080910402602001604051908101604052809291908181526020018280546102a890611283565b80156102f35780601f106102ca576101008083540402835291602001916102f3565b820191905f5260205f20905b8154815290600101906020018083116102d657829003601f168201915b505050505081565b3373ffffffffffffffffffffffffffffffffffffffff167f0f5bb82176feb1b5e747e28471aa92156a04d9f3ab9f45f28e2d704232b93f7582604051610341919061117e565b60405180910390a260035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205442116103c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bf906112fd565b60405180910390fd5b6104153330837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108a9909392919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166342966c68826040518263ffffffff1660e01b815260040161046e919061117e565b5f604051808303815f87803b158015610485575f80fd5b505af1158015610497573d5f803e3d5ffd5b505050506104e633827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166109329092919063ffffffff16565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b6105156109b8565b61051e5f610a36565b565b6105286109b8565b806001908161053791906114af565b507f9f7688a97f1ac51fe03bac18af18d6810f9f11f0db08c59b1938a9ac825ef744816040516105679190610ea6565b60405180910390a150565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6003602052805f5260405f205f915090505481565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663246a1a456040518163ffffffff1660e01b8152600401602060405180830381865afa158015610618573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061063c9190611592565b4261064791906115ea565b90503373ffffffffffffffffffffffffffffffffffffffff167f1449c6dd7851abc30abf37f57715f492010519147cc2652fbc38202c18a6ee90838360405161069192919061161d565b60405180910390a28060035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055506107283330847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108a9909392919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166340c10f1933846040518363ffffffff1660e01b8152600401610783929190611644565b5f604051808303815f87803b15801561079a575f80fd5b505af11580156107ac573d5f803e3d5ffd5b505050505050565b60025481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6107e66109b8565b806002819055507fc84a681d065b92da880c767950bceb2b3de7d2237f2e1cca5ad8af9a272081848160405161081c91906111af565b60405180910390a150565b61082f6109b8565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361089d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610894906116db565b60405180910390fd5b6108a681610a36565b50565b61092c846323b872dd60e01b8585856040516024016108ca939291906116f9565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610af7565b50505050565b6109b38363a9059cbb60e01b8484604051602401610951929190611644565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610af7565b505050565b6109c0610bbd565b73ffffffffffffffffffffffffffffffffffffffff166109de610572565b73ffffffffffffffffffffffffffffffffffffffff1614610a34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2b90611778565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f610b58826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610bc49092919063ffffffff16565b90505f81511480610b79575080806020019051810190610b7891906117cb565b5b610bb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610baf90611866565b60405180910390fd5b505050565b5f33905090565b6060610bd284845f85610bdb565b90509392505050565b606082471015610c20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c17906118f4565b60405180910390fd5b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051610c489190611956565b5f6040518083038185875af1925050503d805f8114610c82576040519150601f19603f3d011682016040523d82523d5f602084013e610c87565b606091505b5091509150610c9887838387610ca4565b92505050949350505050565b60608315610d05575f835103610cfd57610cbd85610d18565b610cfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf3906119b6565b60405180910390fd5b5b829050610d10565b610d0f8383610d3a565b5b949350505050565b5f808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b5f82511115610d4c5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d809190610ea6565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f610dcb610dc6610dc184610d89565b610da8565b610d89565b9050919050565b5f610ddc82610db1565b9050919050565b5f610ded82610dd2565b9050919050565b610dfd81610de3565b82525050565b5f602082019050610e165f830184610df4565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610e53578082015181840152602081019050610e38565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610e7882610e1c565b610e828185610e26565b9350610e92818560208601610e36565b610e9b81610e5e565b840191505092915050565b5f6020820190508181035f830152610ebe8184610e6e565b905092915050565b5f604051905090565b5f80fd5b5f80fd5b5f819050919050565b610ee981610ed7565b8114610ef3575f80fd5b50565b5f81359050610f0481610ee0565b92915050565b5f60208284031215610f1f57610f1e610ecf565b5b5f610f2c84828501610ef6565b91505092915050565b5f610f3f82610dd2565b9050919050565b610f4f81610f35565b82525050565b5f602082019050610f685f830184610f46565b92915050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610fac82610e5e565b810181811067ffffffffffffffff82111715610fcb57610fca610f76565b5b80604052505050565b5f610fdd610ec6565b9050610fe98282610fa3565b919050565b5f67ffffffffffffffff82111561100857611007610f76565b5b61101182610e5e565b9050602081019050919050565b828183375f83830152505050565b5f61103e61103984610fee565b610fd4565b90508281526020810184848401111561105a57611059610f72565b5b61106584828561101e565b509392505050565b5f82601f83011261108157611080610f6e565b5b813561109184826020860161102c565b91505092915050565b5f602082840312156110af576110ae610ecf565b5b5f82013567ffffffffffffffff8111156110cc576110cb610ed3565b5b6110d88482850161106d565b91505092915050565b5f6110eb82610d89565b9050919050565b6110fb816110e1565b82525050565b5f6020820190506111145f8301846110f2565b92915050565b611123816110e1565b811461112d575f80fd5b50565b5f8135905061113e8161111a565b92915050565b5f6020828403121561115957611158610ecf565b5b5f61116684828501611130565b91505092915050565b61117881610ed7565b82525050565b5f6020820190506111915f83018461116f565b92915050565b5f819050919050565b6111a981611197565b82525050565b5f6020820190506111c25f8301846111a0565b92915050565b5f6111d282610dd2565b9050919050565b6111e2816111c8565b82525050565b5f6020820190506111fb5f8301846111d9565b92915050565b61120a81611197565b8114611214575f80fd5b50565b5f8135905061122581611201565b92915050565b5f602082840312156112405761123f610ecf565b5b5f61124d84828501611217565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061129a57607f821691505b6020821081036112ad576112ac611256565b5b50919050565b7f5374616b65206c6f636b2074696d65206e6f74207061737365642079657400005f82015250565b5f6112e7601e83610e26565b91506112f2826112b3565b602082019050919050565b5f6020820190508181035f830152611314816112db565b9050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026113777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261133c565b611381868361133c565b95508019841693508086168417925050509392505050565b5f6113b36113ae6113a984610ed7565b610da8565b610ed7565b9050919050565b5f819050919050565b6113cc83611399565b6113e06113d8826113ba565b848454611348565b825550505050565b5f90565b6113f46113e8565b6113ff8184846113c3565b505050565b5b81811015611422576114175f826113ec565b600181019050611405565b5050565b601f821115611467576114388161131b565b6114418461132d565b81016020851015611450578190505b61146461145c8561132d565b830182611404565b50505b505050565b5f82821c905092915050565b5f6114875f198460080261146c565b1980831691505092915050565b5f61149f8383611478565b9150826002028217905092915050565b6114b882610e1c565b67ffffffffffffffff8111156114d1576114d0610f76565b5b6114db8254611283565b6114e6828285611426565b5f60209050601f831160018114611517575f8415611505578287015190505b61150f8582611494565b865550611576565b601f1984166115258661131b565b5f5b8281101561154c57848901518255600182019150602085019450602081019050611527565b868310156115695784890151611565601f891682611478565b8355505b6001600288020188555050505b505050505050565b5f8151905061158c81610ee0565b92915050565b5f602082840312156115a7576115a6610ecf565b5b5f6115b48482850161157e565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6115f482610ed7565b91506115ff83610ed7565b9250828201905080821115611617576116166115bd565b5b92915050565b5f6040820190506116305f83018561116f565b61163d602083018461116f565b9392505050565b5f6040820190506116575f8301856110f2565b611664602083018461116f565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f20615f8201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b5f6116c5602683610e26565b91506116d08261166b565b604082019050919050565b5f6020820190508181035f8301526116f2816116b9565b9050919050565b5f60608201905061170c5f8301866110f2565b61171960208301856110f2565b611726604083018461116f565b949350505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725f82015250565b5f611762602083610e26565b915061176d8261172e565b602082019050919050565b5f6020820190508181035f83015261178f81611756565b9050919050565b5f8115159050919050565b6117aa81611796565b81146117b4575f80fd5b50565b5f815190506117c5816117a1565b92915050565b5f602082840312156117e0576117df610ecf565b5b5f6117ed848285016117b7565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e5f8201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b5f611850602a83610e26565b915061185b826117f6565b604082019050919050565b5f6020820190508181035f83015261187d81611844565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f5f8201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b5f6118de602683610e26565b91506118e982611884565b604082019050919050565b5f6020820190508181035f83015261190b816118d2565b9050919050565b5f81519050919050565b5f81905092915050565b5f61193082611912565b61193a818561191c565b935061194a818560208601610e36565b80840191505092915050565b5f6119618284611926565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000005f82015250565b5f6119a0601d83610e26565b91506119ab8261196c565b602082019050919050565b5f6020820190508181035f8301526119cd81611994565b905091905056fea26469706673582212208e44dae926b06be2d54492d3af21d3568a4c7624cc140f63ec4190a92c1ac47164736f6c63430008150033";

type CreatorsNodeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreatorsNodeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreatorsNode__factory extends ContractFactory {
  constructor(...args: CreatorsNodeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _gameParameters: string,
    _taho: string,
    _veTaho: string,
    overrides?: Overrides & { from?: string }
  ): Promise<CreatorsNode> {
    return super.deploy(
      _gameParameters,
      _taho,
      _veTaho,
      overrides || {}
    ) as Promise<CreatorsNode>;
  }
  override getDeployTransaction(
    _gameParameters: string,
    _taho: string,
    _veTaho: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _gameParameters,
      _taho,
      _veTaho,
      overrides || {}
    );
  }
  override attach(address: string): CreatorsNode {
    return super.attach(address) as CreatorsNode;
  }
  override connect(signer: Signer): CreatorsNode__factory {
    return super.connect(signer) as CreatorsNode__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreatorsNodeInterface {
    return new utils.Interface(_abi) as CreatorsNodeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreatorsNode {
    return new Contract(address, _abi, signerOrProvider) as CreatorsNode;
  }
}
