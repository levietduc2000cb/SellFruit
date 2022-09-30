import styles from "./CartEmpty.module.css";
import classNames from "classnames/bind";
import cartEmptyImg from "~/asset/image/Cart_empty.png";
import { useNavigate } from "react-router-dom";
import { PathRoutes } from "~/routes/PathRoutes";

function CartEmpty() {
  let cx = classNames.bind(styles);

  const navigate = useNavigate();

  return (
    <div className={cx("cart_empty")}>
      <img src={cartEmptyImg} alt="cart_empty_img"></img>
      <div className={cx("cart_empty_text")}>
        Chưa có sản phẩm nào trong giỏ hàng.
      </div>
      <button
        className={cx("cart_empty_btn_return")}
        onClick={() => {
          navigate(PathRoutes.products);
        }}
      >
        Quay trở lại cửa hàng
      </button>
    </div>
  );
}

export default CartEmpty;
