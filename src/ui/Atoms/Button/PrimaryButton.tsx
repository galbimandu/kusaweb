import styled from "styled-components";
import { Button } from "antd";

// export const PrimaryButton = (props: any) => {
//   return (
//     <PrimaryButtonStyle ...props>
//       {props.children}
//     </PrimaryButtonStyle>
//   );
// };

// export default PrimaryButton;

export const PrimaryButton = styled(Button)`
  border-color: ${({ theme }) => theme.colors.color_primary_regular};
  background-color: ${({ theme }) => theme.colors.color_primary_regular};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.color_base_white};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    background-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
    border-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
    color: white !important;
    box-shadow: none !important;
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.color_primary_darker} !important;
    border-color: ${({ theme }) =>
      theme.colors.color_primary_darker} !important;
    color: white !important;
  }
`;
