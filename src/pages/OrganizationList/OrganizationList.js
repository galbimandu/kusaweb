import React from "react";
import styled from "styled-components";
import { Card } from "ui";

const OrganizationList = () => {
  const data = [
    {
      name: "KCU",
      fullname: "Korean Undergraduate Computer Science Union",
      shortDes: "hi",
    },
    { name: "Unikists", shortDes: "hi" },
  ];
  return (
    <div>
      {data.map((org) => (
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
