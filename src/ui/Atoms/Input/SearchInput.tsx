import styled from "styled-components";
import { Input } from "antd";

export const SearchInput = styled(Input.Search)`
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.color_base_regular};
  background-color: ${({ theme }) => theme.colors.color_base_regular};
  display: flex;
  align-items: center;
  * {
    color: ${({ theme }) => theme.colors.color_text_placeholder};
  }
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.color_base_darker};
    color: ${({ theme }) => theme.colors.color_text_body};
  }
  &:focus-within * {
    color: ${({ theme }) => theme.colors.color_text_body};
  }
  .ant-input {
    border: 1px solid ${({ theme }) => theme.colors.color_base_regular};
    background-color: ${({ theme }) => theme.colors.color_base_regular};
    /* color: ${({ theme }) => theme.colors.color_text_placeholder}; */
    height: 32px;
    /* border-radius: 8px; */
    border: none !important;
    &:hover {
      border: none !important;
      box-shadow: none !important;
    }
    &:focus-within {
      border: none !important;
      box-shadow: none !important;
    }
  }
  .ant-input-group-addon {
    /* border-radius: 8px 0px 0px 8px !important; */
    background-color: ${({ theme }) => theme.colors.color_base_regular};
    border: none;
    padding-bottom: 3px;
  }

  .ant-input-search-button {
    background-color: ${({ theme }) => theme.colors.color_base_regular};
    border: 1px solid ${({ theme }) => theme.colors.color_base_regular} !important;
    /* color: ${({ theme }) => theme.colors.color_text_placeholder}; */
    box-shadow: none;
    border-radius: 0 8px 8px 0 !important;
    padding-bottom: 2px !important;
    display: flex;
    align-items: center;
    &:hover {
      background-color: ${({ theme }) => theme.colors.color_base_regular};
      border: 1px solid ${({ theme }) => theme.colors.color_base_regular} !important;
      box-shadow: none !important;
    }
  }
`;
