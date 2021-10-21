import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18 4H17V12C17 12.55 16.55 13 16 13H4V14C4 15.1 4.9 16 6 16H16L20 20V6C20 4.9 19.1 4 18 4ZM15 9V2C15 0.9 14.1 0 13 0H2C0.9 0 0 0.9 0 2V15L4 11H13C14.1 11 15 10.1 15 9Z" fill="white" />
    </Svg>
  );
};

export default Icon;