import React, { useContext } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { Menu, AvatarMember, Dropdown, Item } from "ui";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import KusaLogo from "images/KusaLogo";
const InnerNav = (props) => {
  const theme = useContext(ThemeContext);
  const history = useHistory();
  const user = { user_name: "Min Chang Kim", user_email: "mkim525@wisc.edu" };
  const loginState = useSelector((state) => state.loginState);
  const dispatch = useDispatch();
  const menu = (
    <Menu>
      <MenuItem onClick={() => history.push("/settings/myaccount/")}>
        <UserInfoBox>
          <UserImg>
            <AvatarMember
              member={user}
              size={32}
              icon={<UserOutlined />}
            ></AvatarMember>
          </UserImg>
          <UserTextBox>
            <UserInfoText>{user.user_name}</UserInfoText>
            <UserInfoText>{user.user_email}</UserInfoText>
          </UserTextBox>
        </UserInfoBox>
      </MenuItem>
      <MenuItem onClick={() => history.push("/settings/myaccount/")}></MenuItem>
      <MenuItem onClick={() => history.push("/settings/email/")}></MenuItem>
      <MenuItem
        onClick={() => {
          // logoutAxios().then(() => {
          //   dispatch(changeLoginState(false));
          //   window.localStorage.setItem("checked", "false");
          //   window.location.reload();
          // });
        }}
        style={{ color: theme.colors.color_state_danger_regular }}
      >
        Log Out
      </MenuItem>
    </Menu>
  );

  const handlePageChange = (path) => {
    history.push(`/${path}`);
  };

  return (
    <InnerNavContainer pathname={props.location.pathname}>
      <TopContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <PageNavigator onClick={() => handlePageChange("home")}>
            Home
          </PageNavigator>
          <PageNavigator onClick={() => handlePageChange("aboutus")}>
            About Us
          </PageNavigator>
          <PageNavigator onClick={() => handlePageChange("organizations")}>
            Organizations
          </PageNavigator>
          {loginState ? (
            <AvatarDropdown
              overlay={menu}
              placement="bottomRight"
              trigger={["click"]}
            >
              <div>
                <AvatarMember member={user} size={32} icon={<UserOutlined />} />
              </div>
            </AvatarDropdown>
          ) : (
            <>
              <PageNavigator onClick={() => handlePageChange("signup")}>
                Sign Up
              </PageNavigator>
              <PageNavigator onClick={() => handlePageChange("login")}>
                Login
              </PageNavigator>
            </>
          )}
        </RightContainer>
      </TopContainer>
      <BottomContainer>
        <LogoContainer>
          <KusaLogo onClick={() => handlePageChange("home")} />
        </LogoContainer>
        {props.location.pathname === "/home" && (
          <LogoTextContainer>
            The hub for Korean Undergraduate Students and Organizations
          </LogoTextContainer>
        )}
      </BottomContainer>
    </InnerNavContainer>
  );
};

export default withRouter(InnerNav);

const LogoContainer = styled.div`
  cursor: pointer;
`;

const LogoTextContainer = styled.div`
  margin-top: 21px;
`;

const PageNavigator = styled.div`
  margin-right: 24px;
  cursor: pointer;
`;

const AvatarDropdown = styled(Dropdown)``;

const InnerNavContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  height: ${({ pathname }) => (pathname === "/home" ? 183 : 130)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.color_white};
  box-shadow: ${({ theme }) => theme.elevations.elevation_medium};
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  width: 100%;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Item)`
  user-select: none;
`;

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
`;

const UserImg = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;

const UserTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfoText = styled.div`
  :nth-child(2) {
    color: ${({ theme }) => theme.colors.color_text_light};
    font-size: ${({ theme }) => theme.fontSizes.txt_smallest};
  }
`;
