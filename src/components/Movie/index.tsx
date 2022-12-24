import React from 'react';
import { Container } from './styles';

type MovieProps = {
  name: string;
  director: string;
  country: string;
  image?: string;
  releaseYear: string;
};

const Movie: React.FC<MovieProps> = (props: MovieProps) => {
  return (
    <Container>
      <img src={props.image} />
      <div id="movie-info">
        <span>{props.name}</span>
        <span>{props.director}</span>
        <span>{props.country}</span>
        <span>{props.releaseYear}</span>
      </div>
    </Container>
  );
};

export default Movie;
