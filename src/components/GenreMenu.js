import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  top: 60px;
  height: 100%;
  width: 250px;
  background-color: #111;
  padding: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-250px)')};
  transition: transform 0.3s ease-in-out;
`;

const genres = [
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 27, name: 'Horror' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
];

function GenreMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>☰</button>
      <MenuContainer isOpen={isOpen}>
        {genres.map((genre) => (
          <Link
            key={genre.id}
            to={`/genre/${genre.id}`}
            style={{ color: 'white', display: 'block', margin: '10px 0' }}
          >
            {genre.name}
          </Link>
        ))}
      </MenuContainer>
    </>
  );
}

export default GenreMenu;
