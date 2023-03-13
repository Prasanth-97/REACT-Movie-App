import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect, useState } from "react";
import { API } from "../global";

export function Moviedetails({ movielist }) {
  const { id } = useParams();
  // const movie = movielist[id];
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, []);
  const styles = {
    color: movie.rating > 8.5 ? "green" : "crimson",
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="600"
        src={movie.trailer}
        title="Beast - Official Trailer | Thalapathy Vijay | Sun Pictures | Nelson | Anirudh | Pooja Hegde"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web- 
             share"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name} </h2>
          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
