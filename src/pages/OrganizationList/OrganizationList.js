import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Avatar } from "ui";
import { useHistory } from "react-router-dom";
import { getOrgs } from "apicache";
import useSBData from "utils/useSBData";

const OrganizationList = () => {
  const history = useHistory();

  const [orgData, setOrgData] = useState([]);

  const orgDataAPI = useSBData;

  useEffect(() => {
    orgDataAPI(setOrgData, getOrgs());
  }, [orgDataAPI]);

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
            cover={
              <img alt="cover" src={org.bg_url} height={180} width={300} />
            }
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
