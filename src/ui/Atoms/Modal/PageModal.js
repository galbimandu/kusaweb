import styled from "styled-components";
import { Modal as antModal } from "antd";

export const PageModal = styled(antModal)`
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
      background-color: ${({ theme }) => theme.colors.color_base_regular};
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

// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import useKeypress from "common/useKeyPress";
// import Icons from "Assets/Icons";
// export const PageModal = ({
//   preventClose,
//   visible,
//   onCancel,
//   children,
//   destroyOnClose,
// }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [closePrevented, setClosePrevented] = useState(false);
//   const [firstRender, setFirstRender] = useState(true);
//   useEffect(() => {
//     setIsVisible(visible);
//   }, [visible]);
//   useEffect(() => {
//     setClosePrevented(preventClose);
//   }, [preventClose]);
//   useEffect(() => {
//     if (!isVisible) {
//       !firstRender && onCancel();
//       destroyOnClose && setFirstRender(true);
//     } else {
//       setFirstRender(false);
//     }
//   }, [isVisible]);
//   const keyAction = () => {
//     !closePrevented && setIsVisible(false);
//   };
//   useKeypress("Escape", keyAction);
//   return (
//     <PageModalContainer isVisible={isVisible}>
//       <CloseButton onClick={() => setIsVisible(false)}>
//         <Icons type="fal" name="times" />
//       </CloseButton>
//       {!firstRender && children}
//     </PageModalContainer>
//   );
// };

// const CloseButton = styled.div`
//   position: fixed;
//   top: 18px;
//   right: 14px;
//   cursor: pointer;
//   z-index: 10;
//   font-size: 25px;
// `;

// const PageModalContainer = styled.div`
//   cursor: auto;
//   display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
//   background-color: ${({ theme }) => theme.colors.color_base_regular};
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   z-index: 9;
//   padding: 0 42px;
// `;
