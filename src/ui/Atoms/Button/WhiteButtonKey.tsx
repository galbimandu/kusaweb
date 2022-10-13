import styled from "styled-components";
import { Button } from "antd";

export const WhiteButtonKey = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px !important;
  color: ${({ theme }) => theme.colors.color_primary_regular} !important;
  &:focus {
    border-color: ${({ theme }) => theme.colors.color_base_dark} !important;
  }
  &:hover {
    border-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
  }
`;
