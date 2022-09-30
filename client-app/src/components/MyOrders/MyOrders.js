import styles from "./MyOrder.module.css";
import classNames from "classnames/bind";
import Order from "~/components/Order";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import noteEmpty from "~/asset/image/note_empty.jpg";
import axiosInstance from "~/axios/axiosConfig";

function MyOrder() {
  let cx = classNames.bind(styles);

  const { userInfo } = useSelector((state) => state.auth);

  const [orders, setOrders] = useState(null);

  useEffect(() => {
    async function fetch(idUser) {
      const res = await axiosInstance.get(`orders/getOrders?idUser=${idUser}`);
      if (res.data) {
        setOrders([...res.data.orders]);
      }
    }
    fetch(userInfo.id);
  }, [userInfo.id]);

  return (
    <div className={cx("my_order_wrapper")}>
      <h1 className={cx("my_order_title")}>Đơn hàng của tôi</h1>
      <div>
        {orders && orders.length > 0
          ? orders.map((order) => {
              return (
                <Order
                  key={order._id}
                  id={order._id}
                  userInfor={order.userInfor}
                  items={order.items}
                  totalPrice={order.totalPrice}
                  confirm={order.confirm}
                ></Order>
              );
            })
          : null}
        {orders && orders.length === 0 ? (
          <div className={cx("order_empty")}>
            <img src={noteEmpty} alt="note_empty"></img>
            Đơn hàng rỗng
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MyOrder;
