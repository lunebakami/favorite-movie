import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { Form, Modal } from './styles';

type ModalProps = {
  show: boolean;
  closeModal: () => void;
  setMovies: (movies: Movie[]) => void;
};

const AddMovieModal: React.FC<ModalProps> = ({
  show,
  closeModal,
  setMovies,
}) => {
  const [name, setName] = useState('');
  const [director, setDirector] = useState('');
  const [country, setCountry] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [img, setImg] = useState('');

  const defaultImage =
    'https://media.istockphoto.com/id/911590226/pt/vetorial/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition.jpg?s=612x612&w=0&k=20&c=V5K1X7qOwfBk6vH0YIv2Lv1B-tepCnsk5j9YPIETCeg=';

  const [movies] = useLocalStorage('movies');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !director.trim() ||
      !country.trim() ||
      !releaseDate.trim()
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    const newMovie = {
      name,
      director,
      country,
      releaseYear: releaseDate,
      img: !img ? defaultImage : img,
    };

    movies.push(newMovie);

    setMovies(movies);

    closeModal();
  };

  return (
    <>
      {show && (
        <Modal>
          <div className="header">
            <span>
              <h3>Add New Movie</h3>
            </span>
            <button onClick={closeModal}>x</button>
          </div>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="director">Diretor</label>
            <input
              type="text"
              name="director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
            <label htmlFor="releaseDate">Ano de Lançamento</label>
            <input
              type="text"
              name="releaseDate"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
            />
            <label htmlFor="country">País</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <label htmlFor="img">Link da Imagem</label>
            <input
              type="text"
              name="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <button type="submit">Add</button>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default AddMovieModal;
