import MoviesList from "./data/moviesList";
import Filmcard from "./components/Filmcard";

export default function App() {
  return (
    <>
      <div className="container">
        <select className="form-select">
          <option value="" disabled>
            Seleziona Genere
          </option>
          {MoviesList.map((movie, index) => {
            return (
              <option value="" key={index}>
                {movie.genre}
              </option>
            );
          })}
        </select>
        <div className="row mt-5 gap-3">
          {MoviesList.map((movie, index) => {
            return (
              <div key={index} className="card">
                <div className="card-body">
                  <div className="card-title">{movie.title}</div>
                  <div className="card-text">{movie.genre}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
