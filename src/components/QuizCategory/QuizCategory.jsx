import { ArrowRightIcon } from '@heroicons/react/24/solid'

import './QuizCategory.scss';

const QuizCategory = ({ category: { name, logo, total } }) => {
  return (
    <div className='category'>
      <img src={logo} alt={`quiz category ${name}`} />
      <div className='category-info'>
        <span className='name'>{name}</span>
        <span className='total'>{total}</span>
      </div>
        <button>
          Take The Quiz
          <ArrowRightIcon className='arrow' />
          </button>
    </div>
  );
};

export default QuizCategory;