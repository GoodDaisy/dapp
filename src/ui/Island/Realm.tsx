// Need to pass spring props to spring abstracted components
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import type Konva from "konva"
import { Group } from "react-konva"
import { animated, easings, useSpring } from "@react-spring/konva"

import { REALMS_COUNT } from "shared/constants"
import { useIslandContext } from "../../shared/hooks/island"

type RealmProps = {
  id: string
  imageLayer: HTMLCanvasElement
  path: string
  width: number
  color: string
  name: string
  height: number
  x: number
  y: number
  labelX: number
  labelY: number
  partnerLogo: HTMLImageElement
}

export default function Realm({
  path,
  width,
  height,
  x,
  y,
  id,
  color,
  name,
  imageLayer,
  labelX,
  labelY,
  partnerLogo,
}: RealmProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [, setIsSelected] = useState(false)
  const [partnerLogoTranslate, setPartnerLogoTranslate] = useState(0)

  const islandContext = useIslandContext()
  const groupRef = useRef<Konva.Group>(null)
  const pathRef = useRef<Konva.Path>(null)
  const textRef = useRef<Konva.Text>(null)
  const imageLayerRef = useRef<Konva.Image>(null)
  const overlayRef = useRef<Konva.Path>(null)
  const partnerLogoRef = useRef<Konva.Image>(null)

  const handleRealmClick = () => {
    setIsSelected((prev) => !prev)
    islandContext.current.onRealmClick(id)
  }

  useLayoutEffect(() => {
    const pathRealm = pathRef.current
    const group = groupRef.current
    const stage = pathRef.current?.getStage()
    if (!stage || !pathRealm || !group) return () => {}
    const defaultZ = group.zIndex()

    const handleHover = (evt: Konva.KonvaEventObject<MouseEvent>) => {
      if (evt.type === "mouseenter") {
        stage.container().style.cursor = "pointer"
        group.zIndex(REALMS_COUNT)
        setIsHovered(true)
      } else if (evt.type === "mouseleave") {
        stage.container().style.cursor = "default"
        group.zIndex(defaultZ)
        setIsHovered(false)
      }
    }

    pathRealm.on("mouseenter.hover mouseleave.hover", handleHover)

    return () => pathRealm.off(".hover")
  }, [])

  useEffect(() => {
    if (!textRef.current || !partnerLogoRef.current) return
    const textCenter = textRef.current.measureSize(name).width / 2
    const logoWidth = partnerLogoRef.current.getAttr("width")

    setPartnerLogoTranslate(textCenter - logoWidth * 1.7)
  }, [textRef, partnerLogoRef, name])

  const styles = useMemo(() => {
    const variants = {
      default: {
        image: {
          shadowOpacity: 0,
          shadowBlur: 40,
        },
        overlay: { opacity: 0 },
        text: {
          opacity: 0,
          x: x + labelX,
          y: y + labelY + 200,
        },
        pathRealm: {
          stroke: "#FFF",
          strokeWidth: 4,
        },
        partnerLogo: {
          opacity: 0,
          x: x + labelX + partnerLogoTranslate,
          y: y + labelY - 20,
        },
      },
      inactive: {
        image: {},
        overlay: {
          fill: "#1F3D3B",
          opacity: 0.4,
          globalCompositeOperation: "hard-light",
        },
        text: {
          opacity: 0,
        },
        pathRealm: {
          stroke: "#FFF",
        },
      },
      highlight: {
        image: {
          shadowColor: "#000",
          shadowOpacity: 1,
          shadowBlur: 40,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          shadowEnabled: true,
        },
        overlay: {
          fill: color,
          opacity: 0.7,
          globalCompositeOperation: "color",
        },
        text: {
          opacity: 1,
          x: x + labelX,
          y: y + labelY,
        },
        pathRealm: {
          stroke: color,
          strokeWidth: 10,
        },
        partnerLogo: {
          opacity: 1,
          x: x + labelX + partnerLogoTranslate,
          y: y + labelY - 220,
        },
      },
    }

    return variants
  }, [color, labelX, labelY, x, y, partnerLogoTranslate])

  const transitionConfig = {
    precision: 0.0001,
    duration: 200,
    easing: easings.easeOutCubic,
  }

  const [pathProps] = useSpring(() => {
    const destinationStyle = isHovered
      ? styles.highlight.pathRealm
      : styles.default.pathRealm

    return {
      from: styles.default.pathRealm,
      to: destinationStyle,
    }
  }, [isHovered])

  const [imageProps] = useSpring(() => {
    const destinationStyle = isHovered
      ? styles.highlight.image
      : styles.default.image

    return {
      from: styles.default.image,
      to: destinationStyle,
    }
  }, [isHovered])

  const [overlayProps] = useSpring(() => {
    const destinationStyle = isHovered
      ? styles.highlight.overlay
      : styles.default.overlay

    return {
      from: styles.default.overlay,
      to: destinationStyle,
    }
  }, [isHovered])

  const [textProps] = useSpring(() => {
    const destinationStyle = isHovered
      ? styles.highlight.text
      : styles.default.text

    return {
      from: styles.default.text,
      to: destinationStyle,
      config: transitionConfig,
    }
  }, [isHovered])

  const [partnerLogoProps] = useSpring(() => {
    const destinationStyle = isHovered
      ? styles.highlight.partnerLogo
      : styles.default.partnerLogo

    return {
      from: styles.default.partnerLogo,
      to: destinationStyle,
      config: transitionConfig,
    }
  }, [isHovered])

  return (
    <Group ref={groupRef}>
      {/* @ts-expect-error FIXME: @react-spring-types */}
      <animated.Image
        ref={imageLayerRef}
        listening={false}
        image={imageLayer}
        x={x}
        y={y}
        {...imageProps}
      />
      {/* This path is used to create the overlay effect */}
      <animated.Path
        ref={overlayRef}
        x={x}
        y={y}
        data={path}
        width={width}
        height={height}
        listening={false}
        {...overlayProps}
      />
      {/* This layer sets stroke and event handlers */}
      <animated.Path
        ref={pathRef}
        x={x}
        y={y}
        data={path}
        width={width}
        height={height}
        onClick={handleRealmClick}
        {...pathProps}
      />
      <animated.Text
        ref={textRef}
        text={name}
        listening={false}
        fontStyle="bold"
        fontSize={78}
        lineHeight={2}
        fontFamily="QuincyCF"
        fill="#fff"
        shadowColor="#000"
        shadowOpacity={1}
        shadowBlur={10}
        shadowOffsetX={5}
        shadowOffsetY={5}
        shadowEnabled
        {...textProps}
      />
      {/* This is the partner logo image */}
      <animated.Image
        ref={partnerLogoRef}
        listening={false}
        image={partnerLogo}
        scaleX={3.5}
        scaleY={3.5}
        {...partnerLogoProps}
      />
    </Group>
  )
}
