import styled from "styled-components";
import { Input as antInput } from "antd";

export const Input = styled(antInput)`
  /* border-top: none !important;
  border-left: none !important;
  border-right: none !important; */
  border-color: ${({ theme }) => theme.colors.color_base_dark} !important;
  border-radius: 4px !important;
  background-color: inherit !important;
  border-color: ${({ theme, error }) =>
    error && theme.colors.color_state_danger_regular} !important;
  ::placeholder {
    /* color: ${({ theme }) => theme.colors.color_text_light} !important; */
    /* font-size: 1.5em; */
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.color_base_darker};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.color_base_darker} !important;
    box-shadow: none !important;
  }
`;
