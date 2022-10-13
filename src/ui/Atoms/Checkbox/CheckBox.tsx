import styled from "styled-components";
import { Checkbox as antCheckbox } from "antd";

export const Checkbox = styled(antCheckbox)`
  .ant-checkbox {
    .ant-checkbox-inner {
      border: 2px solid ${({ theme }) => theme.colors.color_base_black};
    }
  }

  .ant-checkbox-checked {
    .ant-checkbox-inner {
      color: ${({ theme }) => theme.colors.color_base_white} !important;
      background-color: ${({ theme }) =>
        theme.colors.color_primary_regular} !important;
      border-color: ${({ theme }) =>
        theme.colors.color_primary_regular} !important;

      &:hover {
        border-color: ${({ theme }) =>
          theme.colors.color_primary_regular} !important;
      }
    }
  }
`;
