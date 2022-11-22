import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
// import { createBoardMember } from "apicache";

const orgData = {
  name: "Unikists",
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
    window.alert("You just signed up for {orgName}");
  };
  return (
    <PageBorder>
      <LogoBlock>
        {
          <img
            alt="cover"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            style={{ width: 300, height: 300 }}
          />
        }
      </LogoBlock>
      <Block>
        <Head>About Us</Head>
        <Box>{orgData.description}</Box>
      </Block>
      <Block>
        <Head>Board Members</Head>
        <MemberBox>
          {
            <img
              alt="cover"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              style={{ width: 144, height: 144 }}
            />
          }

          <MessageBox>
            <MiniHead>President</MiniHead>
            <MiniHead>Name</MiniHead>
            {orgData.description}
          </MessageBox>
        </MemberBox>
      </Block>
      {/* </DescriptionContainer> */}
    </PageBorder>
  );
};

export default OrganizationDescription;

const Block = styled.div`
  width: 1100px;
  margin-bottom: 7%;
`;
const Box = styled.div`
  margin-top: 15px;
  width: 1075px;
  margin-left: 25px;
`;
//implement signup function on this logo
const LogoBlock = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;
  justify-content: center;
  align-items: center;
  .LogoBlock img {
    width: 100%;
    height: 100%;
  }
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

// const BoardMemberBlock = styled.div`

// `;
