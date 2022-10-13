import styled from "styled-components";
import { Input as antInput } from "antd";

export const ClearInput = styled(antInput)`
  border: none !important;
  &:focus {
    border: none !important;
    box-shadow: none;
  }
  &:hover {
    border: none !important;
    box-shadow: none;
  }
`;
