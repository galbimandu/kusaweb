import React, { useState } from "react";
import { Input, SubmitButton, SubmitButtonBlack } from "ui";
import styled, { ThemeContext } from "styled-components";
import { useHistory } from "react-router-dom";

const OrgSignup = () => {
  const [name, setName] = useState("");
  const [fields, setFields] = useState("");
  const [IId, setIId] = useState("");
  const history = useHistory();
  const [ok, setOk] = useState(true);

  const check = () => {
    return name != "" && fields != "" && IId != "";
  };

  const onSignup = () => {
    if (check()) {
      window.alert("success!");
      history.push("/home");
    } else {
      setOk(false);
    }
  };
  const handleHaveAccount = () => {
    history.push("/home/login");
  };

  return (
    <PageBorder>
      <InputContainer>
        <Head>Organization Signup</Head>
        <InputBox
          placeholder="동아리명"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></InputBox>

        <InputBox
          placeholder="Fields related to Org"
          type="fields"
          value={fields}
          onChange={(e) => setFields(e.target.value)}
        ></InputBox>

        <InputBox
          placeholder="Insta ID"
          type="IId"
          value={IId}
          onChange={(e) => setIId(e.target.value)}
        ></InputBox>

        <SubmitBtn onClick={onSignup}>Sign Up!</SubmitBtn>
        <SubmitBtnBlack onClick={handleHaveAccount}>
          Already Have an Account?
        </SubmitBtnBlack>
        {!ok && <div>please fill out the form</div>}
      </InputContainer>
    </PageBorder>
  );
};

export default OrgSignup;

const SubmitBtn = styled(SubmitButton)`
  margin-top: 10px;
  width: 85%;
  margin-bottom: 5%;
  height: 6%;
`;

const SubmitBtnBlack = styled(SubmitButtonBlack)`
  width: 85%;
  margin-bottom: 10px;
  height: 6%;
`;

const Head = styled.h1`
  margin-bottom: 10%;
  font-family: "Spartan";
  font-style: normal;

  text-align: center;

  color: #1a1a1a;
`;

const PageBorder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 500px;
  background: #f8f7f5;
  border-radius: 10px;
`;

const InputBox = styled(Input)`
  width: 85%;
  height: 10%;
  margin-bottom: 10%;
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.color_text_light} !important;
    transition: border-color 0.3s;
  }

  &:focus-within {
    border-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
    transition: border-color 0.3s;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.color_text_placeholder};
  }
`;
