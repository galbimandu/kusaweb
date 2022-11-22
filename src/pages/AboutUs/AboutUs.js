import React from "react";
import styled, { ThemeContext } from "styled-components";

const AboutUs = () => {
  return <div>hi</div>;
};

export default AboutUs;

const Block = styled.div`
  width: 1100px;
  margin-bottom: 7%;
`;
const Box = styled.div`
  margin-top: 15px;
  width: 1075px;
  margin-left: 25px;
`;

const Head = styled.h1``;
const MiniHead = styled.h5``;

const MemberBox = styled(Box)`
  display: flex;
`;

const MessageBox = styled(Box)`
  margin-left: 15px;
  width: 900px;
  display: flex;
  flex-direction: column;
`;

const PageBorder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 250px;
`;
