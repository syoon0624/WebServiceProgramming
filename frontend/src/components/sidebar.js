import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import styled, { keyframes } from 'styled-components';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';

const boxFade = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
`;

const boxFadeIn = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 0%;
  }
`;

const Navbar = styled.div`
  height: 80px;
  display: flex;
  border-bottom: 2px solid #868e96;
  justify-items: center;
  align-items: center;
  h1 {
    padding-left: 20px;
    font-size: 40px;
    color: #5c7cfa;
  }
`;

const NavActive = styled.nav`
  left: 0;
  width: 250px;
  height: 110vh;
  display: flex;
  position: fixed;
  top: 0;
  animation: ${boxFadeIn} 0.5s;
`;

const NavMenu = styled.nav`
  background-color: #060b26;
  width: 250px;
  height: 110vh;
  display: flex;
  position: fixed;
  top: 0;
  animation: ${boxFade} 1s;
  left: -100%;
`;

const NavMenuItems = styled.ul`
  margin: 0;
  background-color: #060b26;
  width: 100%;
`;

const NavbarToggle = styled.li`
  background-color: #060b26;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: -25px;
`;

const NavText = styled.li`
  a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 4px;
  }
  :hover {
    background-color: #1a83ff;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
`;

const Span = styled.span`
  margin-left: 16px;
`;

const SLink = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: '#5c7cfa' }}>
        {/* 네비게이션 토글 코드*/}
        <Navbar>
          <SLink to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </SLink>
          <h1>Yoon's Blog</h1>
        </Navbar>
        {sidebar ? (
          <NavMenu sidebar={sidebar}>
            <NavMenuItems onClick={showSidebar}>
              <NavbarToggle>
                <SLink to="#">
                  <AiIcons.AiOutlineClose />
                </SLink>
              </NavbarToggle>
              {/* SidebarData를 순서대로 담기*/}
              {SidebarData.map((item, index) => {
                return (
                  <NavText key={index}>
                    <Link to={item.path}>
                      {item.icon}
                      <Span>{item.title}</Span>
                    </Link>
                  </NavText>
                );
              })}
            </NavMenuItems>
          </NavMenu>
        ) : (
          <NavActive sidebar={sidebar}>
            <NavMenuItems onClick={showSidebar}>
              <NavbarToggle>
                <SLink to="#">
                  <AiIcons.AiOutlineClose />
                </SLink>
              </NavbarToggle>
              {/* SidebarData를 순서대로 담기*/}
              {SidebarData.map((item, index) => {
                return (
                  <NavText key={index}>
                    <Link to={item.path}>
                      {item.icon}
                      <Span>{item.title}</Span>
                    </Link>
                  </NavText>
                );
              })}
            </NavMenuItems>
          </NavActive>
        )}
      </IconContext.Provider>
    </>
  );
}
export default Sidebar;
