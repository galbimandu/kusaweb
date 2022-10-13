import styled from "styled-components";

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.txt_smaller};
  line-height: 20px;
  text-decoration: underline;
  cursor: pointer;
  display: inline-block;
  color: ${({ disabled, theme }) =>
    disabled
      ? theme.colors.color_text_placeholder
      : theme.colors.color_text_body} !important;
  &:hover {
    color: ${({ theme }) => theme.colors.color_primary_dark} !important;
    /* text-decoration: underline; */
  }
`;
