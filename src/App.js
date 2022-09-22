import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './page/landingpage';
import Home from './page/home';
import DetailFilm from './page/detailFilm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/home/detailfilm' element={<DetailFilm/>} />
    </Routes>
    // <h1 className="text-3xl text-center bg-slate-700 font-bold underline">
    //   Hello world!
    // </h1> 
  );
}

export default App;
