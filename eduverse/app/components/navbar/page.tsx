// components/Navbar.tsx
import React from 'react';
import { FaHome, FaTrophy, FaUsers, FaCog } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarContainer = styled.footer`
  background-color: #2d2d3d;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 16px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <IconButton>
        <FaHome size={24} />
        <span>Home</span>
      </IconButton>
      <IconButton>
        <FaTrophy size={24} />
        <span>Quest</span>
      </IconButton>
      <IconButton>
        <FaUsers size={24} />
        <span>Social</span>
      </IconButton>
      <IconButton>
        <FaCog size={24} />
        <span>Setting</span>
      </IconButton>
    </NavbarContainer>
  );
};

export default Navbar;
