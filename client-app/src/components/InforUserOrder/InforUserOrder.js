import styles from "./InforUserOrder.module.css";
import classNames from "classnames/bind";
import handleNumberPrice from "~/util/handleNumberPrice";

function InforUserOrder({
  cartItems,
  totalPrice,
  extraFee,
  selectMethodPay,
  onHandleSelectMethod,
  onHandleOrder,
}) {
  let cx = classNames.bind(styles);

  return (
    <div className={cx("infor_user_order")}>
      <div className={cx("infor_user_order_container")}>
        <h1 className={cx("infor_user_order_title")}>Đơn hàng của bạn</h1>
        <div className={cx("infor_user_order_product")}>
          <div className={cx("infor_user_order_product_title")}>
            <h1>Sản phẩm</h1>
            <h1>Tổng</h1>
          </div>
          <div className={cx("infor_user_order_product_list_price")}>
            {cartItems &&
              cartItems.map((cartItem, index) => {
                return (
                  <div
                    key={index}
                    className={cx("infor_user_order_product_item")}
                  >
                    <div>
                      <span>{cartItem.name}</span>
                      <span> x </span>
                      <span>{cartItem.amountItem}</span>
                    </div>
                    <div className={cx("infor_user_order_product_price")}>
                      {handleNumberPrice(
                        cartItem.amountItem * cartItem.realPrice
                      )}
                      <strong>đ</strong>
                    </div>
                  </div>
                );
              })}
            <div className={cx("infor_user_order_product_item")}>
              <h4>Tổng phụ</h4>
              <div className={cx("infor_user_order_product_price")}>
                {handleNumberPrice(extraFee)}
                <strong>đ</strong>
              </div>
            </div>
            <div className={cx("infor_user_order_product_item")}>
              <h4>Tổng</h4>
              <div className={cx("infor_user_order_product_price")}>
                {handleNumberPrice(totalPrice)}
                <strong>đ</strong>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("infor_user_order_method_pay")}>
          <div className={cx("infor_user_order_method")}>
            <input
              type="radio"
              id="bank_transfer"
              name="payment_method"
              value="Chuyển khoản ngân hàng"
              defaultChecked={selectMethodPay === "bank_transfer"}
              onChange={() => {
                onHandleSelectMethod("bank_transfer");
              }}
            ></input>
            <label htmlFor="bank_transfer">Chuyển khoản ngân hàng</label>
          </div>
          <div className={cx("infor_user_order_method")}>
            <input
              type="radio"
              id="payment_on_delivery"
              name="payment_method"
              value="Chuyển khoản ngân hàng"
              defaultChecked={selectMethodPay === "payment_on_delivery"}
              onChange={() => {
                onHandleSelectMethod("payment_on_delivery");
              }}
            ></input>
            <label htmlFor="payment_on_delivery">
              Thanh toán khi nhận hàng
            </label>
          </div>
        </div>
        <div className={cx("infor_user_order_note")}>
          <span>Lưu ý: </span>
          <span>
            Khi thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
            Vui lòng điền tên và số điện thoại của bạn trong phần Nội dung thanh
            toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
          </span>
        </div>
        <button
          className={cx("order_btn", totalPrice > 0 ? "active" : "not_active")}
          onClick={onHandleOrder}
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
}

export default InforUserOrder;
