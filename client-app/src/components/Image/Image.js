import imageNotAvalible from "~/asset/image/image_not_avilable.png";
import styles from "./Image.module.css";

import classNames from "classnames/bind";
import { useState } from "react";

function Image({ linkImage, AltImage }) {
  const cx = classNames.bind(styles);

  const [srcImage, setSrcImage] = useState(linkImage);

  return (
    <img
      src={srcImage}
      alt={AltImage}
      className={cx("image")}
      onError={() => {
        setSrcImage(imageNotAvalible);
      }}
    ></img>
  );
}

export default Image;
