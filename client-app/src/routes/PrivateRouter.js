import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PathRoutes } from "./PathRoutes";

function PrivateRouter({ children }) {
  const { userLogin } = useSelector((state) => state.auth);

  return userLogin ? children : <Navigate to={PathRoutes.login}></Navigate>;
}
export default PrivateRouter;
