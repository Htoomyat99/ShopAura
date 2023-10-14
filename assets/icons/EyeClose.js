import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const EyeClose = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={24}
    height={24}
    {...props}>
    <G data-name="Layer 85">
      <Path d="M61.59 30.79C61.06 30.08 48.26 13.5 32 13.5a24.84 24.84 0 0 0-4.6.44 2 2 0 1 0 .74 3.93A20.89 20.89 0 0 1 32 17.5c11.9 0 22.23 10.82 25.41 14.5a55.56 55.56 0 0 1-6.71 6.55 2 2 0 1 0 2.54 3.09 56.15 56.15 0 0 0 8.35-8.43 2 2 0 0 0 0-2.42ZM48.4 42.29l-8.8-8.8-9.09-9.09-7.82-7.82L12.25 6.14A2 2 0 0 0 9.43 9l8.49 8.49a55.12 55.12 0 0 0-15.51 13.3 2 2 0 0 0 0 2.42C2.94 33.92 15.74 50.5 32 50.5a29.57 29.57 0 0 0 14.67-4.29L55 54.57a2 2 0 0 0 2.83-2.83ZM28.82 28.36l6.83 6.83a4.84 4.84 0 1 1-6.83-6.83ZM32 46.5C20.1 46.5 9.77 35.68 6.59 32a50.36 50.36 0 0 1 14.28-11.59L26 25.53A8.83 8.83 0 1 0 38.47 38l5.27 5.27A25 25 0 0 1 32 46.5Z" />
    </G>
  </Svg>
);
export default EyeClose;
