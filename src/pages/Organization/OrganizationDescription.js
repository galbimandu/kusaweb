import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import EventsSection from "./Components/EventsSection";
const orgData = {
  name: "Korean E-Sports Legacy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris portapretium odio in auctor. Vivamus placerat molestie sem quis vestibulum.Aenean auctor rutrum odio scelerisque rhoncus. Aliquam in ex sit ametsapien volutpat cursus. Maecenas quis dignissim quam, mattis euismodmagna. Sed elit mauris, sagittis in tincidunt vitae, lacinia id lectus. Vestibulum ipsum libero, ornare ac diam vitae, accumsan ullamcorper nulla.Curabitur viverra eu magna in dictum. Nunc a eros rutrum libero facilisis rhoncus. Praesent scelerisque mattis lectus eget semper. Vivamus indignissim enim. Vestibulum pulvinar rutrum ullamcorper. Morbipellentesque ante vel metus ultricies pellentesque. Donec porta dui lectus, tincidunt rutrum eros congue pretium. Nullam in ligula quis enimullamcorper elementum finibus eu tellus.",
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
          <MiniHead>{member}</MiniHead>
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
      <EventsSection />
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
