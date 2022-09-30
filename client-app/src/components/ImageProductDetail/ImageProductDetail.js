import styles from "./ImageProductDetail.module.css";
import classNames from "classnames/bind";
import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { MdOutlineZoomOutMap } from "react-icons/md";

function ImageProductDetail({ listImg, sale }) {
  let cx = classNames.bind(styles);

  const [imgNumber, setImgNumber] = useState(0);
  const [zoomImg, setZoomImg] = useState(false);

  const handleImgLeft = () => {
    setImgNumber((preNumber) => {
      if (preNumber - 1 < 0) {
        return preNumber;
      }
      return preNumber - 1;
    });
  };
  const handleImgRight = () => {
    setImgNumber((preNumber) => {
      if (preNumber + 1 > listImg.length - 1) {
        return preNumber;
      }
      return preNumber + 1;
    });
  };

  return (
    <div className={cx("product_detail_container_img_wrapper")}>
      <div className={cx("product_detail_container_list_img")}>
        {listImg.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt="img_product"
              className={cx("product_detail_img", {
                active: index === imgNumber,
              })}
            ></img>
          );
        })}
        <AiOutlineLeft
          onClick={handleImgLeft}
          className={cx("icon_left")}
        ></AiOutlineLeft>
        <AiOutlineRight
          onClick={handleImgRight}
          className={cx("icon_right")}
        ></AiOutlineRight>
        <div className={cx("icon_zoom_wrapper")}>
          <MdOutlineZoomOutMap
            onClick={() => {
              setZoomImg(true);
            }}
            className={cx("icon_zoom")}
          ></MdOutlineZoomOutMap>
        </div>
        <div className={cx("product_detail_discount")}>{`-${sale}%`}</div>
      </div>
      <div className={cx("product_detail_list_img_small")}>
        {listImg.map((img, index) => {
          return (
            <img
              key={index}
              onClick={() => {
                setImgNumber(index);
              }}
              src={img}
              alt="img_product"
              className={cx("product_detail_img_small", {
                product_detail_img_small_active: index === imgNumber,
              })}
            ></img>
          );
        })}
      </div>
      <div
        className={cx("product_detail_img_click_zoom", {
          product_detail_img_click_zoom_active: zoomImg,
        })}
      >
        <AiOutlineClose
          onClick={() => {
            setZoomImg(false);
          }}
          className={cx("product_detail_img_zoom_icon-close")}
        ></AiOutlineClose>
        <div className={cx("product_detail_img_zoom_wrapper")}>
          <img
            src={listImg[imgNumber]}
            alt="img_product"
            className={cx("product_detail_img_zoom")}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ImageProductDetail;
