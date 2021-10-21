import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8.00059 16V11H12.0006V16C12.0006 16.55 12.4506 17 13.0006 17H16.0006C16.5506 17 17.0006 16.55 17.0006 16V8.99997H18.7006C19.1606 8.99997 19.3806 8.42997 19.0306 8.12997L10.6706 0.599971C10.2906 0.259971 9.71059 0.259971 9.33059 0.599971L0.970586 8.12997C0.630586 8.42997 0.840586 8.99997 1.30059 8.99997H3.00059V16C3.00059 16.55 3.45059 17 4.00059 17H7.00059C7.55059 17 8.00059 16.55 8.00059 16Z" fill="white" />
    </Svg>
  );
};

export default Icon;
