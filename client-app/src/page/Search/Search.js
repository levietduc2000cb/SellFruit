import styles from "./Search.module.css";
import classNames from "classnames/bind";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Item from "~/components/Item";
import Paging from "~/components/Paging";
import axiosInstance from "~/axios/axiosConfig";
import { PathRoutes } from "~/routes/PathRoutes";
import SpinnerSearch from "~/components/SpinnerSearch";

function Search() {
  let cx = classNames.bind(styles);

  const params = useParams();
  const navigate = useNavigate();

  const [dataItem, setDataItem] = useState(null);

  const searchNameCurrent = useRef();

  useEffect(() => {
    window.scroll(0, 0);
    async function fetchData() {
      try {
        const res = await axiosInstance(
          `/fruitItems/getNameItems?search=${params.searchName}&numberPage=${params.searchPage}`
        );
        if (res) {
          setDataItem({ ...res.data });
        }
      } catch (error) {
        throw new Error(error);
      }
    }
    if (searchNameCurrent.current !== params.searchName) {
      setDataItem(null);
    }
    fetchData();
  }, [params.searchName, params.searchPage]);

  //Chuyển hướng tới trang tiếp theo
  const handleMoveNumberPage = (numberData) => {
    searchNameCurrent.current = params.searchName;
    let paramRoute = `${params.searchName}/${numberData}`;
    navigate(`${PathRoutes.search}/${paramRoute}`);
  };

  return (
    <div className={cx("search_page")}>
      {dataItem && dataItem.item.length > 0 ? (
        <div>
          <div className={cx("list_item")}>
            {dataItem.item.map((item, index) => {
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
          <Paging
            numberTotalPage={dataItem.numberTotalPage}
            onHandleNumberPage={handleMoveNumberPage}
            numberPage={params.searchPage}
          ></Paging>
        </div>
      ) : null}
      {dataItem && dataItem.item.length === 0 ? (
        <div className={cx("empty_item")}>
          Không có sản phẩm nào phù hợp với kết quả tìm kiếm
        </div>
      ) : null}
      {!dataItem && (
        <div className={cx("spiner_wrapper")}>
          <div>
            <SpinnerSearch></SpinnerSearch>
          </div>
          <div>Đang tìm kiếm...</div>
        </div>
      )}
    </div>
  );
}

export default Search;
