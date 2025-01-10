import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-top: 60px;
  margin-left: 250px;
`;

const MovieCard = styled.div`
  position: relative;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

function Home() {
  const [movies, setMovies] = useState([]);
  const API_KEY = '5bf1fa1d63ab46a808537d46fbc96faa';

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <MovieGrid>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </MovieCard>
      ))}
    </MovieGrid>
  );
}

export default Home;
