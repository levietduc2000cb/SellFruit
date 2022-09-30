import styles from "./ProductDetailDesAndEvalue.module.css";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PathRoutes } from "~/routes/PathRoutes";
import { useSelector } from "react-redux";
import Comments from "~/components/Comments";

function ProductDetailDesAndEvalue({ describe, idItem }) {
  const { userLogin } = useSelector((state) => state.auth);

  let desContent = useRef("");
  let rateContent = useRef("");

  const [showTop, setShowTop] = useState(true);

  const showDes = () => {
    desContent.current.style.display = "block";
    rateContent.current.style.display = "none";
    setShowTop(true);
  };

  const showRate = () => {
    rateContent.current.style.display = "block";
    desContent.current.style.display = "none";
    setShowTop(false);
  };

  let cx = classNames.bind(styles);

  return (
    <div className={cx("product_detail_container_section_2")}>
      <div className={cx("product_detail_container_section_2_wrapper")}>
        <div className={cx("product_detail_container_section_2__top")}>
          <div
            onClick={showDes}
            className={cx("product_detail_container_section_2__top_des", {
              product_detail_container_section_2__top_active: showTop,
            })}
          >
            Mô tả
          </div>
          <div
            onClick={showRate}
            className={cx("product_detail_container_section_2__top_rate", {
              product_detail_container_section_2__top_active: !showTop,
            })}
          >
            Đánh giá
          </div>
        </div>
        <div
          ref={desContent}
          className={cx("product_detail_container_section_2_des_context")}
        >
          <div>{describe}</div>
        </div>
        <div
          ref={rateContent}
          className={cx("product_detail_container_section_2_rate_context")}
        >
          {userLogin ? (
            <Comments idItem={idItem}></Comments>
          ) : (
            <div>
              <Link to={PathRoutes.login} className={cx("link_login")}>
                Đăng nhập
              </Link>
              <span> để hiện thị đánh giá</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailDesAndEvalue;
