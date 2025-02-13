import React, { useEffect } from "react"
import Icon from "shared/components/Icon"
import assistantImage from "shared/assets/assistant.png"
import Portal from "shared/components/Portal"
import { useAssistant } from "shared/hooks"
import AssistantWelcome from "./AssistantContent/AssistantWelcome"
import AssistantQuests from "./AssistantContent/AssistantQuests"
import AssistantJoin from "./AssistantContent/AssistantJoin"
import AssistantFirstRealm from "./AssistantContent/AssistantFirstRealm"

export default function Assistant() {
  const { assistant, updateAssistant } = useAssistant()

  useEffect(() => {
    if (!assistant) updateAssistant({ visible: true, type: "welcome" })
  }, [assistant, updateAssistant])

  if (!assistant) return null

  return (
    <>
      <Portal>
        <div className="assistant">
          <div className="assistant_trigger">
            <Icon
              src={assistantImage}
              width="62px"
              height="62px"
              type="image"
              color="currentColor"
              onClick={() =>
                updateAssistant({
                  visible: !assistant.visible,
                  type: "default",
                })
              }
            />
          </div>
          <AssistantWelcome />
          <AssistantQuests />
          <AssistantJoin />
          <AssistantFirstRealm />
        </div>
      </Portal>
      <style jsx>{`
        .assistant {
          position: absolute;
          bottom: 25px;
          right: 25px;
          z-index: var(--z-assistant-icon);
        }
        .assistant_trigger {
          cursor: pointer;
          position: relative;
        }
        .assistant_trigger::before {
          content: "";
          position: absolute;
          height: 54px;
          width: 54px;
          left: 7%;
          top: 6%;
          background: #043937;
          z-index: -1;
          border-radius: 7px;
          transform: rotate(45deg);
        }
      `}</style>
    </>
  )
}
