// components/CustomIcon.tsx
import React from 'react';

interface CustomIconProps {
  width?: number;
  height?: number;
}

const Flogo: React.FC<CustomIconProps> = ({ width = 1269, height = 731 }) => (
  <svg width={width} height={height} viewBox="0 0 1269 731" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M437.712 259.026V340.77V422.515H379.955V259.026C379.955 168.664 445.117 60.2169 539.988 28.9393C562.719 20.206 586.182 13.515 610.1 8.94547L620.619 6.9358L621.498 69.5C621.498 69.5 613.51 68.5657 592.498 73C578.922 75.865 559.618 78.7775 534.498 93C470.498 129.235 437.712 200.337 437.712 259.026ZM564.102 287.904H474.689V230.147H564.102V287.904Z" fill="#F79F13"/>
  </svg>
);

export default Flogo;
