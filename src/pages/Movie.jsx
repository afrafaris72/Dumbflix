import React from "react";
import MoviesContainer from "../components/MovieContainer";
import bgJoker from '../Images/hero/joker-title.png'

const Movie = () => {
  return (
    <>
      <div>
        <div className="background-hero-movie container-fluid mx-auto">
          <div className="hero ms-5 text-light d-flex flex-column align-content-center justify-content-center">
          <img className="bgjoker" src={bgJoker} />
            <p className="">
            In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
            </p>
            <div className="mb-4">
              <span>2019</span>
              <button className="btn btn-outline-light ms-2 py-1 tv-s shadow">
                Movie
              </button>
            </div>
            <div>
              <button className="btn btn-watch text-light py-2 px-5 fs-4 shadow">
                WATCH NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
      <MoviesContainer />
    </>
  );
};

export default Movie;
