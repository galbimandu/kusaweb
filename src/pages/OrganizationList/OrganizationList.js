import React from "react";
import styled from "styled-components";
import { Card, Avatar } from "ui";
import { useHistory } from "react-router-dom";
// import unikists from "images/logo/unikists-cropped.png";
// import ksea from "images/logo/KSEA.svg";
// import unikistsbg from "images/background/unikists.JPG";
// import badger from "images/logo/badger.svg";
// import kcu from "images/background/kcu.png";
// import kesl from "images/logo/kesl.png";
// import kic from "images/logo/kic.png";
// import kesa from "images/logo/kesa.png";
// import kbsa from "images/logo/kbsa.png";
// import madk from "images/logo/madk.png";
// import kuha from "images/logo/kuha.png";

const OrganizationList = () => {
  const history = useHistory();
  const orgData = [];

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
            cover={<img alt="cover" src={org.bg_url} height={180} width={300} />}
            onClick={() => handleOrgCardClick(org)}
            hoverable={true}
            key={org.id}
          >
            <Meta
              avatar={<Avatar src={org.logo_url} size="large" />}
              title={org.short_name}
              description={org.short_description}
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
