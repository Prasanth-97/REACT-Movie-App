import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import { API } from "../global";


const formValidationSchema = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().min(4).url(),
  rating: yup.number().required().min(0).max(10),
  summary: yup.string().required().min(20),
  trailer: yup.string().required().min(4).url(),
});

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [summary, setSummary] = useState("");
  // const [rating, setRating] = useState("");
  // const [trailer, setTrailer] = useState("");

  const {handleSubmit, handleChange , handleBlur , values , touched ,errors} = useFormik({
    initialValues : {
      name: "",
      poster: "",
      summary: "",
      rating: "",
      trailer: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (newMovie) => { addMovie(newMovie)}
  });
  const navigate = useNavigate();
 const addMovie = async (newMovie) => {
 await fetch(`${API}/movies`,
{method : "POST" ,
body : JSON.stringify(newMovie),
headers:{"Content-Type": "application/json",},
}) 
 navigate("/movies")
};
  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        label="Name"
        variant="outlined"
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />
      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.poster}
        label="Poster"
        variant="outlined"
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />
      
      <TextField
       name="summary"
       onChange={handleChange}
       onBlur={handleBlur}
       value={values.summary}
        label="Summary"
        variant="outlined"
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : null}
      />
      
      <TextField
       name="rating"
       onChange={handleChange}
       onBlur={handleBlur}
       value={values.rating}
        label="Rating"
        variant="outlined"
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}
      />
      
      <TextField
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trailer}
        label="Trailer"
        variant="outlined"
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />
      
      <Button
        variant="contained"
       type="submit"
          // setMovielist([...movielist, newMovie]);
      >
        Add movie
      </Button>
    </form>
  );
}
