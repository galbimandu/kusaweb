import styled from "styled-components";
import { Button } from "antd";

export const LandingButtonOutline = styled(Button)`
  border-radius: 4px;
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(262.38deg, #33a1b9 -10.58%, #5ae4a1 114.4%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.color_primary_dark} !important;
  &:focus {
    border: solid 2px transparent;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(262.38deg, #33a1b9 -10.58%, #5ae4a1 114.4%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #fff inset !important;
    color: #43a1b9;
  }
  &:hover {
    border: solid 2px transparent;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(262.38deg, #33a1b9 -10.58%, #5ae4a1 114.4%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    /* box-shadow: 2px 1000px 1px #fff inset !important; */
    filter: drop-shadow(${({ theme }) => theme.elevations.elevation_medium});
    color: #43a1b9;
  }
`;
