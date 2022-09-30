import styles from "./LoginForm.module.css";
import classNames from "classnames/bind";
import InputForm from "~/components/InputForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "~/redux/reduxSlices/authSlice";

function LoginForm() {
  let cx = classNames.bind(styles);

  const dispatch = useDispatch();

  let [infoLogin, setInfoLogin] = useState({
    account: "",
    password: "",
  });
  const handleInput = (e, inputName, inputIndex) => {
    setInfoLogin((preInfoRegister) => {
      return { ...preInfoRegister, [inputName]: e.target.value };
    });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(login(infoLogin));
  };
  return (
    <form className={cx("wrapper_form")} onSubmit={handleSubmitLogin}>
      <h1 className={cx("input_form_title")}>Đăng nhập</h1>
      <InputForm
        title="Nhập tên tài khoản"
        inputName="account"
        typeInput="text"
        valueInput={infoLogin.account}
        onHandleInput={handleInput}
      ></InputForm>
      <InputForm
        title="Nhập mật khẩu"
        inputName="password"
        typeInput="password"
        valueInput={infoLogin.password}
        onHandleInput={handleInput}
      ></InputForm>
      <button className={cx("register_btn")} type="submit">
        Đăng nhập
      </button>
    </form>
  );
}

export default LoginForm;
