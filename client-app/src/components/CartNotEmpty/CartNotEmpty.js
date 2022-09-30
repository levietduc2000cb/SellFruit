import styles from "./CartNotEmpty.module.css";
import classNames from "classnames/bind";
import ItemCart from "~/components/ItemCart";
import handleNumberPrice from "~/util/handleNumberPrice";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillTag } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { PathRoutes } from "~/routes/PathRoutes";
import { useSelector } from "react-redux";
import { useMemo } from "react";

function CartNotEmpty() {
  let cx = classNames.bind(styles);

  const { cartItems } = useSelector((state) => state.cartItem);

  const navigate = useNavigate();

  //Tính tổng số tiền phải trả
  const total = useMemo(() => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.realPrice * item.amountItem;
    }, 0);
    //30000 là chi phí vận chuyển
    return totalPrice + 30000;
  }, [cartItems]);

  return (
    <div className={cx("cart_not_empty")}>
      <div className={cx("cart_not_empty_wrapper")}>
        <div className={cx("cart_not_empty_container")}>
          <table className={cx("cart_not_empty_container_table")}>
            <thead>
              <tr>
                <th>
                  <h2 className={cx("cart_not_empty_container_head")}>
                    SẢN PHẨM
                  </h2>
                </th>
                <th>
                  <h2 className={cx("cart_not_empty_container_head")}>GIÁ</h2>
                </th>
                <th>
                  <h2 className={cx("cart_not_empty_container_head")}>
                    SỐ LƯỢNG
                  </h2>
                </th>
                <th className={cx("cart_not_empty_total-head")}>
                  <h2 className={cx("cart_not_empty_container_head")}>TỔNG</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem, index) => {
                return (
                  <ItemCart
                    key={index}
                    indexItem={index}
                    imgLink={cartItem.img}
                    name={cartItem.name}
                    realPrice={cartItem.realPrice}
                    amount={cartItem.amountItem}
                  ></ItemCart>
                );
              })}
            </tbody>
          </table>
          <div className={cx("cart_not_empty_container_btn_wrapper")}>
            <button
              onClick={() => navigate(PathRoutes.products)}
              className={cx("cart_not_empty_container_btn")}
            >
              <BsArrowLeft></BsArrowLeft>
              Tiếp tục xem sản phẩm
            </button>
          </div>
        </div>
        <div className={cx("cart_not_empty_container")}>
          <div className={cx("cart_not_empty_total_amount")}>
            <h2 className={cx("cart_not_empty_total_amount_title")}>
              Tổng số lượng
            </h2>
            <div className={cx("cart_not_empty_total_amount_detail")}>
              <div className={cx("cart_not_empty_total_amount_detail_price")}>
                <div>Phí vận chuyển</div>
                <div>30.000₫</div>
              </div>
              <div className={cx("cart_not_empty_total_amount_detail_price")}>
                <div>Tổng</div>
                <div>{handleNumberPrice(total)}</div>
              </div>
            </div>
            <Link
              to={PathRoutes.pay}
              className={cx("cart_not_empty_total_amount_btn", "btn_pay")}
            >
              Tiến hành thanh toán
            </Link>
            <button
              className={cx("cart_not_empty_total_amount_btn", "btn_voucher")}
            >
              <AiFillTag className={cx("icon_voucher")}></AiFillTag>Phiếu ưu đãi
            </button>
            <input
              type="text"
              name="promo_code"
              placeholder="Mã ưu đãi"
              className={cx("cart_not_empty_total_amount_input")}
            ></input>
            <button
              className={cx("cart_not_empty_total_amount_btn", "btn_apply")}
            >
              Áp dụng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartNotEmpty;
