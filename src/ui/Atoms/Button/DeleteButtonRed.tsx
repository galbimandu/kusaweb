import styled from "styled-components";
import { Button } from "antd";

export const DeleteButtonRed = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.color_state_danger_regular} !important;
  border-color: ${({ theme }) =>
    theme.colors.color_state_danger_regular} !important;
  &:focus {
    border-color: ${({ theme }) => theme.colors.color_state_danger_regular} !important;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.color_state_danger_regular} !important;
  }
`;
