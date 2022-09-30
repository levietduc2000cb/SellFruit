import styles from "./Products.module.css";
import classNames from "classnames/bind";
import Item from "~/components/Item";
import SideBar from "~/components/SideBar";
import Paging from "~/components/Paging";
import { useEffect, useState } from "react";
import axiosInstance from "~/axios/axiosConfig";

function Products() {
  let cx = classNames.bind(styles);

  const [items, setItems] = useState(null);

  const [type, setType] = useState("all");
  const [nameSort, setNameSort] = useState("date");
  const [typeSort, setTypeSort] = useState(1);
  const [numberPage, setNumberPage] = useState(0);

  const handleType = (typeData) => {
    setNumberPage(0);
    setType(typeData);
  };

  const handleNameSort = (nameSortData) => {
    setNameSort(nameSortData);
  };

  const handleTypeSort = (typeSortData) => {
    setTypeSort(typeSortData);
  };

  const handleNumberPage = (numberPageData) => {
    setNumberPage(numberPageData);
  };

  const hanldeSelect = (e) => {
    switch (e.target.value) {
      case "downtotop":
        handleNameSort("realPrice");
        handleTypeSort(1);
        break;
      case "toptodown":
        handleNameSort("realPrice");
        handleTypeSort(-1);
        break;
      default:
        handleNameSort("date");
        handleTypeSort(1);
        break;
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    async function fetchData() {
      try {
        const res = await axiosInstance.get(
          `/fruitItems/getNamebyType?type=${type}&nameSort=${nameSort}&typeSort=${typeSort}&numberPage=${numberPage}`
        );
        if (res.data) {
          setItems({ ...res.data });
        }
      } catch (error) {
        throw new Error("Something went wrong");
      }
    }
    fetchData();
  }, [type, nameSort, typeSort, numberPage]);

  return (
    <div className={cx("products_page")}>
      <div className={cx("products_title")}>
        <div className={cx("products_title_container")}>
          <div className={cx("products_title_container_type")}>
            <div className={cx("products_title_container_type_name")}>
              {type === "all" ? "Tất cả sản phẩm" : type}
            </div>
            <div className={cx("products_title_container_type_path")}>
              {`Trang chủ / ${type === "all" ? "Tất cả sản phẩm" : type}`}
            </div>
          </div>
          <div className={cx("products_title_container_option")}>
            <select
              className={cx("products_title_container_option_select")}
              onChange={hanldeSelect}
              name="product_arrangements"
            >
              <option value="default">Thứ tự mặc định</option>
              <option value="downtotop">Thứ tự theo giá: thấp đến cao</option>
              <option value="toptodown">Thứ tự theo giá: cao xuống thấp</option>
            </select>
          </div>
        </div>
      </div>
      <div className={cx("products_list_wrapper")}>
        <div className={cx("products_list_container")}>
          <div className={cx("products_side-bar")}>
            <SideBar onHandleType={handleType} type={type}></SideBar>
          </div>
          <div>
            {items && items.item.length > 0 ? (
              <div className={cx("products_list_items")}>
                {items.item.map((item, index) => {
                  return (
                    <Item
                      key={item._id}
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
            ) : (
              <div className={cx("no_items")}>Không có sản phẩm nào</div>
            )}

            {items && items.item.length > 0 ? (
              <Paging
                numberTotalPage={items.numberTotalPage}
                onHandleNumberPage={handleNumberPage}
                numberPage={numberPage}
              ></Paging>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
