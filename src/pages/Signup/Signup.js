import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Input, Button, Select } from "ui";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [DOB, setDOB] = useState("");
  const [standing, setStanding] = useState("");
  const [ok, setOk] = useState(true);

  const history = useHistory();

  const check = () => {
    if (!email.includes("@wisc.edu")) {
      window.alert("Please input valid WISC EMAIL");
      return false;
    }
    return (
      name != "" && email != "" && major != "" && DOB != "" && standing != ""
    );
  };

  const onSignup = () => {
    if (check()) {
      console.log("nice");
      history.push("/home");
    } else {
      setOk(false);
    }
  };

  return (
    <PageBorder>
      <InputContainer>
        <Head>Sign Up Page</Head>
        <InputLine>
          <InputBox
            placeholder="Name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <InputBox
            placeholder="WISC Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <InputBox
            placeholder="Major"
            type="major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <InputBox
            placeholder="Date of Birth"
            type="DOB"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
          ></InputBox>
        </InputLine>
        <SelectBox
          placeholder="Choose your standing"
          onSelect={(value) => setStanding(value)}
        >
          <Option value="Freshman">Freshman</Option>
          <Option value="Sophomore">Sophomore</Option>
          <Option value="Junior">Junior</Option>
          <Option value="Senior">Senior</Option>
        </SelectBox>
        <SubmitBtn onClick={onSignup}>Sign Up!</SubmitBtn>
        {!ok && <div>please fill out the form</div>}
      </InputContainer>
    </PageBorder>
  );
};

export default Signup;

const SelectBox = styled(Select)`
  width: 100%;
`;

const Option = styled(Select.Option)`
  height: 50px;
`;

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
