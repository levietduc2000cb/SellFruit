import styles from "./EditProfile.module.css";
import classNames from "classnames/bind";
import InputForm from "~/components/InputForm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axiosInstance from "~/axios/axiosConfig";
import { editProfile } from "~/redux/reduxSlices/authSlice";
import Spinner from "~/components/Spinner";
import Toast from "~/components/Toast";
import ShowNotification from "~/components/ShowNotification";
import { BiWinkSmile } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PathRoutes } from "~/routes/PathRoutes";

function EditProfile() {
  let cx = classNames.bind(styles);

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(null);

  const [userInfor, setUserInfor] = useState({
    address: "",
    emailAddress: "",
    firstName: "",
    id: "",
    imageAvatar: "",
    lastName: "",
    phoneNumber: "",
  });

  function setFileAvatar(e) {
    const fileAvatar = e.target.files[0];
    createUrlImg(fileAvatar);
  }
  function createUrlImg(fileImg) {
    if (!fileImg) {
      return;
    }
    let read = new FileReader();
    read.readAsDataURL(fileImg);
    read.onloadend = () => {
      setUserInfor((preInfor) => {
        return { ...preInfor, imageAvatar: read.result };
      });
    };
  }

  const handleInput = (e, keyName, index) => {
    setUserInfor((pre) => {
      return { ...pre, [keyName]: e.target.value };
    });
  };

  const saveEditProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("user/editProfile", userInfor);
      if (res.data) {
        dispatch(editProfile(res.data.user));
        setLoading(false);
        setTimeout(() => {
          setLoading(null);
        }, 2000);
      }
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    setUserInfor({ ...userInfo });
  }, [userInfo]);

  return (
    <>
      <form className={cx("form_edit_profile")} onSubmit={saveEditProfile}>
        <h1>Chỉnh sửa trang cá nhân</h1>
        <div>
          <div className={cx("edit_profile_image_wrapper")}>
            <label htmlFor="imageAvatar" className={cx("avatar_image")}>
              <img src={userInfor.imageAvatar} alt="avatar"></img>
            </label>
            <input
              type="file"
              id="imageAvatar"
              name="imageAvatar"
              hidden
              onChange={setFileAvatar}
            ></input>
          </div>
          <div className={cx("lastName_and_firstName")}>
            <InputForm
              title="Họ"
              inputName="lastName"
              typeInput="text"
              valueInput={userInfor.lastName}
              onHandleInput={handleInput}
            ></InputForm>
            <InputForm
              title="Tên"
              inputName="firstName"
              typeInput="text"
              valueInput={userInfor.firstName}
              onHandleInput={handleInput}
            ></InputForm>
          </div>
          <div>
            <InputForm
              title="Số điện thoại"
              inputName="phoneNumber"
              typeInput="phone"
              valueInput={userInfor.phoneNumber}
              onHandleInput={handleInput}
            ></InputForm>
          </div>
          <div>
            <InputForm
              title="Địa chỉ Email"
              inputName="emailAddress"
              typeInput="email"
              valueInput={userInfor.emailAddress}
              onHandleInput={handleInput}
            ></InputForm>
          </div>
          <div>
            <InputForm
              title="Địa chỉ nhà riêng hoặc công ty"
              inputName="address"
              typeInput="text"
              valueInput={userInfor.address}
              onHandleInput={handleInput}
            ></InputForm>
          </div>
        </div>
        <div className={cx("edit_profile_btn")}>
          <button className={cx("btn_save")} type="submit">
            Lưu
          </button>
          <Link to={PathRoutes.profile} className={cx("btn_cancel")}>
            Hủy
          </Link>
        </div>
      </form>
      {loading === true && (
        <ShowNotification>
          <Spinner></Spinner>
        </ShowNotification>
      )}
      {loading === false && (
        <ShowNotification>
          <Toast
            text="Chỉnh sửa thành công"
            typeToast="success"
            IconToast={BiWinkSmile}
          ></Toast>
        </ShowNotification>
      )}
    </>
  );
}

export default EditProfile;
