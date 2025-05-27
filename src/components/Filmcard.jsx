import MoviesList from "../data/moviesList";

export default function Filmcard() {
  {
    MoviesList.map((movie) => {
      return (
        <div className="card">
          <div className="card-title">{movie.title}</div>
          <div className="card-content">{movie.genre}</div>
        </div>
      );
    });
  }
}
