import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import Lightrope from '../Lightrope/Lightrope';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MoviesPage/MovieDetailsPage/MovieDetailsPage'),
);

export default function App() {
  return (
    <>
      <Lightrope />
      <Container>
        <Navigation />

        <Suspense
          fallback={
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          }
        >
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/movies" exact>
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
