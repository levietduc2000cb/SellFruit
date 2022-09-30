import styles from "./BannerMain2.module.css";
import classNames from "classnames/bind";
import bannerMain from "~/asset/image/banner.JPG";

function BannerMain2() {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("banner-main_2")}>
      <div className={cx("banner-main_2_wrapper")}>
        <img src={bannerMain} alt="" className={cx("banner-main_img")}></img>
      </div>
    </div>
  );
}

export default BannerMain2;
