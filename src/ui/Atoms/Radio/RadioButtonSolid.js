import styled from "styled-components";
import { Radio as antRadio } from "antd";
export const RadioGroupSolid = styled(antRadio.Group)`
  .ant-radio-group-solid
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: ${({ theme }) => theme.colors.color_primary_regular} !important;
    background: ${({ theme }) => theme.colors.color_primary_regular} !important;
    border-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
  }
`;
