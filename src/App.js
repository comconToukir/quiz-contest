import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';
import Main from './layouts/Main';

import './App.scss';
import QuizPage from './components/QuizPage/QuizPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Main />}
        errorElement={<ErrorPage />}
        >
        <Route
          path='/'
          loader={() => fetch('https://openapi.programming-hero.com/api/quiz')}
          element={<Home />}
          
          />
        <Route
          path='/stats'
          loader={() => fetch('https://openapi.programming-hero.com/api/quiz')}
          element={<Stats />}
          />
        <Route
          path='/blog'
          loader={() => fetch('qAndA.json')}
          element={<Blog />}
          />
        <Route
          path='/quiz/:quizId'
          loader={({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)}
          element={<QuizPage />}
          errorElement={<ErrorPage />}
        />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
