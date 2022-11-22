import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <BannerImg
        alt="uw madison banner"
        src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/Rectangle%201658.svg?t=2022-11-22T04%3A08%3A25.695Z"
      ></BannerImg>
    </HomeWrapper>
  );
};

export default withRouter(Home);

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerImg = styled.img`
  margin-top: 35px;
`;

const ShadowTest = styled.div`
  margin-left: 300px;
  height: 258px;
  width: 440px;
  box-shadow: 14px 24px 16px 0px rgba(28, 38, 71, 0.05),
    3px 4px 4px 0px rgba(255, 255, 255, 1) inset;
  background: rgba(248, 247, 245, 1);
`;
