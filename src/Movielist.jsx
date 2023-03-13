import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Navigate, useNavigate } from "react-router-dom";
import { API } from "../global";

export function Movielist() {
  const [movielist, setMovielist] = useState([]);
  const getMovies = () => {
    fetch(`${API}/movies`)
      .then((data) => data.json())
      .then((mvs) => setMovielist(mvs));
  };
  useEffect(() => getMovies(), []);

  const deleteMovie = async (id) => {
    await fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    });
    getMovies();
  };
  const navigate = useNavigate();
  return (
    <div>
      {/* <AddMovie movielist={movielist} setMovielist={setMovielist} /> */}
      <div className="movie-list">
        {movielist.map((mv) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            deletebutton={
              <IconButton
                color="error"
                sx={{ marginLeft: "auto" }}
                onClick={() => deleteMovie(mv.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
            editbutton={
              <IconButton
                color="secondary"
                sx={{ marginLeft: "auto" }}
                onClick={() => navigate(`/movies/edit/${mv.id}`)}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
