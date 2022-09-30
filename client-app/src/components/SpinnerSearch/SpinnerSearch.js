import styles from "./SpinnerSearch.module.css";
import classNames from "classnames/bind";

function SpinnerSearch() {
  let cx = classNames.bind(styles);

  return (
    <div className={cx("lds-circle")}>
      <div></div>
    </div>
  );
}

export default SpinnerSearch;
