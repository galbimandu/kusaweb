import styled from "styled-components";
import { Modal as antModal } from "antd";

export const PageModalWhite = styled(antModal)`
  padding-bottom: 0px;
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  top: 0px;
  .ant-modal-content {
    height: 100%;
    padding: 0px;
    border-radius: 0px !important;
    .ant-modal-header {
      padding: 0px;
      border-bottom: none;
    }

    .ant-modal-body {
      padding: 0 42px;
      padding-top: 12px;
      background-color: ${({ theme }) => theme.colors.color_base_white};
    }

    .ant-modal-close {
      top: -8px;
      right: 0px;
      outline: none !important;
      border: none !important;
    }

    .ant-modal-close-x {
      width: 46px;
      height: 46px;
      display: block;
      font-size: ${({ theme }) => theme.fontSizes.txt_large};
      color: ${({ theme }) => theme.colors.color_text_titles};
      line-height: 56px;
      /* display: none; */
      /* width: 70px;
    line-height: 90px; */
    }

    .ant-modal-footer {
      margin-top: 32px;
      padding: 0px;
      /* margin: 0px 16px;
      padding: 10px; */
      border: none !important;
    }
  }
`;
