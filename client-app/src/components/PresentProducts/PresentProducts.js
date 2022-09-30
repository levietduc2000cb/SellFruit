import styles from "./PresentProducts.module.css";
import classNames from "classnames/bind";
import Item from "~/components/Item";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "~/axios/axiosConfig";
import { PathRoutes } from "~/routes/PathRoutes";

function PresentProducts({
  title,
  text,
  marginTop = false,
  backGroundImg = false,
  btnDisplay = false,
  boderTopAndBottom = false,
  LinebackGroundColor = false,
  TextColorTitle = false,
  ApiProducts = "",
  typeProduct = "",
}) {
  let cx = classNames.bind(styles);

  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(
        `${ApiProducts}?type=${typeProduct}&nameSort=date&typeSort=1&numberPage=0`
      );
      if (response) {
        setItems([...response.data.item]);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={cx("present-products", {
        "margin-top": marginTop,
        "back-ground-img": backGroundImg,
        "boder-top-and-bottom": boderTopAndBottom,
      })}
    >
      <div className={cx("present-products_wrapper")}>
        <div
          className={cx("present-products_title_wrapper", {
            "line_background-color": LinebackGroundColor,
          })}
        >
          <h1
            className={cx("present-products_title", {
              "text_color-title": TextColorTitle,
            })}
          >
            {title}
          </h1>
        </div>
        <p className={cx("present-products_text")}>{text}</p>
        <div className={cx("present-products_list-products")}>
          {items &&
            items.map((item, index) => {
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
        <div
          className={cx("present-products_btn-more_wrapper", {
            btn_display: btnDisplay,
          })}
        >
          <button
            className={cx("present-products_btn-more")}
            onClick={() => {
              navigate(`${PathRoutes.products}`);
            }}
          >
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
}

export default PresentProducts;
