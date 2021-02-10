import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "False") {
      setError({ show: true, msg: data.Error });
      setLoading(false);
    } else {
      setMovie(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);
  if (isLoading) {
    return <dix className="loading"></dix>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Language: language,
    Actors: actors,
    Runtime: runtime,
  } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <h3>{runtime}</h3>
        <p>{plot}</p>
        <h4>{actors}</h4>
        <h4>{year}</h4>
        <h4>{language}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
