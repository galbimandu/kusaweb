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
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            style={{ width: 144, height: 144, borderRadius: "50%" }}
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
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            style={{ width: 300, height: 300 }}
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
            <EventsContainerInner></EventsContainerInner>
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
`;

const EventsContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 30px;
  height: 640px;
  width: 480px;
  margin: auto;
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
