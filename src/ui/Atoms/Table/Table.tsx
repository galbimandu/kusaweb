import styled from "styled-components";
import { Table as antTable } from "antd";

export const Table = styled(antTable)`
  .ant-checkbox {
    .ant-checkbox-inner {
      border: 2px solid ${({ theme }) => theme.colors.color_base_black};
    }
  }

  .ant-checkbox-indeterminate {
    .ant-checkbox-inner::after {
      background-color: ${({ theme }) =>
        theme.colors.color_primary_regular} !important;
    }
  }

  .ant-checkbox-checked {
    ::after {
      border-color: ${({ theme }) =>
        theme.colors.color_primary_regular} !important;
    }
    .ant-checkbox-inner {
      color: ${({ theme }) => theme.colors.color_base_white} !important;
      background-color: ${({ theme }) =>
        theme.colors.color_primary_regular} !important;
      border-color: ${({ theme }) =>
        theme.colors.color_primary_regular} !important;
    }
  }

  .ant-table-tbody > tr.ant-table-row-selected > td {
    background-color: ${({ theme }) =>
      theme.colors.color_primary_lighter} !important;
  }
`;
