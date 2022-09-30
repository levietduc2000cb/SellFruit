import styles from "./GetOrders.module.css";
import classNames from "classnames/bind";
import axiosInstance from "~/axios/axiosConfig";
import AdminOrder from "~/components/AdminOrder";
import { useEffect, useState } from "react";

function GetOrders() {
  let cx = classNames.bind(styles);

  const [orders, setOrders] = useState([]);

  async function fetch() {
    try {
      const res = await axiosInstance.get("orders/getorders");
      if (res.data) {
        setOrders([...res.data.orders]);
      }
    } catch (error) {
      throw new Error("Some thing went wrong");
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  const handleCofirmOrder = async (id) => {
    try {
      const res = await axiosInstance.post("orders/confirmOrder", { id: id });
      if (res.data) {
        fetch();
      }
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  return (
    <div className={cx("admin_get_order_page")}>
      <h1 className={cx("admin_get_order_title")}>Đơn hàng từ khách hàng</h1>
      <div className={cx("admin_get_order_wrapper")}>
        {orders.map((order, index) => {
          return (
            <AdminOrder
              key={order._id}
              id={order._id}
              confirm={order.confirm}
              items={order.items}
              messageFromCustomer={order.messageFromCustomer}
              methodPay={order.methodPay}
              totalPrice={order.totalPrice}
              userInfor={order.userInfor}
              onHandleCofirmOrder={handleCofirmOrder}
            ></AdminOrder>
          );
        })}
      </div>
    </div>
  );
}

export default GetOrders;
