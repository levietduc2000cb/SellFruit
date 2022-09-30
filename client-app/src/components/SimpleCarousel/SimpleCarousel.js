import styles from "./SimpleCarousel.module.css";
import classNames from "classnames/bind";

import { useRef } from "react";
import Slider from "react-slick";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import bannerTraicay1 from "~/asset/image/banner-traicay.jpg";
import bannerTraicay2 from "~/asset/image/banner-traicay_2.jpg";

const SimpleCarousel = (props) => {
  let cx = classNames.bind(styles);

  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    className: "section-outstanding__slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={cx("carusel_wrapper")}>
      <Slider ref={ref} {...settings}>
        <div>
          <img
            src={bannerTraicay1}
            alt="banner"
            className={cx("img_banner")}
          ></img>
        </div>
        <div>
          <img
            src={bannerTraicay2}
            alt="banner"
            className={cx("img_banner")}
          ></img>
        </div>
      </Slider>
      <div className={cx("carousel_btn")}>
        <FaAngleLeft
          className={cx("carousel_btn_pre")}
          onClick={() => {
            previous();
          }}
        >
          Pre
        </FaAngleLeft>
        <FaAngleRight
          className={cx("carousel_btn_next")}
          onClick={() => {
            next();
          }}
        >
          Next
        </FaAngleRight>
      </div>
    </div>
  );
};

export default SimpleCarousel;
