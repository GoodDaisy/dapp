import { IslandState } from "redux-state/slices/island"
import { ClaimState } from "redux-state/slices/claim"
import { WalletState } from "redux-state/slices/wallet"
import { RootState } from "redux-state/reducers"

type Selector<T, K extends keyof T> = (state: RootState) => T[K]

type IslandSelector<K extends keyof IslandState> = Selector<IslandState, K>
type ClaimSelector<K extends keyof ClaimState> = Selector<ClaimState, K>
type WalletSelector<K extends keyof WalletState> = Selector<WalletState, K>

export type CreateIslandSelector = <K extends keyof IslandState>(
  value: K
) => IslandSelector<K>

export type CreateClaimSelector = <K extends keyof ClaimState>(
  value: K
) => ClaimSelector<K>

export type CreateWalletSelector = <K extends keyof WalletState>(
  value: K
) => WalletSelector<K>
