import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tvshows' element={<TVShows></TVShows>}></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>
          {/* <Route path="/addfilm" element={<AddFilmAdmin />} /> */}
      </Routes> 
    </>
  );
}

export default App;
