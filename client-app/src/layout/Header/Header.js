import styles from "./Header.module.css";
import classNames from "classnames/bind";
import logo from "~/asset/image/logo-hoa-qua.png";
import { PathRoutes } from "~/routes/PathRoutes";
import SearchBar from "~/components/SearchBar";
import { GrCart } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";
import { CgNotes, CgClose } from "react-icons/cg";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  let cx = classNames.bind(styles);

  const [activeMenu, setActiveMenu] = useState(false);

  const { userLogin, userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cartItem);

  const showMenu = (e) => {
    e.stopPropagation();
    setActiveMenu(true);
  };
  const hiddenMenu = (e) => {
    e.stopPropagation();
    setActiveMenu(false);
  };

  return (
    <header>
      <div className={cx("top_nav")}>
        <div className={cx("top_nav_wrapper", "container")}>
          <div className={cx("top_nav_container", "top_nav_container_hidden")}>
            <span>Chuyên cung cấp thực phẩm sạch</span>
            <span className={cx("top_nav_container_dividing-line")}></span>
            <span>Halona Fruist</span>
          </div>
          <div className={cx("top_nav_container")}>
            {userLogin ? (
              <span className={cx("top_nav_container_register")}>
                <Link
                  to={PathRoutes.profile}
                >{`${userInfo.lastName} ${userInfo.firstName}`}</Link>
              </span>
            ) : (
              <>
                <span className={cx("top_nav_container_register")}>
                  <Link to={PathRoutes.register}>Đăng ký</Link>
                </span>
                <span className={cx("top_nav_container_login")}>
                  <Link to={PathRoutes.login}>Đăng nhập</Link>
                </span>
              </>
            )}
            {userLogin && (
              <span className={cx("top_nav_container_pay")}>
                <Link to={PathRoutes.pay}>Thanh toán</Link>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className={cx("nav_bar")}>
        <div className={cx("nav_bar_wrapper", "container")}>
          <div className={cx("nav_bar_container")}>
            <div className={cx("nav_bar_container_menu")}>
              <HiOutlineMenu onClick={showMenu} />
            </div>
            <div className={cx("nav_bar_container_logo")}>
              <NavLink to={PathRoutes.home}>
                <img
                  src={logo}
                  alt="logo-hoa-qua"
                  className={cx("nav_bar_logo")}
                ></img>
              </NavLink>
            </div>

            <div
              className={cx("nav_bar_container_middle", {
                active_bar_container_middle: activeMenu,
              })}
            >
              <div className={cx("nav_bar_container_close-icon_wrapper")}>
                <CgClose
                  onClick={hiddenMenu}
                  className={cx("nav_bar_container_close-icon")}
                ></CgClose>
              </div>
              <SearchBar></SearchBar>
              <div className={cx("nav_bar_container_list-nav_wrapper")}>
                <ul className={cx("nav_bar_container_list-nav_container")}>
                  <NavLink
                    to={PathRoutes.home}
                    className={(nav) =>
                      cx("nav_bar_container_nav", {
                        nav_bar_container_nav_active: nav.isActive,
                      })
                    }
                  >
                    Trang chủ
                  </NavLink>
                  <NavLink
                    to={PathRoutes.products}
                    className={(nav) =>
                      cx("nav_bar_container_nav", {
                        nav_bar_container_nav_active: nav.isActive,
                      })
                    }
                  >
                    Sản phẩm
                  </NavLink>
                  <NavLink
                    to={PathRoutes.introduce}
                    className={(nav) =>
                      cx("nav_bar_container_nav", {
                        nav_bar_container_nav_active: nav.isActive,
                      })
                    }
                  >
                    Giới thiệu
                  </NavLink>
                  <NavLink
                    to={PathRoutes.news}
                    className={(nav) =>
                      cx("nav_bar_container_nav", {
                        nav_bar_container_nav_active: nav.isActive,
                      })
                    }
                  >
                    Tin tức
                  </NavLink>
                  <NavLink
                    to={PathRoutes.contact}
                    className={(nav) =>
                      cx("nav_bar_container_nav", {
                        nav_bar_container_nav_active: nav.isActive,
                      })
                    }
                  >
                    Liên hệ
                  </NavLink>
                </ul>
              </div>
            </div>
            {userInfo.admin ? (
              <div className={cx("nav_bar_container_note_orders")}>
                <NavLink to={PathRoutes.adminGetOrders}>
                  <CgNotes
                    className={cx("nav_bar_container_note_orders_icon")}
                  ></CgNotes>
                </NavLink>
              </div>
            ) : (
              <div className={cx("nav_bar_container_cart")}>
                <NavLink to={PathRoutes.carts}>
                  <GrCart className={cx("nav_bar_container_cart-icon")} />
                </NavLink>
                {cartItems.length > 0 && (
                  <div className={cx("number_items_in_cart")}>
                    {cartItems.length}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
