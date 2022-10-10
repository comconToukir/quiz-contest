import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

import './QuizCategory.scss';

const QuizCategory = ({ category: { id, name, logo, total } }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/quiz/${id}`);
  return (
    <div className='category'>
      <img src={logo} alt={`quiz category ${name}`} />
      <div className='category-info'>
        <span className='name'>{name}</span>
        <span className='total'>Q{total}</span>
      </div>
        <button onClick={handleClick}>
          Take The Quiz
          <ArrowRightIcon className='arrow' />
          </button>
    </div>
  );
};

export default QuizCategory;