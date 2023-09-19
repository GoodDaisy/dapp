import React from "react"
import Modal from "shared/components/Modal"
import {
  selectDisplayedRegionId,
  selectIsJoinRegionMapMode,
  useDappDispatch,
  useDappSelector,
} from "redux-state"
import classNames from "classnames"
import { useHistory } from "react-router-dom"
import { resetMap } from "redux-state/slices/map"
import { setSelectedRegionId } from "redux-state/slices/claim"
import { ROUTES } from "shared/constants"
import RegionHeader from "./RegionHeader"
import Button from "../Button"

export default function RegionModalContent({
  children,
  onClose,
}: {
  children: React.ReactNode
  onClose: () => void
}) {
  const isJoinRegionMode = useDappSelector(selectIsJoinRegionMapMode)
  const regionId = useDappSelector(selectDisplayedRegionId)

  const location = useHistory()
  const dispatch = useDappDispatch()

  if (!regionId) return null

  const handleClose = () => {
    onClose()
    dispatch(resetMap())
    dispatch(setSelectedRegionId(regionId))
    location.push(ROUTES.CLAIM.DETAILS_SIGN)
  }

  return (
    <Modal.Content>
      <div className="modal">
        <div
          className={classNames("modal_header", {
            row_end: isJoinRegionMode,
          })}
        >
          <RegionHeader />
          {isJoinRegionMode && (
            <div>
              <Button onClick={handleClose} type="primary" size="large">
                Choose this region
              </Button>
            </div>
          )}
        </div>
        <div
          className={classNames("modal_content", {
            dark: isJoinRegionMode,
          })}
        >
          {children}
        </div>
      </div>
      <style jsx>
        {`
          .modal {
            width: 755px;
          }

          .modal_header {
            padding: 36px 42px 0;
            margin-bottom: 24px;
          }

          .row_end {
            display: flex;
            align-items: end;
            gap: 16px;
          }

          .modal_content {
            padding: 0 42px 36px;
          }

          .dark {
            background-color: var(--primary-p1-100-60);
            border-radius: 0 0 16px 16px;
          }
        `}
      </style>
    </Modal.Content>
  )
}
