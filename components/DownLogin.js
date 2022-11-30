import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={404}
    height={172}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h404v172H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.00248 .00581)" />
      </Pattern>
      <Image
        id="b"
        width={404}
        height={172}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default SvgComponent
