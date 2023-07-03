import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" ref={ref} {...props}>
    <g fill={props.color} clipPath="url(#a)">
      <path d="M18.2 9.6c-.5-1-3.4-5.6-8.4-5.4-4.6 0-7.3 4.1-8 5.4a.8.8 0 0 0 0 .8c.5 1 3.3 5.4 8.2 5.4h.2c4.6 0 7.3-4.1 8-5.4a.8.8 0 0 0 0-.8Zm-8 4.6c-3.6 0-6-3-6.7-4.2.9-1.3 3-4 6.4-4.2 3.5 0 5.9 3 6.6 4.2-.8 1.3-3 4-6.3 4.2Z" />
      <path d="M10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4.3a1.2 1.2 0 1 1 0-2.5 1.2 1.2 0 0 1 0 2.4Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={props.color} d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
