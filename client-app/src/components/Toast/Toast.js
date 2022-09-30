import classNames from "classnames/bind";
import styles from "./Toast.module.css";

function Toast({ text, typeToast, IconToast }) {
  let cx = classNames.bind(styles);
  let Icon = IconToast;
  return (
    <div className={cx("toast_container", typeToast)}>
      <div className={cx("toast_container_icon_wrapper")}>
        <Icon></Icon>
      </div>
      <p className={cx("toast_container_text")}>{text}</p>
    </div>
  );
}

export default Toast;
