import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsOnline } from '../redux/selectors';

// const publicRoutes = ['/login', '/'];

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const fromPage = location.state?.from.pathname || '/contacts';
  // const isPublicRoute = publicRoutes.includes(fromPage);
  const isOnline = useSelector(selectIsOnline);

  if (isOnline) {
    return <Navigate to={fromPage} />;
  }
  return children;
};

// High Order Components
