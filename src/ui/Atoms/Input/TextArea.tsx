import styled from "styled-components";
import { Input as antInput } from "antd";

export const TextArea = styled(antInput.TextArea)`
  border-color: ${({ theme }) => theme.colors.color_base_darker} !important;
  background-color: ${({ theme }) => theme.colors.color_base_white}!important;
  color: ${({ theme }) => theme.colors.color_text_body} !important;

  &:hover {
    border-color: ${({ theme }) => theme.colors.color_base_darker} !important;
  }
  &:focus {
    border-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
    box-shadow: none !important;
    color: ${({ theme }) => theme.colors.color_text_body} !important;
  }
`;
