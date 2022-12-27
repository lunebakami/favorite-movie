import { useCallback, useEffect, useState } from 'react';
import AddMovieModal from './components/AddMovieModal';
import Movie from './components/Movie';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AddButton, Container, GlobalStyle } from './styles';
import { initialMovies } from './utils/initialMovies';
import { sortMoviesByYear } from './utils/sortMovies';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useLocalStorage('movies', initialMovies);

  const [orderedMovies, setOrderedMovies] = useState<Array<Movie>>([]);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const loadMovies = useCallback(() => {
    const newOrderMovies = sortMoviesByYear(movies);

    setOrderedMovies(newOrderMovies);
  }, [movies]);

  useEffect(() => {
    console.log('movies changed');

    loadMovies();
  }, [orderedMovies]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>My favorite movies</h1>
        <AddButton onClick={openModal}>+</AddButton>
        <Container>
          {orderedMovies.map((movie: Movie) => (
            <Movie
              country={movie.country}
              name={movie.name}
              director={movie.director}
              releaseYear={movie.releaseYear}
              image={movie.img}
            />
          ))}
        </Container>
      </div>
      <AddMovieModal
        setMovies={setMovies}
        show={showModal}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
