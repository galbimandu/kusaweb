import { SubmitButton as b } from "./SubmitButton";
import styled from "styled-components";

export const SubmitButtonBlack = styled(b)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  color: #f2f2f2;
  background: #434343;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;
