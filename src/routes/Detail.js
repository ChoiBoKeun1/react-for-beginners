import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <p>{movie.description_full}</p>
      <ul>
        {movie.genres &&
          movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  );
}
export default Detail;
