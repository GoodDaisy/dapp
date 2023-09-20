import React from "react"
import {
  selectStakingRegionId,
  useDappSelector,
  selectDisplayedRegionId,
  selectWalletAvatar,
} from "redux-state"

export default function RegionPin() {
  const stakingRegionId = useDappSelector(selectStakingRegionId)
  const displayedRegionId = useDappSelector(selectDisplayedRegionId)
  const avatar = useDappSelector(selectWalletAvatar)

  if (stakingRegionId !== displayedRegionId) return null

  return (
    <>
      <div className="region_pin">
        <img src={avatar} height={60} width={60} alt="Avatar" />
        <svg
          width="108"
          height="92"
          viewBox="0 0 108 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.78">
            <g filter="url(#filter0_f_3690_38539)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.939 87.1851C45.9681 87.1834 45.9996 87.1832 46.0339 87.1846C53.7025 87.4996 63.1752 87.413 72.7227 86.8495C92.2052 85.6997 104.622 82.9995 100.456 80.8184C96.2894 78.6373 77.1184 77.8012 57.6359 78.951C48.107 79.5134 40.2684 80.4467 35.2337 81.5087C35.2051 81.5147 35.1733 81.5192 35.138 81.5223V81.5223C35.0993 81.5256 35.0644 81.5308 35.0338 81.5377L22.3013 84.4299C20.741 84.7844 23.2763 86.1117 25.7373 86.2288L45.8361 87.1852C45.8732 87.187 45.9078 87.1869 45.939 87.1851V87.1851Z"
                fill="url(#paint0_linear_3690_38539)"
              />
            </g>
            <g opacity="0.7" filter="url(#filter1_f_3690_38539)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.939 87.1851C45.9681 87.1834 45.9996 87.1832 46.0339 87.1846C53.7025 87.4996 63.1752 87.413 72.7227 86.8495C92.2052 85.6997 104.622 82.9995 100.456 80.8184C96.2894 78.6373 77.1184 77.8012 57.6359 78.951C48.107 79.5134 40.2684 80.4467 35.2337 81.5087C35.2051 81.5147 35.1733 81.5192 35.138 81.5223V81.5223C35.0993 81.5256 35.0644 81.5308 35.0338 81.5377L22.3013 84.4299C20.741 84.7844 23.2763 86.1117 25.7373 86.2288L45.8361 87.1852C45.8732 87.187 45.9078 87.1869 45.939 87.1851V87.1851Z"
                fill="url(#paint1_linear_3690_38539)"
              />
            </g>
            <g opacity="0.7" filter="url(#filter2_f_3690_38539)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.939 87.1851C45.9681 87.1834 45.9996 87.1832 46.0339 87.1846C53.7025 87.4996 63.1752 87.413 72.7227 86.8495C92.2052 85.6997 104.622 82.9995 100.456 80.8184C96.2894 78.6373 77.1184 77.8012 57.6359 78.951C48.107 79.5134 40.2684 80.4467 35.2337 81.5087C35.2051 81.5147 35.1733 81.5192 35.138 81.5223V81.5223C35.0993 81.5256 35.0644 81.5308 35.0338 81.5377L22.3013 84.4299C20.741 84.7844 23.2763 86.1117 25.7373 86.2288L45.8361 87.1852C45.8732 87.187 45.9078 87.1869 45.939 87.1851V87.1851Z"
                fill="url(#paint2_linear_3690_38539)"
              />
            </g>
            <path
              opacity="0.7"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.939 87.1851C45.9681 87.1834 45.9996 87.1832 46.0339 87.1846C53.7025 87.4996 63.1752 87.413 72.7227 86.8495C92.2052 85.6997 104.622 82.9995 100.456 80.8184C96.2894 78.6373 77.1184 77.8012 57.6359 78.951C48.107 79.5134 40.2684 80.4467 35.2337 81.5087C35.2051 81.5147 35.1733 81.5192 35.138 81.5223V81.5223C35.0993 81.5256 35.0644 81.5308 35.0338 81.5377L22.3013 84.4299C20.741 84.7844 23.2763 86.1117 25.7373 86.2288L45.8361 87.1852C45.8732 87.187 45.9078 87.1869 45.939 87.1851V87.1851Z"
              fill="url(#paint3_linear_3690_38539)"
            />
          </g>
          <path
            d="M55.248 69.8119C55.2566 69.7832 55.2762 69.759 55.3024 69.7444C63.4652 65.2073 69.939 57.6116 72.8481 47.964C78.7812 28.2877 67.6402 7.52731 47.964 1.59424C28.2877 -4.33882 7.52731 6.80221 1.59424 26.4784C-1.30959 36.1086 -0.123423 45.9985 4.15165 54.2827C4.16976 54.3178 4.17758 54.3573 4.17413 54.3966C4.17045 54.4386 4.17961 54.4807 4.2004 54.5174L21.409 84.876C21.9359 85.8056 23.1005 86.1568 24.0535 85.6734L55.1898 69.8813C55.2179 69.8671 55.2389 69.842 55.248 69.8119Z"
            fill="url(#paint4_linear_3690_38539)"
          />
          <rect
            x="8.50586"
            y="7.66797"
            width="58.5382"
            height="58.5382"
            rx="29.2691"
            fill="#C4C4C4"
            fillOpacity="0.01"
            stroke="url(#paint5_linear_3690_38539)"
          />
          <defs>
            <filter
              id="filter0_f_3690_38539"
              x="17.8213"
              y="74.4351"
              width="87.439"
              height="16.9304"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3690_38539"
              />
            </filter>
            <filter
              id="filter1_f_3690_38539"
              x="20.8213"
              y="77.4351"
              width="81.439"
              height="10.9304"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="0.5"
                result="effect1_foregroundBlur_3690_38539"
              />
            </filter>
            <filter
              id="filter2_f_3690_38539"
              x="17.8213"
              y="74.4351"
              width="87.439"
              height="16.9304"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3690_38539"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3690_38539"
              x1="32.1763"
              y1="85.2834"
              x2="38.7243"
              y2="70.8131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#112727" />
              <stop offset="1" stopColor="#122828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_3690_38539"
              x1="32.1763"
              y1="85.2834"
              x2="38.7243"
              y2="70.8131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#112727" />
              <stop offset="0.380208" stopColor="#122828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_3690_38539"
              x1="32.1763"
              y1="85.2834"
              x2="43.5144"
              y2="59.5365"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#112727" />
              <stop offset="1" stopColor="#122828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_3690_38539"
              x1="29.3422"
              y1="85.6327"
              x2="43.3633"
              y2="83.5091"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#112727" />
              <stop offset="1" stopColor="#122828" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_3690_38539"
              x1="47.9648"
              y1="1.59432"
              x2="22.5725"
              y2="85.8047"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#023935" />
              <stop offset="1" stopColor="#002825" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_3690_38539"
              x1="25.9914"
              y1="71.0475"
              x2="46.4576"
              y2="5.92759"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#033A36" />
              <stop offset="1" stopColor="#012B28" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <style jsx>{`
        .region_pin {
          position: absolute;
          z-index: 2;
          left: 190px;
          top: 30px;
          height: 89px;
        }
        .region_pin img {
          position: absolute;
          height: 60px;
          width: 60px;
          border-radius: 50%;
          overflow: hidden;
          left: 8px;
          top: 7px;
        }
      `}</style>
    </>
  )
}
