import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    {...props}
  >
    <g>
      <path
        fill="currentColor"
        d="M11.7 14a.67.67 0 0 1-.3-.07L8 12.15l-3.4 1.78a.67.67 0 0 1-.97-.71l.67-3.75L1.55 6.8a.67.67 0 0 1-.16-.67.67.67 0 0 1 .54-.45l3.8-.55L7.4 1.7a.67.67 0 0 1 1.2 0l1.7 3.41 3.8.55a.67.67 0 0 1 .53.46.67.67 0 0 1-.16.66l-2.75 2.67.67 3.75a.67.67 0 0 1-.27.67.67.67 0 0 1-.41.12ZM8 10.73c.1 0 .21.03.3.08l2.52 1.33-.48-2.8a.67.67 0 0 1 .2-.6l2-1.95-2.8-.42A.67.67 0 0 1 9.25 6L8 3.5 6.74 6a.67.67 0 0 1-.5.36l-2.8.41 2 1.96a.67.67 0 0 1 .2.59l-.49 2.77 2.52-1.33c.1-.04.22-.05.33-.03Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default memo(SvgComponent)
