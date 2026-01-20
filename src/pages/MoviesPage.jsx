import { useEffect, useState } from "react"
import axios from "axios";



export default function MoviePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/movies")
            .then((resp) => {
                setMovies(resp.data.results);
            })
            .catch((err) => { });
    }, []);


    return (
        <>
            <h1>pagina film</h1>

            <ul>
                {movies.map((movie) => (<li key={movie.id}>{movie.title}</li>
                ))}

            </ul>
        </>
    )
}