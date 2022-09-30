import styles from "./ProductDetail.module.css";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "~/axios/axiosConfig";
import ProductInfoBasicAndPrice from "~/components/ProductInfoBasicAndPrice";
import ProductDetailDesAndEvalue from "~/components/ProductDetailDesAndEvalue";
import SimilarProduct from "~/components/SimilarProduct";

function ProductDetail() {
  let cx = classNames.bind(styles);

  const param = useParams();

  const [dataItem, setDataItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData(id) {
      const res = await axiosInstance.get(`fruitItems/detailItem/${id}`);
      if (res) {
        setDataItem(res.data);
      }
    }
    fetchData(param.productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param.productId]);

  return (
    <div className={cx("product_detail")}>
      {dataItem && (
        <div className={cx("product_detail_wrapper")}>
          <div
            style={{ backgroundImage: `url(${dataItem.img})` }}
            className={cx("product_detail_title")}
          >
            <div className={cx("product_detail_title_container")}>
              <h1>{dataItem.name}</h1>
              <div>
                <span>Trang chủ / </span>
                <span>{dataItem.type}</span>
              </div>
            </div>
          </div>
          <div className={cx("product_detail_container")}>
            <ProductInfoBasicAndPrice
              id={param.productId}
              img={dataItem.img}
              name={dataItem.name}
              nutritionalValue={dataItem.nutritionalValue}
              origin={dataItem.origin}
              preserve={dataItem.preserve}
              price={dataItem.price}
              realPrice={dataItem.realPrice}
              sale={dataItem.sale}
              date={dataItem.date}
            ></ProductInfoBasicAndPrice>
            <ProductDetailDesAndEvalue
              describe={dataItem.describe}
              idItem={param.productId}
            ></ProductDetailDesAndEvalue>
            <SimilarProduct
              typeItem={dataItem.type}
              idItemCurren={dataItem._id}
            ></SimilarProduct>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
