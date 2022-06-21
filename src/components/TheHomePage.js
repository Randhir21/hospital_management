import styled from "styled-components";
import { Route, Switch } from "react-router";
import OPD from "./OPD";
import IPD from "./IPD";
import Dashboard from "./Dashboard";
import Receipt from "./Receipt";
import MIS from "./MIS";
import IPDBilling from "./IPDBilling";

import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";
//import Ipd from "./Ipd";
import Test from "./Test";
const TheHomePage = () => {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const toggleSideBar = () => {
    setSideBarStatus(!sideBarStatus);
  };

  return (
    <HomePage>
      <SideBar open={sideBarStatus}>
        <Logo>
          <img src="/images/logo.jpg" alt="" />
        </Logo>
        <Link to="/">
          <p>OPD</p>
        </Link>
        <Link to="/ipd">
          <p>IPD</p>
        </Link>
        <Link to="/dashboard">
          <p>Dashboard</p>
        </Link>
        <Link to="/ipdbilling">
          <p>IPD Billing</p>
        </Link>
        <Link to="/receipt">
          <p>Receipt</p>
        </Link>
        <Link to="/mis">
          <p>MIS</p>
        </Link>
      </SideBar>
      <RightContent>
        <NavBar>
          {sideBarStatus ? (
            <Close onClick={toggleSideBar} />
          ) : (
            <HamburgerMenu onClick={toggleSideBar} />
          )}
          <ActionMenu>
            <AiOutlineSearch className="icons" />
            <AiOutlineBell className="icons" />
            <AiOutlineUser className="icons" />
          </ActionMenu>
        </NavBar>
        <MainContent>
          <Switch>
            <Route exact path="/" component={OPD} />
            <Route exact path="/ipd" component={IPD} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/ipdbilling" component={IPDBilling} />
            <Route exact path="/receipt" component={Receipt} />
            <Route exact path="/mis" component={MIS} />
          </Switch>
        </MainContent>
      </RightContent>
    </HomePage>
  );
};

//comment
export default TheHomePage;

const HomePage = styled.div`
  width: 100%;
  display: flex;
`;

const Logo = styled.div`
  text-align: center;
  img {
    height: 100px;
    width: 100px;
    object-fit: contain;
    object-position: center;
  }
`;

const SideBar = styled.div`
  display: ${(props) => (props.open ? "" : "none")};
  flex: 1;
  /* background-color: blue; */
  height: 100vh;
  p {
    padding: 8px 12px;
    margin: 4px 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  p:first-of-type {
    background-color: #f2167d;
    border-radius: 4px;
    color: white;
  }
  P:hover {
    background-color: #f2167d;
    border-radius: 4px;
    color: white;
  }
`;

const RightContent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.div`
  height: 50px;
  /* background-color: yellow; */
  /* background-color: rgba(108, 99, 255, 1); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

const HamburgerMenu = styled(AiOutlineMenu)`
  font-size: 20px;
`;

const Close = styled(AiOutlineClose)`
  font-size: 20px;
`;

const ActionMenu = styled.div``;

const MainContent = styled.div`
  background-color: #f2f2f2;
  height: calc(100vh - 50px);
`;
