import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g fill="#fff">
      <path d="M4.7 4a.7.7 0 1 0 0-1.3H3.3a.7.7 0 0 0-.6.6v9.4a.7.7 0 0 0 .6.6h1.4a.7.7 0 1 0 0-1.3H4V4h.7ZM13.9 7.6 12 5a.7.7 0 1 0-1 .8l1 1.6H6.8a.7.7 0 0 0 0 1.4H12l-1.2 1.6a.7.7 0 0 0 .1.9.7.7 0 0 0 1-.1l2-2.7a.7.7 0 0 0 0-.8Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const SignOutIcon = memo(ForwardRef)
