import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M8 7.3A2.7 2.7 0 1 0 8 2a2.7 2.7 0 0 0 0 5.3Zm0-4A1.3 1.3 0 1 1 8 6a1.3 1.3 0 0 1 0-2.7ZM8 8.7a4.7 4.7 0 0 0-4.7 4.6.7.7 0 1 0 1.4 0 3.3 3.3 0 0 1 6.6 0 .7.7 0 0 0 1.4 0A4.7 4.7 0 0 0 8 8.7Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
