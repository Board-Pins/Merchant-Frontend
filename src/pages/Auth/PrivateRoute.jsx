import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/common/LoadingScreen";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ✅ fix typo here

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        console.log("PrivateRoute checking token:", !!accessToken);
        setIsAuthenticated(!!accessToken);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      } finally {
        setTimeout(() => setIsLoading(false), 300);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    console.log("Not authenticated, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // ✅ render nested routes
};

export default PrivateRoute;
