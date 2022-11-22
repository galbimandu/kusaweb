import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
export const BottomNav = () => {
  const history = useHistory();
  const handleGalbros = () => {
    history.push(`/galbros`);
  };
  return (
    <BottomNavContainer>
      <Horizontal />
      <Textone>2022&nbsp; KUSA</Textone>
      <Texttwo onClick={handleGalbros}>made by &nbsp;GALBROS</Texttwo>
    </BottomNavContainer>
  );
};

const Horizontal = styled.div`
  background: ${({ theme }) => theme.colors.color_text_footer};
  color: ${({ theme }) => theme.colors.color_text_footer};
  border-color: ${({ theme }) => theme.colors.color_text_footer};
  height: 2px;
  width: 80%;
  max-width: 1275px;
  margin-bottom: 12px;
  border-radius: 100%;
`;

const BottomNavContainer = styled.div`
  position: relative;
  margin-top: 150px;
  margin-bottom: 30px;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Textone = styled.div`
  font-weight: 400;
  font-style: "Space Mono";
  font-size: 14px;
  color: ${({ theme }) => theme.colors.color_text_footer};
`;
const Texttwo = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.color_text_footer};
`;
