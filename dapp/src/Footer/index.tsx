import React from "react"
import IconLink from "../shared/IconLink"
import Link from "../shared/Link"
import discordIcon from "../shared/assets/icons/discord.svg"
import twitterIcon from "../shared/assets/icons/twitter.svg"
import githubIcon from "../shared/assets/icons/github.svg"

const ICON_SIZE = "18px"

export default function Footer() {
  return (
    <footer>
      <style jsx>{`
        footer {
          position: absolute;
          bottom: 0;
          display: flex;
          align-items: center;
          z-index: 1;
        }
      `}</style>
      <IconLink
        href="https://chat.taho.xyz"
        icon={{
          width: ICON_SIZE,
          height: ICON_SIZE,
          src: discordIcon,
        }}
      />
      <IconLink
        href="https://twitter.com/taho_xyz"
        icon={{
          width: ICON_SIZE,
          height: ICON_SIZE,
          src: twitterIcon,
        }}
      />
      <IconLink
        href="https://github.com/tahowallet/extension"
        icon={{
          width: ICON_SIZE,
          height: ICON_SIZE,
          src: githubIcon,
        }}
      />
      <Link to="/rulebook">Rulebook</Link>
    </footer>
  )
}