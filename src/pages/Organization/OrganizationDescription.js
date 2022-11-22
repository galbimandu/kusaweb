import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";

const orgData = {
  name: "Korean E-Sports Legacy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris portapretium odio in auctor. Vivamus placerat molestie sem quis vestibulum.Aenean auctor rutrum odio scelerisque rhoncus. Aliquam in ex sit ametsapien volutpat cursus. Maecenas quis dignissim quam, mattis euismodmagna. Sed elit mauris, sagittis in tincidunt vitae, lacinia id lectus. Vestibulum ipsum libero, ornare ac diam vitae, accumsan ullamcorper nulla.Curabitur viverra eu magna in dictum. Nunc a eros rutrum libero facilisis rhoncus. Praesent scelerisque mattis lectus eget semper. Vivamus indignissim enim. Vestibulum pulvinar rutrum ullamcorper. Morbipellentesque ante vel metus ultricies pellentesque. Donec porta dui lectus, tincidunt rutrum eros congue pretium. Nullam in ligula quis enimullamcorper elementum finibus eu tellus.",
};
const userProfile = {
  name: "ZBZ",
  major: "CS",
  standing: "Senior",
};

const OrganizationDescription = ({
  match: {
    params: { id: orgID },
  },
}) => {
  console.log(orgID);

  const onSignUp = () => {
    // createBoardMember(userProfile);
    // window.alert("You just signed up for {orgName}");
  };

  const WE = ["Galbi", "JIN", "HB", "SJ", "ZBZ"];
  const message =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris portapretium odio in auctor. Vivamus placerat molestie sem quis vestibulum.Aenean auctor rutrum odio scelerisque rhoncus. Aliquam in ex sit ametsapien volutpat cursus. Maecenas quis dignissim quam, mattis euismodmagna. Sed elit mauris, sagittis in tincidunt vitae, lacinia id lectus. Vestibulum ipsum libero, ornare ac diam vitae, accumsan ullamcorper nulla.Curabitur viverra eu magna in dictum. Nunc a eros rutrum libero facilisis rhoncus. Praesent scelerisque mattis lectus eget semper. Vivamus indignissim enim. Vestibulum pulvinar rutrum ullamcorper. Morbipellentesque ante vel metus ultricies pellentesque. Donec porta dui lectus, tincidunt rutrum eros congue pretium. Nullam in ligula quis enimullamcorper elementum finibus eu tellus.";

  const generateMembersDescriptions = () =>
    WE.map((member) => (
      <MemberBox>
        <AvatarBox>
          <img
            alt="avatar"
            src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/KESLprof.png"
            style={{
              width: 154,
              height: 154,
              padding: 10,
            }}
          />
        </AvatarBox>
        <MemberDetailBox>
          <MiniHead>President</MiniHead>
          <MiniHead>Name</MiniHead>
          <MessageBox>{message}</MessageBox>
        </MemberDetailBox>
      </MemberBox>
    ));

  return (
    <PageBorder>
      <LogoBlock>
        {
          <img
            alt="cover"
            src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/KESLprof.png"
            style={{ width: 310, height: 310, padding: 10 }}
            onClick={onSignUp}
          />
        }
      </LogoBlock>
      <Block>
        <OrgName>{orgData.name}</OrgName>
        <Head>About Us</Head>
        <Box>{orgData.description}</Box>
      </Block>
      <Block>
        <Head>Events</Head>
        <HorizontalBlock>
          <EventsContainerOuter>
            <EventsContainerInner>
              <Icon src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/bell.png"></Icon>

              <AnnouncementElement>
                <IconWrapper>
                  <Icon
                    small
                    src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/pin.png"
                  ></Icon>
                </IconWrapper>
                <TextBox>
                  <HeadBlock>
                    회비 안내
                    <DateBox>05/09</DateBox>
                  </HeadBlock>
                  <div>이번 1월 회비 벤모 @gildongneedscash 로 보내주세요</div>
                </TextBox>
              </AnnouncementElement>
              <NotificationElement>
                <IconWrapper>
                  <Icon src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/message.png"></Icon>
                </IconWrapper>
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
                <IconWrapper>
                  <Icon src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/social.png"></Icon>
                </IconWrapper>
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
                      itself by the length of the descriptions. But if it is too
                      long like this one the cell will leave...
                    </div>
                  }
                </TextBox>
              </SocialElement>
              <MeetingElement>
                <IconWrapper>
                  <Icon src="https://nokammysupkvthqndlsz.supabase.co/storage/v1/object/public/kusaweb-bucket/images/meeting.png"></Icon>
                </IconWrapper>
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
  );
};

export default OrganizationDescription;

//implement signup function on this logo
const LogoBlock = styled.div`
  margin-top: 60px;
  width: 300px;
  margin-bottom: 80px;
  justify-content: center;
  border-radius: 100%;
  overflow: hidden;
  align-items: center;
  /* .LogoBlock img {
    width: 100%;
    height: 100%;
  } */
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
  justify-content: center;
  width: 320px;
  margin-left: 20px;
  line-height: 10px;
  font-size: 8px;
`;

const DateBox = styled.div`
  margin-left: 90px;
  line-height: 20px;
  font-size: 17px;
`;
const IconWrapper = styled.div`
  background: #fffaeb;
  border-width: 1px 0px 0px 1px;
  border-style: solid;
  border-color: #858585;
  border-radius: 100%;
  overflow: hidden;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  width: 36px;
  height: 36px;
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
`;

const Block = styled.div`
  width: 1100px;
  margin-bottom: 7%;
`;
const Box = styled.div`
  width: 1075px;
  margin-left: 25px;
`;

const OrgName = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 33.6px;
  text-align: justify;
  margin-bottom: 24px;
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
