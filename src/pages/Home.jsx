import React from 'react'
import MovieContainer from '../components/MovieContainer'
import SeriesContainer from '../components/SeriesContainer'
import bgwitcher from '../Images/thewitcher-title.png'


function Home() {
  return (
    <>
    <div>
      <div className='background-hero-home container-fluid mx-auto'>
        <div className='hero ms-5 text-light d-flex flex-column align-content-center justify-content-center'>
        <img className='object-fit' src={bgwitcher} />
            <p className=''>Geralt of Rivia, a solitary monster hunter, struggles to find his place in
a world where people often prove more wicked than beast</p>
            <div className='mb-4'>
              <span>2019</span> 
              <button className='btn btn-outline-light ms-2 py-1 tv-s shadow'>TV Series</button>
            </div>
            <div>
            <button className='btn btn-watch text-light py-2 px-5 fs-4 shadow'>WATCH NOW!</button>
            </div>
        </div>
      </div>
    </div>
  
  <div className='sectionSeries'>
    <SeriesContainer />
    <MovieContainer />
  </div>
    </>
  )
}

export default Home