import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Button } from "ui";
import InfoBox from "./InfoBox";

const Detail = () => {
  // const logo = props.orgLogo;
  // const name = props.name;
  // const description = props.description;

  const onSignUp = () => {
    window.alert("You just signed up for {orgName}");
  };
  return (
    <PageBorder>
      <InfoBox name={"minchang"} age={34} major="big dick" />
      {/* <LogoBlock>{logo}</LogoBlock>
      <SubmitBtn onClick={onSignUp}>Sign Up for {name}</SubmitBtn>
      <DescriptionBlock>{GenerateDescription(description)}</DescriptionBlock> */}
    </PageBorder>
  );
};

const GenerateDescription = (description) => {
  return <div>{description}</div>;
};

export default Detail;

const LogoBlock = styled.div``;

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
