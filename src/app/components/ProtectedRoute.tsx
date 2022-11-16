import { Children } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: any;
  user: any;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  if (props.user) {
    return props.children;
  }
  return <Navigate to='/' />;
};

export default ProtectedRoute;
