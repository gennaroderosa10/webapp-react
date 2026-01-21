import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../../components/ReviewCard";

export default function MovieDetailPage() {
    const [movie, setMovie] = useState({});

    const { id } = useParams();
    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        axios
            .get(`${backendBaseUrl}/api/movies/${id}`)
            .then((resp) => {
                setMovie(resp.data);
            })
            .catch((err) => {

            });
    }, [id]);

    return (
        <>
            <section>
                <div className="container">
                    <h1>{movie.title}</h1>
                    <h3>Diretto da: {movie.director}</h3>
                    <h3>Anno di uscita: {movie.release_year}</h3>

                </div>

                <div className="container">
                    <p>{movie.abstract}</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>Recensioni</h2>
                    <div className="row g-3">
                        {movie.reviews.map((review) => (
                            <ReviewCard review={review} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}