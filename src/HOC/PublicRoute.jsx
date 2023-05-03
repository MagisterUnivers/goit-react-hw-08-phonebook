import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsOnline } from '../redux/selectors';

const publicRoutes = ['/login', '/'];

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isOnline = useSelector(selectIsOnline);
  const fromPage = location.state?.from.pathname || '/';
  const isPublicRoute = publicRoutes.includes(fromPage);
  if (isOnline && !isPublicRoute) {
    return <Navigate to={fromPage} />;
  }
  return children;
};
