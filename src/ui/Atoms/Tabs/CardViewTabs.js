import styled from "styled-components";
// import { Tabs as antTabs } from "antd";

export const CardViewTabs = styled.div`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  margin: 0 1px;
  margin-bottom: -1px;
  z-index: 1;
  margin-left: ${({ first }) => (first ? 0 : 9)}px;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.txt_small};
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.color_base_darker};
  color: ${({ theme }) => theme.colors.color_text_light};
  box-shadow: none;
  background-color: ${({ theme, focused }) =>
    focused !== "true"
      ? theme.colors.color_base_white
      : theme.colors.color_state_notification_light};
  cursor: pointer;
  ${({ active, theme }) =>
    active === "true" &&
    `background-color: ${theme.colors.color_state_notification_light};`}

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.color_state_notification_light};
    color: ${({ theme }) => theme.colors.color_text_titles};
  }

  &:active {
    background-color: ${({ theme }) =>
      theme.colors.color_state_notification_light};
    color: ${({ theme }) => theme.colors.color_text_titles};
  }
`;
