import styles from "./NotFound.module.css";
import classNames from "classnames/bind";
import NotFoundImg from "~/asset/image/NotFound.jpg";

function NotFound() {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("page_not_found")}>
      <img
        src={NotFoundImg}
        alt="img_not_found"
        className={cx("img_not_found")}
      ></img>
    </div>
  );
}

export default NotFound;
