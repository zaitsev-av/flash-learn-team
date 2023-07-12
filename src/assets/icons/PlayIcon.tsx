import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M8 1.33a6.67 6.67 0 1 0 0 13.34A6.67 6.67 0 0 0 8 1.33Zm0 12A5.33 5.33 0 1 1 8 2.67a5.33 5.33 0 0 1 0 10.66Z" />
      <path d="M8.23 4.97a1.13 1.13 0 0 0-1.24-.2 1.07 1.07 0 0 0-.66.98v4.5a1.07 1.07 0 0 0 .66.98c.15.07.3.1.46.1.29 0 .56-.1.78-.3l2.44-2.24a1.07 1.07 0 0 0 0-1.58L8.23 4.97Zm-.56 4.76V6.27L9.54 8 7.67 9.73Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default memo(SvgComponent)
