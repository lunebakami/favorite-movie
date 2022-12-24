import './App.css';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <div>
        <Movie
          country="Brasil"
          name={'Cidade de Deus'}
          director={'N sei'}
          releaseYear={'2001'}
          image={
            'https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus.jpg'
          }
        />
      </div>
    </div>
  );
}

export default App;
