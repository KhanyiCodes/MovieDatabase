import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #111;
  padding: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-right: 20px;
`;

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Nav>
      <NavContent>
        <Link to="/" style={{ color: 'red', textDecoration: 'none', fontSize: '24px' }}>
          MovieDB
        </Link>
        <SearchInput
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </NavContent>
    </Nav>
  );
}

export default Navbar;
