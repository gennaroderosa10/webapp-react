import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <div className="card h-80" >
            <img src={`http://localhost:3000/img/${movie.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.abstract}</p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary" >Dettagli</Link>

            </div>
        </div>
    )
}