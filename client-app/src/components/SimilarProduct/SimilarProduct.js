import styles from "./SimilarProduct.module.css";
import classNames from "classnames/bind";

import { useEffect, useState } from "react";

import Item from "~/components/Item";

import axiosInstance from "~/axios/axiosConfig";

function SimilarProduct({ typeItem, idItemCurren }) {
  let cx = classNames.bind(styles);

  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axiosInstance.get(
          `fruitItems/similarItems?typeItem=${typeItem}&idItemCurren=${idItemCurren}`
        );
        if (res) {
          setItems(res.data);
        }
      } catch (error) {
        throw new Error("Có lỗi");
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idItemCurren]);

  return (
    <div className={cx("product_detail_container_section_3")}>
      <h1 className={cx("product_detail_container_section_3_title")}>
        Sản phẩm tương tự
      </h1>
      <div className={cx("product_detail_container_section_3_list_item")}>
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              linkPicture={item.img}
              nameItem={item.name}
              priceOld={item.price}
              priceItem={item.realPrice}
              sale={item.sale}
              idItem={item._id}
            ></Item>
          );
        })}
      </div>
    </div>
  );
}

export default SimilarProduct;
