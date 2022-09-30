import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PathRoutes } from "./PathRoutes";

function PrivateAdminRouter({ children }) {
  const { userLogin, userInfo } = useSelector((state) => state.auth);
  return userLogin && userInfo.admin ? (
    children
  ) : (
    <Navigate to={PathRoutes.home}></Navigate>
  );
}

export default PrivateAdminRouter;
