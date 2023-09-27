import React from "react"
import Portal from "shared/components/Portal"
import ZoomControls from "./ZoomControls"
import MapControl from "./MapControl"

export default function Controls() {
  return (
    <>
      <Portal>
        <div className="controls column_center">
          <ZoomControls />
          <MapControl />
        </div>
      </Portal>
      <style jsx>
        {`
          .controls {
            position: absolute;
            left: 35px;
            bottom: 72px;
            z-index: var(--z-controls);
            gap: 5px;
          }
        `}
      </style>
    </>
  )
}
