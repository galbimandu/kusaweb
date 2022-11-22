import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Input, SubmitButton, SubmitButtonBlack, Select } from "ui";
import { useHistory } from "react-router-dom";
import { useMajors } from "apicache";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState([]);
  const [phone, setPhone] = useState("");
  const [standing, setStanding] = useState("");
  const [ok, setOk] = useState(true);

  const history = useHistory();
  const tmp = useMajors();
  console.log(tmp);
  // const { data: majorList } = useMajors();
  // console.log(majorList);
  const majorList = [];
  const check = () => {
    if (!email.includes("@wisc.edu")) {
      window.alert("Please input valid WISC EMAIL");
      return false;
    }
    return (
      name !== "" &&
      password !== "" &&
      email !== "" &&
      major.length !== 0 &&
      phone !== "" &&
      standing !== ""
    );
  };

  const handleHaveAccount = () => {
    history.push("/login");
  };

  const handleOrgSignup = () => {
    history.push("/orgsignup");
  };

  const onSignup = () => {
    if (check()) {
      console.log("nice");
      history.push("/home");
    } else {
      setOk(false);
    }
  };
  const handleMajorSelection = (value) => {
    let temp = [...major];
    temp.push(value);
    setMajor(temp);
  };

  return (
    <PageBorder>
      <InputContainer>
        <Head>Sign Up</Head>
        <InputBox
          placeholder="Name"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></InputBox>
        <InputBox
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></InputBox>
        <InputBox
          placeholder="WISC Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></InputBox>
        <Select
          mode="multiple"
          style={{
            width: "100%",
          }}
          placeholder="select one country"
          defaultValue={major}
          onChange={handleMajorSelection}
          optionLabelProp="label"
        >
          {majorList.map((m) => (
            <Option value={m} label={m}>
              {m}
            </Option>
          ))}
          <Option value="china" label="China">
            <div className="demo-option-label-item">
              <span role="img" aria-label="China">
                🇨🇳
              </span>
              China (中国)
            </div>
          </Option>
        </Select>
        <InputBox
          placeholder="Phone Number"
          type="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></InputBox>
        <SelectBox
          placeholder="Choose your standing"
          onSelect={(value) => setStanding(value)}
        >
          <Option value="Freshman">Freshman</Option>
          <Option value="Sophomore">Sophomore</Option>
          <Option value="Junior">Junior</Option>
          <Option value="Senior">Senior</Option>
        </SelectBox>
        <OrgSignup onClick={handleOrgSignup}>
          Sign up for Organization?
        </OrgSignup>
        <SubmitBtn onClick={onSignup}>Sign Up!</SubmitBtn>
        <SubmitBtnBlack onClick={handleHaveAccount}>
          Already have an account?
        </SubmitBtnBlack>
        {!ok && <div>please fill out the form</div>}
      </InputContainer>
    </PageBorder>
  );
};

export default Signup;

const SelectBox = styled(Select)`
  margin-bottom: 10px;
  width: 85%;
`;

const Option = styled(Select.Option)`
  height: 35px;
`;

const SubmitBtn = styled(SubmitButton)`
  margin-top: 8%;
  width: 85%;
  margin-bottom: 5%;
  height: 35px;
`;

const SubmitBtnBlack = styled(SubmitButtonBlack)`
  width: 85%;
  height: 35px;
`;

const OrgSignup = styled.div`
  margin-top: 15%;
  color: blueviolet;
  &:hover {
    color: ${({ theme }) => theme.colors.color_text_light} !important;
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

const Head = styled.h1`
  margin-top: 5%;
  margin-bottom: 25%;
  font-family: "Spartan";
  font-style: normal;

  text-align: center;

  color: #1a1a1a;
`;

const PageBorder = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 400px;
  height: 750px;
  background: #f8f7f5;
  border-radius: 10px;
`;

const InputBox = styled(Input)`
  width: 85%;
  height: 35px;
  margin-bottom: 6%;
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
