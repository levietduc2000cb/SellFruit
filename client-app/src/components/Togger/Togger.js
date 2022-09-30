import styles from "./Togger.module.css";
import classNames from "classnames/bind";
import { BsTelephoneFill } from "react-icons/bs";

function Togger() {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("togger_wrapper")}>
      <button>Chat Facebook</button>
      <button>
        0986.989.626
        <div className={cx("togger_icon")}>
          <BsTelephoneFill />
        </div>
      </button>
    </div>
  );
}

export default Togger;
