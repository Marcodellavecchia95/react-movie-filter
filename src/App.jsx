import MoviesList from "./data/moviesList";
import Filmcard from "./components/Filmcard";
import { useState, useEffect } from "react";
import moviesList from "./data/moviesList";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const filteredMovies =
    selectedGenre === ""
      ? MoviesList
      : MoviesList.filter((movie) => movie.genre === selectedGenre);
  return (
    <>
      <div className="container">
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
