import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20 13C20 18.5228 15.5228 23 10 23C4.47715 23 0 18.5228 0 13C0 7.47715 4.47715 3 10 3C15.5228 3 20 7.47715 20 13ZM1.74951 13C1.74951 17.5566 5.44338 21.2505 10 21.2505C14.5566 21.2505 18.2505 17.5566 18.2505 13C18.2505 8.44338 14.5566 4.74951 10 4.74951C5.44338 4.74951 1.74951 8.44338 1.74951 13Z" fill="white" />
        <circle cx="10.0003" cy="13" r="7.14286" fill="white" />
        <path d="M18.6186 0.95286C18.744 0.613973 19.2233 0.613973 19.3487 0.952859L20.0064 2.73036C20.0458 2.8369 20.1298 2.92091 20.2364 2.96033L22.0139 3.61807C22.3528 3.74347 22.3528 4.22278 22.0139 4.34818L20.2364 5.00591C20.1298 5.04534 20.0458 5.12934 20.0064 5.23589L19.3487 7.01339C19.2233 7.35227 18.744 7.35227 18.6186 7.01339L17.9608 5.23589C17.9214 5.12934 17.8374 5.04534 17.7308 5.00591L15.9533 4.34818C15.6145 4.22278 15.6145 3.74347 15.9533 3.61807L17.7308 2.96033C17.8374 2.92091 17.9214 2.8369 17.9608 2.73036L18.6186 0.95286Z" fill="white" />
        <path d="M21.0256 6.85769C21.0875 6.69037 21.3241 6.69037 21.3861 6.85769L21.6596 7.59698C21.6791 7.64958 21.7206 7.69106 21.7732 7.71052L22.5125 7.98408C22.6798 8.046 22.6798 8.28264 22.5125 8.34456L21.7732 8.61812C21.7206 8.63758 21.6791 8.67906 21.6596 8.73166L21.3861 9.47095C21.3241 9.63827 21.0875 9.63827 21.0256 9.47095L20.752 8.73166C20.7326 8.67906 20.6911 8.63758 20.6385 8.61812L19.8992 8.34456C19.7319 8.28264 19.7319 8.046 19.8992 7.98408L20.6385 7.71052C20.6911 7.69106 20.7326 7.64958 20.752 7.59698L21.0256 6.85769Z" fill="white" />
    </Svg>
  );
};

export default Icon;