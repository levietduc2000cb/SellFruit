import styles from "./CreateItem.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import noImageAvailable from "~/asset/image/no_image_available.jpg";
import axiosInstance from "~/axios/axiosConfig";
import ShowNotification from "~/components/ShowNotification";
import Toast from "~/components/Toast";
import Spinner from "~/components/Spinner";
import { RiStore2Line } from "react-icons/ri";
import FormItem from "~/components/FormItem";

function CreateItem() {
  let cx = classNames.bind(styles);

  const [item, setItem] = useState({
    name: "",
    price: 0,
    sale: 0,
    img: noImageAvailable,
    origin: "",
    preserve: "",
    nutritionalValue: "",
    describe: "",
    type: "Trái cây nội địa",
  });

  const [loading, setLoading] = useState(null);

  const handleInput = (e, keyName, inputIndex) => {
    setItem((pre) => {
      return { ...pre, [keyName]: e.target.value };
    });
  };

  const handleSelectType = (e) => {
    setItem((pre) => {
      return { ...pre, type: e.target.value };
    });
  };

  const handleInputDescribe = (e) => {
    setItem((pre) => {
      return { ...pre, describe: e.target.value };
    });
  };

  function setFileItem(e) {
    const fileImage = e.target.files[0];
    createUrlImg(fileImage);
  }
  function createUrlImg(fileImg) {
    if (!fileImg) {
      return;
    }
    let read = new FileReader();
    read.readAsDataURL(fileImg);
    read.onloadend = () => {
      setItem((pre) => {
        return { ...pre, img: read.result };
      });
    };
  }

  const handleCreateItem = async (e) => {
    e.preventDefault();
    let newItem = { ...item };
    if (item.img === noImageAvailable) {
      newItem.img = "";
    }
    setLoading(true);
    try {
      const res = await axiosInstance.post("fruitItems/createItem", newItem);
      if (res.data) {
        setLoading(false);
        setTimeout(() => {
          setLoading(null);
          setItem({
            name: "",
            price: 0,
            sale: 0,
            img: noImageAvailable,
            origin: "",
            preserve: "",
            nutritionalValue: "",
            describe: "",
            type: "Trái cây nội địa",
          });
        }, 2000);
      }
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  return (
    <div className={cx("create_item_wrapper")}>
      <FormItem
        title="Tạo sản phẩm mới"
        handleSubmitItem={handleCreateItem}
        item={item}
        handleInput={handleInput}
        handleSelectType={handleSelectType}
        handleInputDescribe={handleInputDescribe}
        setFileItem={setFileItem}
        btn="Tạo sản phẩm"
      ></FormItem>
      {loading === true && (
        <ShowNotification>
          <Spinner></Spinner>
        </ShowNotification>
      )}
      {loading === false && (
        <ShowNotification>
          <Toast
            text="Tạo sản phẩm thành công"
            typeToast="success"
            IconToast={RiStore2Line}
          ></Toast>
        </ShowNotification>
      )}
    </div>
  );
}

export default CreateItem;
