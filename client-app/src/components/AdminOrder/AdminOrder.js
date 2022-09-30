import styles from "./AdminOrder.module.css";
import classNames from "classnames/bind";

import handleNumberPrice from "~/util/handleNumberPrice";

function AdminOrder({
  id,
  confirm,
  items,
  messageFromCustomer,
  methodPay,
  totalPrice,
  userInfor,
  onHandleCofirmOrder,
}) {
  let cx = classNames.bind(styles);

  return (
    <div className={cx("admin_orders")}>
      <div className={cx("admin_orders_content")}>
        <div>
          <div>
            <span className={cx("order_title")}>Họ và tên : </span>
            <span className={cx("order_content")}>
              {userInfor.lastName + " " + userInfor.firstName}
            </span>
          </div>
          <div>
            <span className={cx("order_title")}>Địa chỉ : </span>
            <span className={cx("order_content")}>{userInfor.address}</span>
          </div>
          <div>
            <span className={cx("order_title")}>Số điện thoại : </span>
            <span className={cx("order_content")}>{userInfor.phoneNumber}</span>
          </div>
          <div>
            <span className={cx("order_title")}>Phương thức thanh toán : </span>
            <span className={cx("order_content")}>
              {methodPay === "payment_on_delivery"
                ? "Trả tiền khi nhận hàng"
                : "Thanh toán qua thẻ ngân hàng"}
            </span>
          </div>
          {messageFromCustomer && (
            <div>
              <span className={cx("order_title")}>
                Tin nhắn từ khách hàng :{" "}
              </span>
              <span className={cx("order_content")}>{messageFromCustomer}</span>
            </div>
          )}
        </div>
        <div>
          <div>
            <span className={cx("order_title")}>Mã đơn hàng : </span>
            <span className={cx("order_content")}>{id}</span>
          </div>
          <div>
            <div className={cx("order_title")}>Sản phẩm : </div>
            <div className={cx("order_content")}>
              {items.map((item, index) => {
                return (
                  <div key={index}>{`${item.name} x ${item.amountItem}`}</div>
                );
              })}
            </div>
          </div>
          <div>
            <span className={cx("order_title_total")}>Tổng : </span>
            <span className={cx("order_content_total")}>
              {handleNumberPrice(totalPrice)}
              <strong>đ</strong>
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          onHandleCofirmOrder(id);
        }}
        className={cx(
          confirm
            ? "confirm_order_from_admin_btn"
            : "not_confirm_order_from_admin_btn"
        )}
      >
        {confirm ? "Đơn hàng đã được xác nhận" : "Xác nhận đơn hàng"}
      </button>
    </div>
  );
}

export default AdminOrder;
