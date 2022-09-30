import styles from "./Spinner.module.css";
import classNames from "classnames/bind";

function Spinner() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("lds-spinner")}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
