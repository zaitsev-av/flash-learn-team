import { SVGProps, memo, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <g fill={props.color} clipPath="url(#a)">
      <path d="M4.7 3.3a1 1 0 1 0-1.4 1.4l5.6 5.6a3.5 3.5 0 0 0 4.8 4.8l5.6 5.6a1 1 0 1 0 1.4-1.4l-16-16ZM12 13.5a1.5 1.5 0 0 1-1.5-1.5l1.6 1.5H12Z" />
      <path d="M12.2 17c-4.3.1-7.1-3.6-8-5 .6-1 1.4-2 2.3-2.7L5 7.9c-1.1 1-2.1 2.3-2.9 3.6a1 1 0 0 0 0 1c.7 1 4 6.5 10 6.5h.2c1 0 2.2-.3 3.2-.7l-1.6-1.6c-.5.2-1.1.3-1.7.3ZM21.9 11.5c-.7-1.1-4.2-6.7-10.2-6.5-1 0-2.2.3-3.2.7l1.6 1.5 1.7-.2c4.3-.1 7 3.6 8 5-.7 1-1.4 2-2.3 2.7l1.5 1.4c1.1-1 2.1-2.3 3-3.6a1 1 0 0 0-.1-1Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={props.color} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
