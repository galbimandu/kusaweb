import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Input, Button } from "ui";
import { useHistory } from "react-router-dom";
import { Checkbox } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const history = useHistory();
  const onLogin = () => {
    history.push("/home");
  };

  return (
    <PageBorder>
      <InputContainer>
        <Head>Login page</Head>
        <InputBox
          placeholder="Email"
          type="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></InputBox>
        <InputBox
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></InputBox>
        <Checkbox onClick={(e) => setRemember(!remember)}>Remember Me</Checkbox>
        <SubmitBtn onClick={onLogin}>Log In</SubmitBtn>
      </InputContainer>
    </PageBorder>
  );
};

export default Login;

const SubmitBtn = styled(Button)`
  display: inline;
  margin-top: 20px;
  width: 100%;
`;

const Head = styled.h2`
  margin-bottom: 30px;
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

  &:hover {
    border-color: ${({ theme }) => theme.colors.color_text_light} !important;
    transition: border-color 0.3s;
  }
`;

const InputBox = styled(Input)`
  display: flex;
  padding-left: 20px;
  width: 384px;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.txt_small};
  /* border: 1px solid rgb(192, 192, 192); */
  border: 1px solid ${({ theme }) => theme.colors.color_base_darker};
  line-height: 1.2;
  box-shadow: none;
  margin-bottom: 10px;

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
