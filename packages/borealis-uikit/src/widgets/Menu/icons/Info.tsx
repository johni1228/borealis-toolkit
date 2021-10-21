import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM5 14C4.45 14 4 13.55 4 13V8C4 7.45 4.45 7 5 7C5.55 7 6 7.45 6 8V13C6 13.55 5.55 14 5 14ZM9 14C8.45 14 8 13.55 8 13V5C8 4.45 8.45 4 9 4C9.55 4 10 4.45 10 5V13C10 13.55 9.55 14 9 14ZM13 14C12.45 14 12 13.55 12 13V11C12 10.45 12.45 10 13 10C13.55 10 14 10.45 14 11V13C14 13.55 13.55 14 13 14Z" fill="white" />
    </Svg>
  );
};

export default Icon;
