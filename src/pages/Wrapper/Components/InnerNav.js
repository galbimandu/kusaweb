import React from "react";
import styled from "styled-components";
import { Avatar } from "ui";
import { UserOutlined } from "@ant-design/icons";
const InnerNav = () => {
  return (
    <InnerNavContainer>
      <LeftContainer>KUSA - UW MADISON</LeftContainer>
      <RightContainer>
        <Avatar size={32} icon={<UserOutlined />} />
      </RightContainer>
    </InnerNavContainer>
  );
};

export default InnerNav;

const InnerNavContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  /* background-color: ${({ theme }) => theme.colors.color_primary_darker}; */
  box-shadow: ${({ theme }) => theme.elevations.elevation_medium};
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div``;
