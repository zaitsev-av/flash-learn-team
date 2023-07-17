import { memo, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <g>
      <path
        fill={props.color}
        d="m17.3 16-2.9-2.8a6.6 6.6 0 0 0 .3-7.7 6.7 6.7 0 1 0-1.4 9l2.8 2.8a.8.8 0 0 0 1.3-.3.8.8 0 0 0-.1-1ZM4.2 9.3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default memo(SvgComponent)
