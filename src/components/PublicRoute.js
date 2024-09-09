import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ element: Element }) {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <Element />
  ) : (
    <Navigate to="/" />
  );
}
