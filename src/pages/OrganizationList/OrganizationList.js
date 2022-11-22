import React from "react";
import styled from "styled-components";
import { Card, Avatar } from "ui";
import { useHistory } from "react-router-dom";
import unikists from "images/logo/unikists-cropped.png";
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

const OrganizationList = () => {
  const history = useHistory();
  const orgData = [
    {
      id: 50,
      abrv: "KCU",
      fullname: "Korean Undergraduate Computer Science Union",
      description: "한인 최고의 프로젝트 동아리",
      avatar: kcu,
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 51,
      abrv: "Unikists",
      description: "한인 최고의 밴드 동아리",
      avatar: unikists,
      cover: unikistsbg,
    },
    {
      id: 52,
      abrv: "KSEA",
      fullname: "Korean-American Scientists and Engineers Association",
      description: "한인 과학 동아리",
      avatar: ksea,
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 53,
      abrv: "KESL",
      fullname: "Korean E-Sports Legacy",
      description: "한인 최강의 게임 동아리",
      avatar: kesl,
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 55,
      abrv: "KIC",
      fullname: "KIC",
      description: "한인 주식 동아리",
      avatar: kic,
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 56,
      abrv: "KESA",
      fullname: "KESA",
      description: "Organization for Economics",
      avatar: kesa,
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 57,
      abrv: "KBSA",
      fullname: "KBSA",
      description: "Organization for Business",
      avatar: kbsa,
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 59,
      abrv: "MAD-K",
      fullname: "MAD-K",
      description: "한인 축구 동아리",
      avatar: madk,
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 60,
      abrv: "KUHA",
      fullname: "Korean Undergraduates Health Association",
      description: "한인 최고의 헬스 동아리",
      avatar: kuha,
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 61,
      abrv: "EXMP",
      fullname: "EXAMPLE FULL NAME",
      description: "Brief Description of Organization.",
      avatar: badger,
      cover: "https://picsum.photos/300/182",
    },
  ];

  const handleOrgCardClick = (org) => {
    history.push(`/organizations/${org.id}`);
  };

  const { Meta } = Card;

  return (
    <PageWrapper>
      <TextBox>Organization Dashboard</TextBox>
      <OrgCardWrapper>
        {orgData.map((org) => (
          <OrgCard
            cover={<img alt="cover" src={org.cover} height={180} width={300} />}
            onClick={() => handleOrgCardClick(org)}
            hoverable={true}
          >
            <Meta
              avatar={<Avatar src={org.avatar} size="large" />}
              title={org.abrv}
              description={org.description}
            />
          </OrgCard>
        ))}
      </OrgCardWrapper>
    </PageWrapper>
  );
};

export default OrganizationList;

const OrgCard = styled(Card)`
  margin: 12px 12px;
  border-radius: 15px;
  width: 300px;
  overflow: hidden;
`;

const OrgCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  margin: 30px 30px;
  font-weight: 400;
  font-size: 30px;
  line-height: 34px;
`;
