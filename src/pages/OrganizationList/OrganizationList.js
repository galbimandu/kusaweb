import React from "react";
import styled from "styled-components";
import { Card } from "ui";

const OrganizationList = () => {
  return (
    <div>
      fdsfsad
      <OrgCard
        title="KCU (hardcoded)"
        extra={<a href="Organization">More</a>}
        style={{
          width: 300,
        }}
      >
        <p>This is KCU.</p>
        <p>It's the best organization.</p>
        <p>Please join.</p>
      </OrgCard>
      <OrgCard
        title="Get Org Name"
        extra={<a href="Organization">More</a>} // insert organization's href page
        style={{
          width: 300,
        }}
      >
        <p>Insert</p>
        <p>Organization</p>
        <p>Description</p>
      </OrgCard>
    </div>
  );
};

export default OrganizationList;

const OrgCard = styled(Card)``;
