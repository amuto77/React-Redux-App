import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchFilms } from "../store/actions/FilmActions";

const Films = (props) => {
  useEffect(() => {
    props.fetchFilms();
  }, []);
  
  return (
    <section>
      <h1>Studio Ghibli Movies</h1>
      {props.isLoading ? <h4>Loading films now...</h4> : null}
      {props.error ? (
        <p style={{ color: "red" }}>
          We're having an issue. Oops! {props.error}
        </p>
      ) : null}
      {props.films.length > 0 ? (
        <div>
          {props.films.map((film) => (
            <h2 key={film.title}>{film.title}</h2>
          ))}
        </div>
      ) : null}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchFilms })(Films);
