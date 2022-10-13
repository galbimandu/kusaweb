import styled from "styled-components";

export const label_green = styled.div`
  ${({ theme }) => theme.fontSizes.txt_h6};
  display: flex;
  align-items: center;
  padding: 6px 8px;
  /* height: 20px; */
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.color_primary_darker};
  background: ${({ theme }) => theme.colors.color_primary_lighter};
`;

export const label_grey = styled.div`
  ${({ theme }) => theme.fontSizes.txt_h6};
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.color_text_light};
  background: ${({ theme }) => theme.colors.color_base_regular};
`;

export const label_grey_inverted = styled.div`
  ${({ theme }) => theme.fontSizes.txt_h6};
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.color_text_light};
  background: ${({ theme }) => theme.colors.color_base_dark};
`;

export const label_red = styled.div`
  ${({ theme }) => theme.fontSizes.txt_h6};
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.color_base_white};
  background: ${({ theme }) => theme.colors.color_state_danger_regular};
`;
