import { useNavigate } from 'react-router-dom';
import './ErrorPage.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/');
  
  return (
    <div className="error-page">
      <h1>404 Route Not Found !!!</h1>
      <button onClick={handleNavigate}>Go To Home</button>
    </div>
  );
};

export default ErrorPage;