import React from "react";
import styled from "styled-components";
import { Card } from "ui";

const OrganizationList = () => {
  const orgData = [
    {
      name: "KCU",
      fullname: "Korean Undergraduate Computer Science Union",
      shortDes: "한인 프로젝트 동아리",
    },
    { name: "Unikists", shortDes: "한인 밴드 동아리" },
  ];
  return (
    <div>
      {orgData.map((org) => (
        <OrgCard
          hoverable={true}
          title={org.name}
          extra={<a href="Organization">More</a>}
          style={{
            width: 300,
          }}
        >
          <p>{org.name}</p>
          <p>It's the best organization.</p>
          <p>Please join.</p>
        </OrgCard>
      ))}
    </div>
  );
};

export default OrganizationList;

const OrgCard = styled(Card)`
  margin: 4px 12px;
`;
