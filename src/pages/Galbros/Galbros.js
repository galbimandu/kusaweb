import React from "react";
import styled, { ThemeContext } from "styled-components";

const Galbros = () => {
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
      <Banner>
        <Logo>GALBROS</Logo>
      </Banner>
      <Block>
        <Head>GALBROS</Head>
        {<h2>Meet Our Team</h2>}
        {generateMembersDescriptions()}
      </Block>
    </PageBorder>
  );
};

export default Galbros;

const Banner = styled.div`
  margin-top: 60px;
  height: 630px;
  width: 100%;
  background: silver;
  margin-bottom: 100px;
`;

const Logo = styled.div`
  margin-top: 290px;
  font-family: "Spartan";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 60px;
  /* identical to box height, or 167% */

  text-align: center;
  color: #484848;
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
  margin-top: 15px;
  width: 1075px;
  margin-left: 25px;
`;

const Head = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-align: justify;
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
