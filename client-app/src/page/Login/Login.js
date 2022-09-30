import styles from "./Login.module.css";
import classNames from "classnames/bind";

import LoginForm from "~/components/LoginForm";
import Spinner from "~/components/Spinner";
import ShowNotification from "~/components/ShowNotification";
import Toast from "~/components/Toast";

import { VscError } from "react-icons/vsc";
import { BiErrorCircle } from "react-icons/bi";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let cx = classNames.bind(styles);

  const { loading, error, message, userLogin } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (userLogin === true) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLogin]);

  return (
    <div className={cx("login_page")}>
      <LoginForm></LoginForm>
      {loading && (
        <ShowNotification>
          <Spinner></Spinner>
        </ShowNotification>
      )}
      {!loading && !error && message.length > 0 ? (
        <ShowNotification>
          <Toast
            text={message}
            typeToast="warning"
            IconToast={BiErrorCircle}
          ></Toast>
        </ShowNotification>
      ) : null}
      {!loading && error && message.length > 0 ? (
        <ShowNotification>
          <Toast text={message} typeToast="error" IconToast={VscError}></Toast>
        </ShowNotification>
      ) : null}
    </div>
  );
}
export default Login;
