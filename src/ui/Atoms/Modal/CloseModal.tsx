import styled from "styled-components";
import { Modal as antModal } from "antd";

export const CloseModal = styled(antModal)`
  .ant-modal-content {
    border-radius: 8px !important;
    padding: 18px;

    .ant-modal-header {
      padding: 0px;
      border-bottom: none;
    }

    .ant-modal-body {
      padding: 0px;
    }

    .ant-modal-close {
      top: 13px;
      right: 15px;
      outline: none !important;
      border: none !important;
    }

    .ant-modal-close-x {
      width: 46px;
      height: 46px;
      line-height: 46px;
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
