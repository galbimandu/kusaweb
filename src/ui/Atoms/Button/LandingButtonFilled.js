import styled from "styled-components";
import { Button } from "antd";

export const LandingButtonFilled = styled(Button)`
  background: linear-gradient(262.38deg, #33a1b9 -10.58%, #5ae4a1 114.4%);
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.color_base_white};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none !important;
  height: 40px;

  &:focus {
    background: linear-gradient(
        0deg,
        rgba(108, 24, 191, 0.3),
        rgba(108, 24, 191, 0.3)
      ),
      linear-gradient(262.38deg, #33b9a1 -10.58%, #5ae4a1 114.4%);
    color: ${({ theme }) => theme.colors.color_base_white} !important;
    box-shadow: none !important;
    border: none !important;
  }
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(108, 24, 191, 0.1),
        rgba(108, 24, 191, 0.1)
      ),
      linear-gradient(262.38deg, #33b9a1 -10.58%, #5ae4a1 114.4%);
    color: ${({ theme }) => theme.colors.color_base_white} !important;
    border: none !important;
  }
`;
