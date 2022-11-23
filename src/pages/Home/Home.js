import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Home = (props) => {
  return (
    <HomeWrapper>
      <LogoTextContainer>
        The hub for Korean Undergraduate Students and Organizations
      </LogoTextContainer>
      <BannerImg
        alt="uw madison banner"
        src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/Rectangle%201658.svg?t=2022-11-22T04%3A08%3A25.695Z"
      ></BannerImg>
      <MiddleWrapper>
        <MiddleTitle>Be a part of something Greater.</MiddleTitle>
        <MiddleInfo>
          Contribute and Synergize to be part of something beyond yourself
          <br />
          We are here to guide you, to help you, and to be your friend. Reach
          out whenever you need us and welcome aboard!
        </MiddleInfo>
      </MiddleWrapper>
    </HomeWrapper>
  );
};

export default withRouter(Home);

const LogoTextContainer = styled.div`
  margin-top: 21px;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerImg = styled.img`
  margin-top: 35px;
`;

const MiddleWrapper = styled.div`
  background-image: url("https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/bubbles.png");
  color: ${({ theme }) => theme.colors.color_text_in_white_button};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 900px;
`;

const MiddleTitle = styled.div`
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 250px;
`;

const MiddleInfo = styled.div`
  font-weight: 300;
  font-size: 16px;
`;

const ShadowTest = styled.div`
  margin-left: 300px;
  height: 258px;
  width: 440px;
  box-shadow: 14px 24px 16px 0px rgba(28, 38, 71, 0.05);
  background: rgba(248, 247, 245, 1);
`;
