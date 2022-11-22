import React from "react";
import styled from "styled-components";
import { Card, Avatar } from "ui";
import { useHistory } from "react-router-dom";
//import unikists from "images/logo/unikists.png";
const OrganizationList = () => {
  const history = useHistory();
  const orgData = [
    {
      id: 50,
      abrv: "KCU",
      fullname: "Korean Undergraduate Computer Science Union",
      description: "한인 프로젝트 동아리",
    },
    {
      id: 51,
      abrv: "Unikists",
      description: "한인 밴드 동아리",
      //profile: unikists,
    },
    {
      id: 52,
      abrv: "KSEA",
      fullname: "Korean-American Scientists and Engineers Association",
      description: "한인 과학 동아리",
    },
    {
      id: 53,
      abrv: "KESL",
      fullname: "Korean E-Sports Legacy",
      description: "한인 게임 동아리",
    },
    {
      id: 55,
      abrv: "TEMP",
      fullname: "Full Name Here",
      description: "Brief Description of your organization.",
    },
    {
      id: 56,
      abrv: "TEMP",
      fullname: "Full Name Here",
      description: "Brief Description of your organization.",
    },
    {
      id: 57,
      abrv: "TEMP",
      fullname: "Full Name Here",
      description: "Brief Description of your organization.",
    },
    {
      id: 58,
      abrv: "TEMP",
      fullname: "Full Name Here",
      description: "Brief Description of your organization.",
    },
    {
      id: 59,
      abrv: "TEMP",
      fullname: "Full Name Here",
      description: "Brief Description of your organization.",
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
          cover={
            <img
              alt="cover"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          onClick={() => handleOrgCardClick(org)}
          hoverable={true}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
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
  /* box-shadow: 14px 24px 16px 0px rgba(28, 38, 71, 0.05) !important;
  box-shadow: 3px 4px 4px 0px rgba(255, 255, 255, 1) inset !important; */
`;

const OrgPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
