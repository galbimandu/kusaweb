import styled from "styled-components";
import { Radio as antRadio } from "antd";
export const RadioGroupSolid = styled(antRadio.Group)`
  label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked {
    color: ${({ theme }) => theme.colors.color_base_white} !important;
    background: ${({ theme }) => theme.colors.color_primary_regular} !important;
    border-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
  }
  .ant-radio-button-wrapper:hover {
    color: ${({ theme }) => theme.colors.color_primary_regular} !important;
  }
  .ant-radio-button-wrapper-checked:hover::before {
    color: ${({ theme }) => theme.colors.color_primary_regular} !important;
  }
  .ant-radio-button-wrapper-checked::before {
    color: ${({ theme }) => theme.colors.color_primary_regular} !important;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
  }
`;
