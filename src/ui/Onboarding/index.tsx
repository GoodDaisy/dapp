import React from "react"
import { useAssets, useConnect } from "shared/hooks"
import {
  useDappSelector,
  selectHasRelevantTokens,
  selectHasLoadedBalances,
} from "redux-state"
import FullPageLoader from "shared/components/FullPageLoader"
import Nav from "ui/Nav"
import portalBackground from "shared/assets/portal-background.mp4"
import Version from "shared/components/Version"
import ConnectWallet from "./ConnectWallet"
import JoinWaitlist from "./JoinWaitlist"
import EnterPortal from "./EnterPortal"
import OnboardingModalLoader from "./Loader"
import Teaser from "./Teaser"

function OnboardingModal() {
  const { isConnected } = useConnect()
  const hasBalances = useDappSelector(selectHasLoadedBalances)
  const hasRelevantTokens = useDappSelector(selectHasRelevantTokens)

  if (process.env.IS_COMING_SOON === "true") {
    return <Teaser />
  }

  if (!isConnected) {
    return <ConnectWallet />
  }

  if (!hasBalances) {
    return <OnboardingModalLoader />
  }

  if (hasRelevantTokens) {
    return <EnterPortal />
  }

  return <JoinWaitlist />
}

export default function Onboarding() {
  const assetsLoaded = useAssets([portalBackground])

  return (
    <>
      <FullPageLoader loaded={assetsLoaded} />
      <div className="onboarding">
        <OnboardingModal />
        <video className="onboarding_video" autoPlay muted loop playsInline>
          <source src={portalBackground} />
        </video>
        <div style={{ position: "absolute", right: 27, bottom: 4 }}>
          <Version />
        </div>
      </div>
      <Nav />
      <style jsx>{`
        .onboarding {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: relative;
        }
        .onboarding_video {
          position: absolute;
          height: 100%;
          width: 100%;
          inset: 0;
          object-fit: cover;
        }
      `}</style>
    </>
  )
}
