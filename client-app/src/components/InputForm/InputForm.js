import styles from "./InputForm.module.css";
import classNames from "classnames/bind";

function InputForm({
  title,
  inputName,
  inputIndex = false,
  typeInput,
  valueInput,
  messageValidate = "",
  onHandleInput,
  patternValue,
}) {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("input_wrapper")}>
      <label htmlFor={inputName}>{title}</label>
      <input
        spellCheck="false"
        id={inputName}
        type={typeInput}
        value={valueInput}
        pattern={patternValue}
        className={cx("input_form")}
        placeholder={title}
        onChange={(e) => {
          onHandleInput(e, inputName, inputIndex);
        }}
        required
        autoComplete="on"
      ></input>
      {messageValidate.length > 0 && (
        <p className={cx("error_message_input")}>{messageValidate}</p>
      )}
    </div>
  );
}

export default InputForm;
