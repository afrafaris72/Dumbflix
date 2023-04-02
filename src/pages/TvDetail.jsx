import React, { useEffect,useState } from "react";
import dummyJoker from '../Images/film/tv-1.png'
import episode from '../Images/Rectangle313.png'
import player2 from '../Images/Player2.png'
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function TvDetail() {

  const [isLogin, setIsLogin] =useState(false)

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if(user) setIsLogin(true)
    else {
      setIsLogin(false)
      navigate('/')
    }
  }, [user])

  return (
    <>
      <div className="d-flex justify-content-center img-fluid">
        <iframe
          width="1000"
          height="500"
          src={player2}
          title="Joker"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

    <div className="d-flex justify-content-start sectionMain mt-5 flex-column flex-md-row">
      <div className="card mb-3 bg-black text-white" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={dummyJoker} className="img-fluid rounded-start imgDummyDetail" alt="Series" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-2">The Witcher</h5>
              <div className="mb-4 mt-2">
              <small className="text-muted">2019</small> 
              <small className='border border-secondary ms-2 px-1 ms-3 py-1 rounded text-muted tv-s shadow'>TV Series</small>
              </div>
              <p className="card-text pDetailMain">
              In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cardEpisode">
        <img src={episode} alt="episode" className="imgEpisode" />
        <small className="text-light">The Witcher : Episode 1</small>
      </div>
    </div>
    </>
  );
}

export default TvDetail;
