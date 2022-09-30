import styles from "./Order.module.css";
import classNames from "classnames/bind";
import handleNumberPrice from "~/util/handleNumberPrice";

function Order({ id, userInfor, items, totalPrice, confirm }) {
  let cx = classNames.bind(styles);

  return (
    <div className={cx("orders_wrapper")}>
      <div className={cx("my_orders")}>
        <div className={cx("receiver_information")}>
          <h1>Thông tin người nhận</h1>
          <div>
            <div className={cx("information")}>
              <div>
                <span className={cx("information_title")}>Họ và tên : </span>
                <span>{userInfor.lastName + " " + userInfor.firstName}</span>
              </div>
              <div>
                <span className={cx("information_title")}>
                  Địa chỉ nhận hàng :{" "}
                </span>
                <span>{userInfor.address}</span>
              </div>
              <div>
                <span className={cx("information_title")}>
                  Số điện thoại :{" "}
                </span>
                <span>{userInfor.phoneNumber}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("order_items")}>
          <h1>Đơn hàng</h1>
          <div>
            <div className={cx("code_order")}>
              <span>Mã đơn hàng : </span>
              <span>{id}</span>
            </div>
            <div className={cx("items")}>
              {items.map((item, index) => {
                return (
                  <div key={index}>
                    <span>{`${item.name} x `}</span>
                    <span>{item.amountItem}</span>
                  </div>
                );
              })}
            </div>
            <h2 className={cx("total_price")}>
              <span>Tổng : </span>
              <span>
                {handleNumberPrice(totalPrice)}
                <strong>đ</strong>
              </span>
            </h2>
          </div>
        </div>
      </div>
      {confirm ? (
        <div className={cx("order_confirm_active")}>
          Đơn hàng đã được xác nhận
        </div>
      ) : (
        <div className={cx("order_confirm_not_active")}>
          Đơn hàng chưa được xác nhận
        </div>
      )}
    </div>
  );
}

export default Order;
