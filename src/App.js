import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';
import Main from './layouts/Main';

import './App.scss';
import QuizPage from './components/QuizPage/QuizPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path='/'
        element={<Main />}
      >
        <Route
          path='/'
          loader={() => fetch('https://openapi.programming-hero.com/api/quiz')}
          element={<Home />}
        />
        <Route
          path='/stats'
          element={<Stats />}
        />
        <Route
          path='/blog'
          element={<Blog />}
        />
        <Route
          path='/quiz/:quizId'
          loader={({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)}
          element={<QuizPage />}
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
