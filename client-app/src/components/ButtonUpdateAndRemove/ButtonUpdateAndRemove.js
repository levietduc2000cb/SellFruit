import styles from "./ButtonUpdateAndRemove.module.css";
import classNames from "classnames/bind";
import ShowNotification from "~/components/ShowNotification";
import Spinner from "~/components/Spinner";
import ToastItem from "~/components/ToastItem";
import axiosInstance from "~/axios/axiosConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PathRoutes } from "~/routes/PathRoutes";

function ButtonUpdateAndRemove({ idItem }) {
  let cx = classNames.bind(styles);

  let navigate = useNavigate();

  const [loading, setLoading] = useState(null);

  const handleMovePage = () => {
    navigate(`${PathRoutes.editItem}/${idItem}`);
  };

  const handleRemoveItem = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.delete(
        `fruitItems/deleteItem?id=${idItem}`
      );
      if (res.data) {
        setLoading(false);
      }
    } catch (error) {
      throw new Error("Somethng went wrong");
    }
  };

  const onHandleMovePage = () => {
    navigate(PathRoutes.products);
  };

  return (
    <div className={cx("product_detail_container_method")}>
      <button
        onClick={handleMovePage}
        className={cx("product_detail_container_method_update")}
      >
        <span>Chỉnh sửa sản phẩm</span>
      </button>
      <button
        onClick={handleRemoveItem}
        className={cx("product_detail_container_method_remove")}
      >
        <span>Xóa sản phẩm</span>
      </button>
      {loading === true && (
        <ShowNotification>
          <Spinner></Spinner>
        </ShowNotification>
      )}
      {loading === false && (
        <ShowNotification>
          <ToastItem
            message="Xóa thành công"
            typeNotify="success"
            onHandleMovePage={onHandleMovePage}
          ></ToastItem>
        </ShowNotification>
      )}
    </div>
  );
}

export default ButtonUpdateAndRemove;
