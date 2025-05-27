export default function Filmcard({ title, genre }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-content">{genre}</div>
    </div>
  );
}
