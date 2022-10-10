import { useLoaderData } from 'react-router-dom';
import QuizCategory from '../QuizCategory/QuizCategory';

import './Home.scss';

const Home = () => {
  const categories = useLoaderData().data;
  console.log(categories)
  return (
    <div className='home-page'>
      <header className='header'>
        This is a Header
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