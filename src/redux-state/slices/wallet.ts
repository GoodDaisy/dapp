import { createSlice } from "@reduxjs/toolkit"
import portrait from "shared/assets/portrait.png"
import { ETH_ADDRESS, TAHO_ADDRESS } from "shared/constants"
import { TokenBalances } from "shared/types"

export type WalletState = {
  isConnected: boolean
  address: string
  name: string
  avatar: string
  balances: TokenBalances
}

const initialState: WalletState = {
  isConnected: false,
  address: "",
  name: "",
  avatar: portrait,
  balances: {
    [TAHO_ADDRESS]: {
      symbol: "TAHO",
      balance: 0n,
    },
    [ETH_ADDRESS]: {
      symbol: "ETH",
      balance: 0n,
    },
  },
}

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    updateConnectedWallet: (
      immerState,
      {
        payload,
      }: { payload: { address: string; name?: string; avatar?: string } }
    ) => {
      immerState.isConnected = true
      immerState.address = payload.address || immerState.address
      immerState.name = payload.name || immerState.name || ""
      immerState.avatar = payload.avatar || immerState.avatar || portrait
    },
    updateDisconnectedWallet: (_) => initialState,
    updateBalances: (
      immerState,
      { payload: balances }: { payload: TokenBalances }
    ) => {
      immerState.balances = {
        ...immerState.balances,
        ...balances,
      }
    },
  },
})

export const {
  updateConnectedWallet,
  updateDisconnectedWallet,
  updateBalances,
} = walletSlice.actions

export default walletSlice.reducer
