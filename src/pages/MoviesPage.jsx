import { useEffect, useState } from "react"
import axios from "axios";
import MovieCard from "../../components/MovieCard.jsx";



export default function MoviePage() {
    const [movies, setMovies] = useState([]);

    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        axios
            .get(`${backendBaseUrl}/api/movies`)
            .then((resp) => {
                setMovies(resp.data.results);
            })
            .catch((err) => { });
    }, []);


    return (
        <>
            <section className="container">
                <h1>pagina film</h1>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {movies.map((movie) => (
                        <div className="col " key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}