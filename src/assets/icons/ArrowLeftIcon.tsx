import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g>
      <path
        fill="#fff"
        d="M12.7 7.3h-8l2.5-2.9a.7.7 0 0 0-1-.8l-3.4 4v.2l-.1.2V8.3l.1.1 3.4 4a.7.7 0 0 0 1-.8l-2.4-3h7.9a.7.7 0 1 0 0-1.3Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
