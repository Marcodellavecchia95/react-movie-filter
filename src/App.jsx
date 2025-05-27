import MoviesList from "./data/moviesList";
import Filmcard from "./components/Filmcard";
import { useState, useEffect } from "react";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovie] = useState(MoviesList);

  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    let filtered = MoviesList;

    if (selectedGenre) {
      filtered = filtered.filter((movie) => movie.genre === selectedGenre);
    }

    if (nameFilter) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    setFilteredMovie(filtered);
  }, [nameFilter, selectedGenre]);

  return (
    <>
      <div className="container">
        <input
          value={nameFilter}
          onChange={(e) => {
            setNameFilter(e.target.value);
          }}
          type="text"
          className="my-4"
          placeholder="Ricerca film per titolo..."
        />
        <h1>{JSON.stringify(selectedGenre)}</h1>
        <select
          value={selectedGenre}
          onChange={(e) => {
            setSelectedGenre(e.target.value);
          }}
          className="form-select"
        >
          <option value="" disabled>
            Seleziona Genere
          </option>
          {MoviesList.map((movie, index) => {
            return <option key={index}>{movie.genre}</option>;
          })}
        </select>

        <div className="row mt-5 gap-3">
          {filteredMovies.map((filteredMovie, index) => {
            return (
              <Filmcard
                title={filteredMovie.title}
                genre={filteredMovie.genre}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
