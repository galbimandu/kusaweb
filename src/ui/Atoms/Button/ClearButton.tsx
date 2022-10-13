import styled from "styled-components";
import { Button } from "antd";

export const ClearButton = styled(Button)`
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.color_primary_dark} !important;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.txt_smaller};
  line-height: 16px;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 8px 12px !important;
  background-color: inherit !important;
  height: 32px;
  box-shadow: none !important;

  &:focus {
    color: ${({ theme }) => theme.colors.color_primary_darker} !important;
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.color_primary_lighter} !important;
    border-color: ${({ theme }) =>
      theme.colors.color_primary_lighter} !important;
  }
`;
