import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Button } from "ui";
import InfoBox from "./InfoBox";

const orgData = { name: "Unikists", description: "Hello" };
const userProfile = {
  logo: "None",
  name: "ZBZ",
  major: "CS",
  standing: "Senior",
};

const Detail = () => {
  const onSignUp = () => {
    window.alert("You just signed up for {orgName}");
  };
  return (
    <PageBorder>
      <LogoBlock>
        <img src={orgData.logo}></img>
      </LogoBlock>
      <SubmitBtn onClick={onSignUp}>Sign Up for {orgData.name}</SubmitBtn>
      <DescriptionBlock>
        {GenerateDescription(orgData.description)}
      </DescriptionBlock>
    </PageBorder>
  );
};

const GenerateDescription = (description) => {
  return <div>{description}</div>;
};

export default Detail;

const LogoBlock = styled.div`
  display: flex;
  width: 20%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

const SubmitBtn = styled(Button)`
  display: inline;
  margin-top: 20px;
  width: 100%;
`;

const DescriptionBlock = styled.div``;

const PageBorder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
