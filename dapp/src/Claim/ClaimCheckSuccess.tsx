import React, { useContext } from "react"
import { Redirect, useHistory } from "react-router-dom"
import Modal from "../shared/components/Modal"
import ClaimHeader from "./shared/ClaimHeader"
import TahoAmount from "../shared/components/TahoAmount"
import iconConnected from "../shared/assets/icons/s/connected.svg"
import Button from "../shared/components/Button"
import ClaimCheckRules from "./shared/ClaimCheckRules"
import { ClaimContext } from "./hooks"
import { useConnect } from "../shared/hooks"

export default function ClaimCheckSuccess() {
  const location = useHistory()
  const { connect } = useConnect()
  const {
    userDetails: { name, isConnected },
    claimDetails: { eligibility },
  } = useContext(ClaimContext)

  if (!isConnected && !name) {
    return <Redirect to="/claim" />
  }

  return (
    <Modal.Container type="map-with-overlay">
      <Modal.Content>
        <div className="success_container column_center">
          <ClaimHeader
            season="Season 1"
            header="Congratulation!"
            subheader={
              <>
                <span style={{ color: "var(--semantic-info)" }}>{name}</span> is
                eligible to claim:
              </>
            }
          />
          <div className="success_amount_container column_center">
            <TahoAmount
              amount={eligibility.amount}
              hasBackground
              size="large"
            />
            <ClaimCheckRules />
          </div>

          <div className="button_container">
            <Button
              type="primary"
              size="large"
              isDisabled={isConnected}
              iconSrc={isConnected ? iconConnected : undefined}
              iconPosition="left"
              onClick={() => connect()}
            >
              {isConnected ? "Connected" : "Connect wallet"}
            </Button>
            <Button
              onClick={() => location.push("/claim/claiming")}
              isDisabled={!isConnected}
              type="primary"
              size="large"
            >
              Start claiming process
            </Button>
          </div>
        </div>
        <style jsx>
          {`
            .success_container {
              display: flex;
              flex-direction: column;
              padding: 40px 148px;
              gap: 40px;
            }
            .success_amount_container {
              width: 432px;
            }
            .button_container {
              width: 555px;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        </style>
      </Modal.Content>
    </Modal.Container>
  )
}
