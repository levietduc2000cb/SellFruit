import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { useEffect, Suspense } from "react";

import Header from "~/layout/Header";
import Footer from "~/layout/Footer";
import Togger from "~/components/Togger";
import { Routes, Route } from "react-router-dom";
import { getInforUser } from "~/util/handleInforUser";
import { getCartItem } from "./util/handleCartItem";
import { setUser } from "~/redux/reduxSlices/authSlice";
import { getCart } from "~/redux/reduxSlices/cartItemSlice";
import { RouterAdmin, RouterPrivate, RouterNotPrivate } from "./routes/router";
import PrivateRouter from "./routes/PrivateRouter";
import PrivateAdminRouter from "./routes/PrivateAdminRouter";
import SpinnerSearch from "./components/SpinnerSearch";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const dataUser = getInforUser();
    if (dataUser) {
      dispatch(setUser(dataUser));
    }
    const dataCart = getCartItem();
    if (dataCart) {
      dispatch(getCart(dataCart));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SpinnerSearch></SpinnerSearch>
        </div>
      }
    >
      <Routes>
        {RouterNotPrivate.map((route, index) => {
          let Element = route.element;
          return (
            <Route
              path={route.path}
              element={
                <>
                  <Header></Header>
                  <Element></Element>
                  <Footer></Footer>
                  {route.togger && <Togger></Togger>}
                </>
              }
              key={index}
            ></Route>
          );
        })}
        {RouterPrivate.map((route, index) => {
          let Element = route.element;
          return (
            <Route
              path={route.path}
              element={
                <PrivateRouter>
                  <Header></Header>
                  <Element></Element>
                  <Footer></Footer>
                  {route.togger && <Togger></Togger>}
                </PrivateRouter>
              }
              key={index}
            ></Route>
          );
        })}
        {RouterAdmin.map((route, index) => {
          let Element = route.element;
          return (
            <Route
              path={route.path}
              element={
                <PrivateAdminRouter>
                  <Header></Header>
                  <Element></Element>
                  <Footer></Footer>
                  {route.togger && <Togger></Togger>}
                </PrivateAdminRouter>
              }
              key={index}
            ></Route>
          );
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
