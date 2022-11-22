import React from "react";
import { Card } from "ui";
import styled from "styled-components";
const AboutUs = () => {
  const WE = ["승제", "승제2", "승제3", "승제4", "승제5"];
  const message =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris portapretium odio in auctor. Vivamus placerat molestie sem quis vestibulum.Aenean auctor rutrum odio scelerisque rhoncus. Aliquam in ex sit ametsapien volutpat cursus. Maecenas quis dignissim quam, mattis euismodmagna. Sed elit mauris, sagittis in tincidunt vitae, lacinia id lectus. Vestibulum ipsum libero, ornare ac diam vitae, accumsan ullamcorper nulla.Curabitur viverra eu magna in dictum. Nunc a eros rutrum libero facilisis rhoncus. Praesent scelerisque mattis lectus eget semper. Vivamus indignissim enim. Vestibulum pulvinar rutrum ullamcorper. Morbipellentesque ante vel metus ultricies pellentesque. Donec porta dui lectus, tincidunt rutrum eros congue pretium. Nullam in ligula quis enimullamcorper elementum finibus eu tellus.";

  const generateMembersDescriptions = () =>
    WE.map((member) => (
      <MemberBox>
        <AvatarBox>
          <img
            alt="avatar"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            style={{
              width: 144,
              height: 144,
              borderRadius: "50%",
              border: "4px solid #f8f7f5",
            }}
          />
        </AvatarBox>
        <MemberDetailBox>
          <MiniHead>President</MiniHead>
          <MiniHead>{member}</MiniHead>
          <MessageBox>
            President Yo Kussup 한인들~ 저는 이번학기 한인 학생회 KUSA의 회장을
            맡게된 성승제입니다. 2017에 Virginia Tech에 입학했다 2018에
            매디슨으로 편입을 와서 기계공학을 전공하고 있고 부업으로는 매디슨
            탐방 유튜브 @Kussupman도 운영하고 있습니다. KUSA는 매디슨의 한인
            학부 여러분들이 최대한 편하고 유익하고 즐거운 대학 생활을 하실 수
            있도록 최선을 다하고 있습니다! 궁금하신 점이나 다양한 의견은 언제나
            환영이니 알려만 주십시오. 다들 화이팅~ 👍
          </MessageBox>
        </MemberDetailBox>
      </MemberBox>
    ));
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
      <PageBorder>
        <Block>
          <Head>About Us</Head>
          <Box>{message}</Box>
        </Block>
        <Block>
          <Head>Events</Head>
          <HorizontalBlock>
            <EventsContainerOuter>
              <EventsContainerInner>
                <Icon src="@styled-icons/fa-solid/Bell"></Icon>
                <AnnouncementElement>
                  <Icon src="@styled-icons/fa-solid/Bell"></Icon>
                  <TextBox>
                    <HeadBlock>
                      내생일
                      <DateBox>05/09</DateBox>
                    </HeadBlock>
                    {<div>아이패드가 갖고 싶네요.</div>}
                  </TextBox>
                </AnnouncementElement>
                <NotificationElement>
                  <Icon src="@styled-icons/fa-solid/Bell"></Icon>
                  <TextBox>
                    <HeadBlock>
                      1팀 VS 2팀
                      <DateBox>11/23</DateBox>
                    </HeadBlock>
                    {
                      <div>
                        경기 12시 시작입니다 11시 55분까지 디코 모여주세요
                      </div>
                    }
                  </TextBox>
                </NotificationElement>
                <SocialElement>
                  <Icon src="@styled-icons/fa-solid/Bell"></Icon>
                  <TextBox>
                    <HeadBlock>
                      BOB Social!
                      <DateBox>12/03</DateBox>
                    </HeadBlock>
                    {
                      <div>
                        Please bring your own liquor! We are providing some good
                        ass homemade pizza and I am afraid that I am running out
                        of words to type in this demo box so that I can
                        demonstrate that these notification blocks will resize
                        itself by the length of the descriptions. But if it is
                        too long like this one the cell will leave...
                      </div>
                    }
                  </TextBox>
                </SocialElement>
                <MeetingElement>
                  <Icon src="@styled-icons/fa-solid/Bell"></Icon>
                  <TextBox>
                    <HeadBlock>
                      Board Members Meeting
                      <DateBox>12/08</DateBox>
                    </HeadBlock>
                    {
                      <div>
                        Please bring your computers Location: 6974 Humanities
                      </div>
                    }
                  </TextBox>
                </MeetingElement>
              </EventsContainerInner>
            </EventsContainerOuter>
            <Field>Drag here to Open</Field>
          </HorizontalBlock>
        </Block>
        <Block>
          <Head>Board Members</Head>
          {generateMembersDescriptions()}
        </Block>
      </PageBorder>
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

const EventsContainerOuter = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 680px;
  width: 520px;
  background: #f5f5f5;
  border-width: 0px 3px 3px 0px;
  border-style: solid;
  border-color: rgba(74, 74, 74, 0.2);
  border-radius: 40px;
  margin: auto;
  align-items: center;
`;

const EventsContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 30px;
  height: 640px;
  width: 480px;
  margin: auto;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const EventElement = styled.div`
  width: 450px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 20px;
  padding-right: 30px;
  display: flex;
  margin-top: 18px;
  justify-content: space-evenly;
`;

const NotificationElement = styled(EventElement)`
  background: #fff0c2;
`;

const SocialElement = styled(EventElement)`
  background: #ffddbe;
`;

const MeetingElement = styled(EventElement)`
  background: #bfe0ff;
`;

const AnnouncementElement = styled(EventElement)`
  background: #efc2ff;
  border: 2px solid #5c5c5c;
`;

const HeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  text-align: justify;
  color: #434343;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  line-height: 10px;
  margin-left: 93px;
  font-size: 8px;
`;

const DateBox = styled.div`
  margin-left: 90px;
  line-height: 20px;
  font-size: 17px;
`;

const Icon = styled.img`
  background: #fffaeb;
  border-width: 1px 0px 0px 1px;
  border-style: solid;
  border-color: #676767;
  border-radius: 10px;
  align-items: center;
  line-height: 55px;
  width: 50px;
  height: 50px;
  justify-content: center;
`;

const Field = styled.div`
  width: 360px;
  height: 360px;
  line-height: 360px;
  box-sizing: border-box;
  background: rgba(231, 231, 231, 0.5);
  /* stroke_drag_here */

  border: 3px dashed #999999;
  border-radius: 20px;
  margin-left: 50px;
  text-align: center;
`;

const AvatarBox = styled.div`
  width: 200px;
  height: 200px;
  margin-block: auto;
`;

const Block = styled.div`
  width: 1100px;
  margin-top: 130px;
`;
const Box = styled.div`
  width: 1075px;
  margin-left: 25px;
`;

const Head = styled.div`
  font-weight: 400;
  font-size: 26px;
  line-height: 29px;
  text-align: justify;
  margin-bottom: 40px;
`;

const MiniHead = styled.h5`
  font-weight: 500;
  font-size: 20px;
`;

const HorizontalBlock = styled(Block)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const MemberBox = styled(Box)`
  margin-top: 5%;
  margin-bottom: 7%;
  display: flex;
`;

const MemberDetailBox = styled(Box)`
  margin-top: 20px;
  width: 800px;
  display: flex;
  flex-direction: column;
`;

const MessageBox = styled(Box)`
  width: 800px;
  font-size: 14px;
  line-height: 22px;
  margin-left: 0px;
`;

const PageBorder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 250px;
`;
