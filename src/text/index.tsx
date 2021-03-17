import styled from "@emotion/styled";
import { css } from "@emotion/react";

type TextType = "heading32" | "heading30" | "heading28";

export interface TextProps {
  type?: TextType;
  lineHeight?: number;
}

const heading32 = css`
  font-size: 32px;
`;

const heading30 = css`
  font-size: 30px;
`;

const heading28 = css`
  font-size: 28px;
`;

const typeMapper = {
  heading32,
  heading30,
  heading28,
};

const Text = styled.div<TextProps>`
  ${({ type }) => typeMapper[type || "heading32"]}

  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ color }) => color && `color: ${color};`}
`;

export default Text;
