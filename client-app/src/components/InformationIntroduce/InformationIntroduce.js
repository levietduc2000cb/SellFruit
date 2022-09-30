import styles from "./InformationIntroduce.module.css";
import classNames from "classnames/bind";

function InformationIntroduce({
  title,
  children,
  imgLink = false,
  id = false,
}) {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("information_introduce")} id={id}>
      <h2 className={cx("information_introduce_title")}>{title}</h2>
      <div className={cx("information_introduce_content")}>{children}</div>
      {imgLink ? (
        <div className={cx("information_introduce_img_wrapper")}>
          <img
            src={imgLink}
            alt="information_introduce_img"
            className={cx("information_introduce_img")}
          ></img>
        </div>
      ) : null}
    </div>
  );
}

export default InformationIntroduce;
