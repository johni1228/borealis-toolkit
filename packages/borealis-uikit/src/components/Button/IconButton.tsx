import styled from "styled-components";
import Button from "./Button";
import { BaseButtonProps, PolymorphicComponent } from "./types";

const IconButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  padding: 0;
  border: 1px;
  border-radius: ${({ round }) => (round === true ? "50%" : "0%")};
  width: ${({ scale }) => (scale === "sm" ? "36px" : "48px")};
  height: ${({ scale }) => (scale === "sm" ? "36px" : "48px")};
  background-color: rgba(255, 255, 255, 0.7);
`;

export default IconButton;
