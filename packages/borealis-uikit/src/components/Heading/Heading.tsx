import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, HeadingProps } from "./types";

const style = {
  [scales.MD]: {
    fontWeight: 400,
  },
  [scales.LG]: {
    fontWeight: 600,
  },
  [scales.XL]: {
    fontWeight: 700,
  },
  [tags.H1]: {
    fontSize: "56px",
  },
  [tags.H2]: {
    fontSize: "40px",
  },
  [tags.H3]: {
    fontSize: "32px",
  },
  [tags.H4]: {
    fontSize: "24px",
  },
  [tags.H5]: {
    fontSize: "20px",
  },
  [tags.H6]: {
    fontSize: "16px",
  },
  [tags.H7]: {
    fontSize: "14px",
  },
  [tags.H8]: {
    fontSize: "12px",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ tag }) => style[tag || tags.H2].fontWeight};
  font-weight: ${({ scale }) => style[scale || scales.MD].fontWeight};
  line-height: 1.1;
`;

Heading.defaultProps = {
  tag: tags.H2,
};

export default Heading;

// ${({ theme }) => theme.mediaQueries.lg} {
  //   font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
  // }
