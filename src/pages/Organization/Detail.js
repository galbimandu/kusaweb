import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { SubmitButton } from "ui";
// import { createBoardMember } from "apicache";

const orgData = { name: "Unikists", description: "Hello" };
const userProfile = {
  name: "ZBZ",
  major: "CS",
  standing: "Senior",
};

const Detail = ({
  match: {
    params: { id: orgID },
  },
}) => {
  console.log(orgID);

  const onSignUp = () => {
    // createBoardMember(userProfile);
    window.alert("You just signed up for {orgName}");
  };
  return (
    <PageBorder>
      <DescriptionContainer>
        <LogoBlock>{/* <img src={???}></img> */}</LogoBlock>
        <SubmitBtn onClick={onSignUp}>Sign Up for {orgData.name}</SubmitBtn>
        {<br></br>}
        <DescriptionBlock>
          {GenerateDescription(orgData.description)}
        </DescriptionBlock>
      </DescriptionContainer>
    </PageBorder>
  );
};

const GenerateDescription = (description) => {
  return <div>{description}</div>;
};

export default Detail;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const LogoBlock = styled.div`
  margin-top: 20px;
  width: 20%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

const SubmitBtn = styled(SubmitButton)`
  display: inline;
  margin-top: 20px;
  width: 75%;
  background-color: #f2f2f2;
`;

const DescriptionBlock = styled.div`
  width: 80%;
  padding-block: 10px;
`;

const PageBorder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

// const BoardMemberBlock = styled.div`

// `;
