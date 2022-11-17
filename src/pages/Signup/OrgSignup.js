import React, { useState } from "react";
import { Input, Button } from "ui";
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

  return (
    <PageBorder>
      <InputContainer>
        <Head>Sign Up for Organizations</Head>
        <InputLine>
          <InputBox
            placeholder="동아리명"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <InputBox
            placeholder="Fields related to Org"
            type="fields"
            value={fields}
            onChange={(e) => setFields(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <InputBox
            placeholder="Insta ID"
            type="IId"
            value={IId}
            onChange={(e) => setIId(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <SubmitBtn onClick={onSignup}>Sign Up!</SubmitBtn>
          {!ok && <div>please fill out the form</div>}
        </InputLine>
      </InputContainer>
    </PageBorder>
  );
};

export default OrgSignup;

const SubmitBtn = styled(Button)`
  display: inline;
  margin-top: 20px;
  width: 100%;
`;

const Head = styled.h2`
  margin-bottom: 30px;
  width: 100%;
  font-size: 3em;
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
  align-items: center;
`;
const InputLine = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InputBox = styled(Input)`
  display: flex;
  padding-left: 20px;
  width: 100%;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.txt_small};
  /* border: 1px solid rgb(192, 192, 192); */
  border: 1px solid ${({ theme }) => theme.colors.color_base_darker};
  line-height: 1.2;
  box-shadow: none;

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
