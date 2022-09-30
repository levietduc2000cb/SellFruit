import styles from "./RegisterForm.module.css";
import classNames from "classnames/bind";
import InputForm from "~/components/InputForm";
import listInputRegister from "./listInputRegister";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registser } from "~/redux/reduxSlices/authSlice";

function RegisterForm() {
  let cx = classNames.bind(styles);
  const dispatch = useDispatch();

  let [infoRegister, setInfoRegister] = useState([...listInputRegister]);
  let checkInput = [];

  const handleInput = (e, inputName, inputIndex) => {
    setInfoRegister((preInfoRegister) => {
      preInfoRegister[inputIndex].value = e.target.value;
      preInfoRegister[inputIndex].messageValidate = "";
      return [...preInfoRegister];
    });
  };

  //Kiểm tra input nhập vào
  const handleValidate = () => {
    checkInput = [...infoRegister];
    checkInput.forEach((input, index) => {
      if (input.validate.length && input.value.length < input.validate.length) {
        input.messageValidate = `${input.title} tối thiểu ${input.validate.length} kí tự`;
      }
    });
    let checkErrValidate = false;
    for (let i = 0; i < checkInput.length; i++) {
      if (checkInput[i].messageValidate.length > 0) {
        checkErrValidate = true;
        break;
      }
    }
    return checkErrValidate;
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (handleValidate() === true) {
      //Nếu có lỗi trong quá trình nhập
      setInfoRegister([...checkInput]);
    } else {
      let data = {};
      infoRegister.forEach((input) => {
        data[input.inputName] = input.value;
      });
      dispatch(registser(data));
    }
  };

  return (
    <form className={cx("wrapper_form")} onSubmit={handleSubmitRegister}>
      <h1 className={cx("input_form_title")}>Đăng ký</h1>

      {infoRegister.map((input, index) => {
        return (
          <InputForm
            key={index}
            title={input.title}
            inputName={input.inputName}
            inputIndex={index}
            typeInput={input.typeInput}
            valueInput={input.value}
            messageValidate={input.messageValidate}
            onHandleInput={handleInput}
          ></InputForm>
        );
      })}

      <button className={cx("register_btn")} type="submit">
        Đăng ký
      </button>
    </form>
  );
}

export default RegisterForm;
