import styled from "styled-components";
import { Button } from "antd";

// export const DeleteButton = (props: any) => {
//   return <DeleteButtonStyle>{props.children}</DeleteButtonStyle>;
// };

// export default DeleteButton;

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.color_state_danger_regular};
  border-color: ${({ theme }) => theme.colors.color_state_danger_regular};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.color_base_white};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    background-color: ${({ theme }) =>
      theme.colors.color_state_danger_dark} !important;
    border-color: ${({ theme }) =>
      theme.colors.color_state_danger_dark} !important;
    color: ${({ theme }) => theme.colors.color_base_white} !important;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.color_state_danger_dark} !important;
    border-color: ${({ theme }) =>
      theme.colors.color_state_danger_dark} !important;
    color: ${({ theme }) => theme.colors.color_base_white} !important;
  }
`;
