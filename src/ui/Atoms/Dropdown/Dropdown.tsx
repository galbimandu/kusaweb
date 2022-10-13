import styled from "styled-components";
import { Dropdown as antDropdown } from "antd";

export const Dropdown = styled(antDropdown)`
  border: 1px solid ${({ theme }) => theme.colors.color_base_regular};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.color_base_regular};
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 8px 12px !important;
  height: 32px !important;
  box-shadow: none !important;
  font-size: ${({ theme }) => theme.fontSizes.txt_smaller};
  font-weight: bold;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.color_text_titles};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.color_base_dark};
    background-color: ${({ theme }) => theme.colors.color_base_dark};
  }
  &:focus {
  }
`;
