import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#fff" ref={ref} {...props}>
    <g fill="#fff" clipPath="url(#a)">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
      <path d="M12.3 7.5a1.7 1.7 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.4v6.8a1.6 1.6 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l3.7-3.4a1.6 1.6 0 0 0 0-2.4l-3.7-3.3Zm-.8 7.1V9.4l2.8 2.6-2.8 2.6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
