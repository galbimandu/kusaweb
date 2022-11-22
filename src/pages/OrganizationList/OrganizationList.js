import React from "react";
import styled from "styled-components";
import { Card, Avatar } from "ui";
import { useHistory } from "react-router-dom";
import unikists from "images/logo/unikists-cropped.png";
import ksea from "images/logo/KSEA.svg";
import unikistsbg from "images/background/unikists.JPG";
const OrganizationList = () => {
  const history = useHistory();
  const orgData = [
    {
      id: 50,
      abrv: "KCU",
      fullname: "Korean Undergraduate Computer Science Union",
      description: "한인 최고의 프로젝트 동아리",
      avatar: "https://joeschmoe.io/api/v1/random",
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
      description: "한인 게임 동아리",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 55,
      abrv: "KIC",
      fullname: "KIC",
      description: "한인 주식 동아리",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 56,
      abrv: "KESA",
      fullname: "KESA",
      description: "Organization for Economics",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 57,
      abrv: "KBSA",
      fullname: "KBSA",
      description: "Organization for Business",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 59,
      abrv: "MAD-K",
      fullname: "MAD-K",
      description: "한인 축구 동아리",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 60,
      abrv: "KUHA",
      fullname: "Korean Undergraduates Health Association",
      description: "한인 최고의 헬스 동아리",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover: "https://picsum.photos/300/182",
    },
    {
      id: 61,
      abrv: "EXMP",
      fullname: "EXAMPLE FULL NAME",
      description: "Brief Description of Organization.",
      avatar: "https://joeschmoe.io/api/v1/random",
      cover: "https://picsum.photos/300/182",
    },
  ];

  const handleOrgCardClick = (org) => {
    history.push(`/organizations/${org.id}`);
  };

  const { Meta } = Card;

  return (
    <OrgPageWrapper>
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
    </OrgPageWrapper>
  );
};

export default OrganizationList;

const OrgCard = styled(Card)`
  margin: 12px 12px;
  border-radius: 15px;
  width: 300px;
  overflow: hidden;
`;

const OrgPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
