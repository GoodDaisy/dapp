import React from "react"
import { ISLAND_BOX, getRealmMapData } from "shared/constants"
import backgroundImg from "public/dapp_island_bg.webp"
import {
  selectDisplayedRealmId,
  selectIsStakingRealmDisplayed,
  selectWalletAvatar,
  useDappSelector,
} from "redux-state"
import RealmPin from "./RealmPin"
import Bubble from "./Bubble"

const CUTOUT_HEIGHT = 208
const CUTOUT_WIDTH = 356
const CUTOUT_RATIO = CUTOUT_HEIGHT / CUTOUT_WIDTH

export default function RealmCutout() {
  const realmId = useDappSelector(selectDisplayedRealmId)
  const isStakedRealm = useDappSelector(selectIsStakingRealmDisplayed)
  const walletAvatar = useDappSelector(selectWalletAvatar)

  if (!realmId) return null

  const pathData = getRealmMapData(realmId)
  const pathDataRatio = pathData.h / pathData.w

  const pathCutoutXref = `cutout_${realmId}_path`
  return (
    <>
      <div className="realm_cutout">
        <Bubble realmId={realmId} />
        {isStakedRealm && <RealmPin avatar={walletAvatar} />}
        <svg
          viewBox={`0 0 ${Math.ceil(pathData.w * 0.25)} ${Math.ceil(
            pathData.h * 0.25
          )}`}
          preserveAspectRatio="xMidYMid meet"
          style={{
            ...(pathDataRatio / CUTOUT_RATIO < 1
              ? { width: 356 }
              : { height: 208 }),
            filter:
              "drop-shadow(0px 2px 4px rgba(7, 17, 17, 0.34)) drop-shadow(0px 6px 8px rgba(7, 17, 17, 0.24)) drop-shadow(0px 16px 16px rgba(7, 17, 17, 0.30))",
          }}
        >
          <defs>
            <path
              id={pathCutoutXref}
              d={pathData.paths[0].data}
              width={pathData.w}
              height={pathData.h}
            />
            <mask id={`cutout_${realmId}`}>
              <use
                href={`#${pathCutoutXref}`}
                fill="#fff"
                transform={`translate(${pathData.x}, ${pathData.y})`}
              />
            </mask>
          </defs>
          <image
            transform={`scale(0.25) translate(-${pathData.x}, -${pathData.y})`}
            width={ISLAND_BOX.width}
            height={ISLAND_BOX.height}
            href={backgroundImg}
            mask={`url(#cutout_${realmId})`}
          />
          <use
            href={`#${pathCutoutXref}`}
            transform="scale(0.25)"
            fill="transparent"
            stroke={pathData.color}
            strokeWidth="10"
          />
          <use
            href={`#${pathCutoutXref}`}
            transform="scale(0.25)"
            fill={pathData.color}
            opacity={0.7}
            style={{ mixBlendMode: "color" }}
          />
        </svg>
      </div>
      <style jsx>
        {`
          .realm_cutout {
            position: relative;
            width: ${CUTOUT_WIDTH}px;
            height: ${CUTOUT_HEIGHT}px;
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  )
}
