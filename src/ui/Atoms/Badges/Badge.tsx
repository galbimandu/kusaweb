import styled from "styled-components";
import { Badge as antBadge } from "antd";

export const badge_default = styled.div`
  ${({ theme }) => theme.fontSizes.txt_h6};
  display: flex;
  align-items: center;
  height: 16px;
  padding: 2px 4px;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.color_state_notification_dark};
  background: ${({ theme }) => theme.colors.color_state_notification_light};
`;

export const badge_success = styled.div`
  ${({ theme }) => theme.fontSizes.txt_h6};
  display: flex;
  align-items: center;
  height: 16px;
  padding: 2px 4px;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.color_primary_darker};
  background: ${({ theme }) => theme.colors.color_primary_lighter};
`;

export const BadgeDanger = styled(antBadge)`
  .ant-badge-count-sm {
    z-index: 2;
  }
`;
