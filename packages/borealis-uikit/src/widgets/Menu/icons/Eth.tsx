import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7.99842 0.898438L7.8374 1.44537V17.3145L7.99842 17.4752L15.3646 13.121L7.99842 0.898438Z" fill="#343434" />
      <path d="M7.99817 0.898438L0.631836 13.121L7.99817 17.4752V9.77272V0.898438Z" fill="#8C8C8C" />
      <path d="M7.99846 18.8677L7.90771 18.9783V24.6312L7.99846 24.8961L15.3691 14.5157L7.99846 18.8677Z" fill="#3C3C3B" />
      <path d="M7.99817 24.8961V18.8677L0.631836 14.5157L7.99817 24.8961Z" fill="#8C8C8C" />
    </Svg >
  );
};

export default Icon;