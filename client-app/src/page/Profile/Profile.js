import styles from "./Profile.module.css";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "~/redux/reduxSlices/authSlice";
import MyOrder from "~/components/MyOrders/MyOrders";
import { PathRoutes } from "~/routes/PathRoutes";
import { Link } from "react-router-dom";
import { MdOutlineCreateNewFolder } from "react-icons/md";

function Profile() {
  const cx = classNames.bind(styles);

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className={cx("profile_page")}>
      <div className={cx("profile_wrapper")}>
        <section>
          <div className={cx("image_avatar_wrapper")}>
            <Image
              linkImage={userInfo.imageAvatar}
              AltImage="image_avatar"
            ></Image>
          </div>
        </section>
        <section>
          <div
            className={cx("profile_name")}
          >{`${userInfo.lastName} ${userInfo.firstName}`}</div>
          <div className={cx("profile_other_infor")}>
            <div>
              <div className={cx("profile_address")}>
                <div className={cx("profile_title")}>Địa chỉ</div>
                <div>{userInfo.address}</div>
              </div>
              <div className={cx("profile_emailAddress")}>
                <div className={cx("profile_title")}>Địa chỉ Email</div>
                <div>{userInfo.emailAddress}</div>
              </div>
              <div className={cx("profile_phoneNumber")}>
                <div className={cx("profile_title")}>Số điện thoại</div>
                <div>{userInfo.phoneNumber}</div>
              </div>
            </div>
          </div>
          <div className={cx("btn")}>
            <button className={cx("btn-logout")} onClick={handleLogOut}>
              Đăng xuất
            </button>
            <Link
              to={PathRoutes.editProfile}
              className={cx("btn_change_profile")}
            >
              Chỉnh sửa hồ sơ
            </Link>
          </div>
        </section>
      </div>
      {userInfo.admin ? (
        <div>
          <h1 className={cx("title_create")}>Tạo sản phẩm mới</h1>
          <Link
            to={PathRoutes.createItem}
            className={cx("icon_create_wrapper")}
          >
            <MdOutlineCreateNewFolder
              className={cx("icon_create")}
            ></MdOutlineCreateNewFolder>
          </Link>
        </div>
      ) : (
        <MyOrder></MyOrder>
      )}
    </div>
  );
}

export default Profile;
