import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import MoviePage from './pages/MoviesPage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  const nomeApp = "Movie App";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout nomeApp={nomeApp} />}>
            <Route element={<Home />} path='/' />
            <Route element={<MoviePage />} path='/movies' />
            <Route element={<MovieDetailPage />} path="/movies/:id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}


export default App
