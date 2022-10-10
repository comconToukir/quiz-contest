import { useLoaderData } from 'react-router-dom';
import QuizCategory from '../QuizCategory/QuizCategory';

import ReadingGirl from './21429.jpg';

import './Home.scss';

const Home = () => {
  const categories = useLoaderData().data;
  console.log(categories)
  return (
    <div className='container home-page'>
      <header className='header'>
        <img src={ReadingGirl} alt="" />
        <div>
          <h1>Take The Test To Enhance Your Knowledge And Sharpen Your Skills.</h1>
        </div>
      </header>
      <div className="quiz-categories">
        {
          categories.map(category => <QuizCategory key={category.id} category={category} />)
        }
      </div>
    </div>
  );
};

export default Home;