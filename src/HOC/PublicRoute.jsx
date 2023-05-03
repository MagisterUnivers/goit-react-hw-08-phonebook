import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsOnline } from '../redux/selectors';

// const publicRoutes = ['/login', '/'];

export const PublicRoute = ({ children }) => {
  // const location = useLocation();
  // const fromPage = location.state?.from.pathname || '/';
  // const isPublicRoute = publicRoutes.includes(fromPage);
  const isOnline = useSelector(selectIsOnline);

  if (isOnline) {
    return <Navigate to="/contacts" />;
  }
  return children;
};

// High Order Components
