// components/Navbar.tsx
import React from 'react';
import { FaHome, FaTrophy, FaUsers, FaCog } from 'react-icons/fa';
import styled from 'styled-components';
import Link from 'next/link';
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
        <Link href = "/home">Home</Link >
      </IconButton>
      <IconButton>
        <FaTrophy size={24} />
        <Link href = "">Quest</Link >
      </IconButton>
      <IconButton>
        <FaUsers size={24} />
        <Link href = "">Social</Link>
      </IconButton>
      <IconButton>
        <FaCog size={24} />
        <Link href = "/setting">Setting</Link>
      </IconButton>
    </NavbarContainer>
  );
};

export default Navbar;
