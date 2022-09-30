import styles from "./EditItem.module.css";
import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import axiosInstance from "~/axios/axiosConfig";
import FormItem from "~/components/FormItem";
import ShowNotification from "~/components/ShowNotification";
import Spinner from "~/components/Spinner";
import ToastItem from "~/components/ToastItem";
import { useParams, useNavigate } from "react-router-dom";
import { PathRoutes } from "~/routes/PathRoutes";

function EditItem() {
  let cx = classNames.bind(styles);

  const param = useParams();

  const [item, setItem] = useState(null);

  const [loading, setLoading] = useState(null);

  const imageOriginal = useRef("");

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData(id) {
      const res = await axiosInstance.get(`fruitItems/detailItem/${id}`);
      imageOriginal.current = res.data.img;
      if (res) {
        setItem(res.data);
      }
    }
    fetchData(param.idItem);
  }, [param.idItem]);

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

  const handleEditItem = async (e) => {
    e.preventDefault();
    let newItem = { ...item };
    if (item.img === imageOriginal.current) {
      newItem.img = "";
    }
    setLoading(true);
    try {
      const res = await axiosInstance.patch("fruitItems/updateItem", newItem);
      if (res.data) {
        setLoading(false);
      }
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  const onHandleMovePage = () => {
    navigate(`${PathRoutes.products}/${param.idItem}`);
  };

  return (
    <div className={cx("create_item_wrapper")}>
      {item && (
        <FormItem
          handleSubmitItem={handleEditItem}
          item={item}
          handleInput={handleInput}
          handleSelectType={handleSelectType}
          handleInputDescribe={handleInputDescribe}
          setFileItem={setFileItem}
          title="Chỉnh sửa sản phẩm"
          btn="Sửa sản phẩm"
        ></FormItem>
      )}
      {loading === true && (
        <ShowNotification>
          <Spinner></Spinner>
        </ShowNotification>
      )}
      {loading === false && (
        <ShowNotification>
          <ToastItem
            message="Sửa sản phẩm thành công"
            typeNotify="success"
            onHandleMovePage={onHandleMovePage}
          ></ToastItem>
        </ShowNotification>
      )}
    </div>
  );
}

export default EditItem;
