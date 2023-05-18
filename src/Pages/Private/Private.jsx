import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (!loading) {
    return user ? (
      <>{children}</>
    ) : (
      <Navigate to="/login" state={location} replace={true} />
    );
  } else {
    return (
      <>
        <div className="flex items-center justify-center py-10">
          <div
            className="radial-progress motion-safe:animate-spin"
            style={{
              "--value": "40",
              "--size": "10rem",
              "--thickness": "2rem",
            }}
          ></div>
        </div>
      </>
    );
  }
};

export default Private;
