import styled from "styled-components";
import { Radio as antRadio } from "antd";
export const Radio = styled(antRadio)`
  .ant-radio-checked .ant-radio-inner {
    border-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important ;
  }

  .ant-radio-checked .ant-radio-inner:after {
    background-color: ${({ theme }) => theme.colors.color_primary_regular};
  }

  .ant-radio:hover .ant-radio-inner {
    border-color: ${({ theme }) => theme.colors.color_primary_regular};
  }
`;
