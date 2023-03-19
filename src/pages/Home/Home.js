import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import ksea from "images/logo/KSEA.svg";
import unikistsbg from "images/background/unikists.JPG";
import badger from "images/logo/badger.svg";
import kcu from "images/background/kcu.png";
import kesl from "images/logo/kesl.png";
import kic from "images/logo/kic.png";
import kesa from "images/logo/kesa.png";
import kbsa from "images/logo/kbsa.png";
import madk from "images/logo/madk.png";
import kuha from "images/logo/kuha.png";
import useSBData from "utils/useSBData";
import { getOrgs } from "apicache";
const Home = () => {
  const logos = [
    [ksea, "KSEA"],
    [unikistsbg, "Unikists"],
    [badger, "Badger"],
    [kcu, "KCU"],
    [kesl, "KESL"],
    [kic, "KIC"],
    [kesa, "KESA"],
    [kbsa, "KBSA"],
    [madk, "MAD-K"],
    [kuha, "KUHA"],
  ];

  const [orgData, setOrgData] = useState({});

  const orgDataAPI = useSBData;

  useEffect(() => {
    orgDataAPI(setOrgData, getOrgs());
  }, [orgDataAPI]);

  useEffect(() => {
    if (orgData) {
      console.log(orgData);
    }
  }, [orgData]);

  const generateMembersDescriptions = () =>
    logos.map((logo) => (
      <OrganizationElement>
        {
          <img
            alt="cover"
            src={logo[0]}
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              border: "4px solid #f8f7f5",
            }}
          ></img>
        }
        <MiniHead>{logo[1]}</MiniHead>
      </OrganizationElement>
    ));

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
      <OrganizationsBox>
        <Head>Organizations we support</Head>
        <LogosWrpper>{generateMembersDescriptions()}</LogosWrpper>
      </OrganizationsBox>
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

const Head = styled.div`
  line-height: 35px;
  font-size: 30px;
  margin-bottom: 40px;
`;

const MiniHead = styled.h6``;

const OrganizationsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f7f5;
  box-shadow: 14px 24px 16px rgba(28, 38, 71, 0.05), inset 3px 4px 4px #ffffff;
  border-radius: 25px;
  padding-top: 32px;
`;

const LogosWrpper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px 64px 32px 44px;
  gap: 10px;
  width: 970px;
`;

const OrganizationElement = styled.div`
  height: 100px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
