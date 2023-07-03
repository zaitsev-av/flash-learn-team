import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="m20.7 19.3-3.4-3.4a8 8 0 0 0 .4-9.3 8 8 0 1 0-1.8 10.7l3.4 3.4a1 1 0 1 0 1.4-1.4ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const SearchIcon = memo(ForwardRef)
