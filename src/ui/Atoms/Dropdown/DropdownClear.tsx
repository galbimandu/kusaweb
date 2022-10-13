import styled from "styled-components";
import { Dropdown as antDropdown } from "antd";

export const DropdownClear = styled(antDropdown)`
  border: none !important;
  background-color: inherit !important;
  /* display: flex;
  justify-content: center; */
  /* align-items: center; */
  /* padding: 8px 12px;
  height: 32px; */
  box-shadow: none !important;
  /* color: ${({ theme }) => theme.colors.color_primary_regular} !important; */

  /* font-size: ${({ theme }) => theme.fontSizes.txt_smaller};
  font-weight: bold; */
  /* line-height: 16px; */
  cursor: pointer;

  &:hover {
    border: none !important;
    /* padding: 0;
    margin: 0; */
    /* border: 1px solid ${({ theme }) => theme.colors.color_primary_lighter} !important; */
    /* background-color: ${({ theme }) =>
      theme.colors.color_primary_lighter} !important; */
    /* border-radius: 4px !important; */
    /* color: ${({ theme }) => theme.colors.color_primary_dark} !important; */
  }

  &:focus {
  }
`;
