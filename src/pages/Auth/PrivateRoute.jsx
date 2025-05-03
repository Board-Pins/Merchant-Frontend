import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import LoadingScreen from "../../components/common/LoadingScreen";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check both localStorage and Cookies for the token
    const localToken = localStorage.getItem("accessToken");
    const cookieToken = Cookies.get('accessToken');
    const hasToken = !!localToken || !!cookieToken;

    setIsAuthenticated(hasToken);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
