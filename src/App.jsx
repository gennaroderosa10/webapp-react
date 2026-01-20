import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import MoviePage from './pages/MoviesPage';

function App() {
  const nomeApp = "Movie App";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout nomeApp={nomeApp} />}>
            <Route element={<Home />} path='/' />
            <Route element={<MoviePage />} path='/movies' />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}


export default App
