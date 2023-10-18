import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {palette} from '../../src/helpers/theme/color';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const EyeOpen = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Icons"
    x={0}
    y={0}
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    viewBox="0 0 32 32"
    width={28}
    height={28}
    {...props}>
    <Path
      d="M29 16s-5.8 8-13 8-13-8-13-8 5.8-8 13-8 13 8 13 8z"
      className="st1"
      stroke={palette.black}
      fill={palette.white}
    />
    <Circle
      cx={16}
      cy={16}
      r={4}
      className="st1"
      stroke={palette.black}
      fill={palette.white}
    />
  </Svg>
);
export default EyeOpen;
