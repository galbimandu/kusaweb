import styled from "styled-components";
import { Button } from "antd";

// export const SecondaryButton = (props: any) => {
//   return (
//     <SecondaryButtonStyle onClick={props.onClick}>
//       {props.children}
//     </SecondaryButtonStyle>
//   );
// };

// export default SecondaryButton;

export const SecondaryButton = styled(Button)`
  border-color: ${({ theme }) => theme.colors.color_base_regular};
  border-radius: 4px !important;
  background-color: ${({ theme }) => theme.colors.color_base_regular};
  color: ${({ theme }) => theme.colors.color_text_body} !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 8px 12px;
  height: 32px !important;
  box-shadow: none !important;

  &:focus {
    border-color: ${({ theme }) => theme.colors.color_base_regular} !important;
    background-color: ${({ theme }) => theme.colors.color_base_regular} !important;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.color_base_dark} !important;
    background-color: ${({ theme }) => theme.colors.color_base_dark} !important;
  }
`;
