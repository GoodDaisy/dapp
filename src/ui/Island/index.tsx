import React, { useCallback, useEffect, useLayoutEffect, useState } from "react"
import { selectIsDefaultIslandMode } from "redux-state/selectors/island"
import RealmModal from "shared/components/RealmModal"
import backgroundImg from "public/dapp_island_bg.webp"
import { useValueRef, IslandContext, useAssistant } from "shared/hooks"
import {
  setDisplayedRealmId,
  useDappDispatch,
  useDappSelector,
} from "redux-state"
import InteractiveIsland from "./InteractiveIsland"
import RealmDetails from "./RealmDetails"
import Quests from "./RealmDetails/Quests"

const MemoizedInteractiveIsland = React.memo(InteractiveIsland)

export default function IslandWrapper() {
  const [assetsLoaded, setAssetsLoaded] = useState(false)

  useLayoutEffect(() => {
    const assets = [backgroundImg]
    let loaded = 0
    assets.forEach((asset) => {
      const img = new Image()
      img.src = asset
      img.onload = () => {
        loaded += 1
        if (loaded === assets.length) {
          setAssetsLoaded(true)
        }
      }
    })
  }, [])

  const [realmId, setRealmId] = useState<null | string>(null)

  const dispatch = useDappDispatch()

  const { updateAssistant, assistantVisible } = useAssistant()

  useEffect(() => {
    dispatch(setDisplayedRealmId(realmId))
  }, [dispatch, realmId])

  const contextRef = useValueRef(() => ({
    onRealmClick: (id: string) => {
      setRealmId(String(id))
      if (assistantVisible("welcome"))
        updateAssistant({ visible: false, type: "default" })
    },
  }))

  const isDefaultIslandMode = useDappSelector(selectIsDefaultIslandMode)

  const handleClose = useCallback(() => setRealmId(null), [])

  if (!assetsLoaded) {
    return null
  }

  return (
    <div className="island_container">
      <style jsx>
        {`
          .island_container {
            position: absolute;
            inset: 0;
            overflow: hidden;
            z-index: var(--z-island);
          }
        `}
      </style>
      <IslandContext.Provider value={contextRef}>
        <MemoizedInteractiveIsland />
        {realmId && (
          <RealmModal onClose={handleClose}>
            {isDefaultIslandMode ? (
              <RealmDetails onClose={handleClose} />
            ) : (
              // TODO: update if claim flow will be used
              <Quests />
            )}
          </RealmModal>
        )}
      </IslandContext.Provider>
    </div>
  )
}
