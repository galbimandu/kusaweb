import React from "react";
import { Card } from "ui";
import styled from "styled-components";
const AboutUs = () => {
  return (
    <AboutUsContainer>
      <TopSection>
        <TopSectionTopText>
          We are your <RedText>hub</RedText>
        </TopSectionTopText>
        <BranchImg
          alt="branching from red dot"
          src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/aboutbranch.png?t=2022-11-22T21%3A09%3A32.417Z"
        />
        <CardContainer>
          <AboutCard>
            <CardImg
              alt="Academics"
              src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/academics.png"
            />
            <CardTitle>Academics</CardTitle>
            <CardInfo>
              We provide scholostic opportunities
              <br />
              to enhance members’ academic
              <br />
              performance
            </CardInfo>
          </AboutCard>
          <AboutCard>
            <CardImg
              alt="culture"
              src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/culture.png"
            />
            <CardTitle>Culture</CardTitle>
            <CardInfo>
              We promote awarenewss of Korean
              <br />
              culture in the UW-Madison community
            </CardInfo>
          </AboutCard>
          <AboutCard>
            <CardImg
              alt="sponsorships"
              src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/academics.png"
            />
            <CardTitle>Sponsorships</CardTitle>
            <CardInfo>
              We sponsor student organizations and
              <br />
              provide help for the organizations
              <br />
              to grow
            </CardInfo>
          </AboutCard>
          <AboutCard>
            <CardImg
              alt="relationships"
              src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/relationships.png"
            />
            <CardTitle>Relationships</CardTitle>
            <CardInfo>
              We create closer relations between
              <br /> members and communities
            </CardInfo>
          </AboutCard>
        </CardContainer>
      </TopSection>
    </AboutUsContainer>
  );
};

export default AboutUs;

const RedText = styled.text`
  color: ${({ theme }) => theme.colors.color_UW_red};
`;

const AboutUsContainer = styled.div``;

const TopSection = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BranchImg = styled.img`
  margin-top: 45px;
  width: 900px;
`;

const CardContainer = styled.div`
  width: 100%;
  min-width: 1100px;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const AboutCard = styled.div`
  color: ${({ theme }) => theme.colors.color_text_black};
  width: 270px;
  height: 200px;
  box-shadow: 14px 24px 16px 0px rgba(28, 38, 71, 0.05);
  background-color: ${({ theme }) => theme.colors.color_gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardImg = styled.img`
  margin-bottom: 8px;
  width: 60px;
`;

const CardTitle = styled.div`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 22px;
`;

const CardInfo = styled.div`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
`;

const TopSectionTopText = styled.div`
  font-size: 20px;
`;
