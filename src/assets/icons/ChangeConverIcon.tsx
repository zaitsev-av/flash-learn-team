import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} fill="none" {...props}>
    <path
      fill="#fff"
      d="M10.5 0h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 1.333h8a.667.667 0 0 1 .667.667v5.573l-2.134-1.82a1.847 1.847 0 0 0-2.346 0L1.833 9.8V2a.667.667 0 0 1 .667-.667Zm8 9.334H2.873L7.54 6.773a.52.52 0 0 1 .62 0l3.007 2.56V10a.667.667 0 0 1-.667.667Z"
    />
  </svg>
)

export default memo(SvgComponent)
