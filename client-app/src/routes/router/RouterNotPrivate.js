import { lazy } from "react";

import { PathRoutes } from "../PathRoutes";

const NotFound = lazy(() => import("~/page/NotFound"));
const Products = lazy(() => import("~/page/Products"));
const Introduce = lazy(() => import("~/page/Introduce"));
const ProductDetail = lazy(() => import("~/page/ProductDetail"));
const News = lazy(() => import("~/page/News"));
const NewsDetail = lazy(() => import("~/page/NewsDetail"));
const Search = lazy(() => import("~/page/Search/Search"));
const Contact = lazy(() => import("~/page/Contact"));
const Carts = lazy(() => import("~/page/Carts"));
const Register = lazy(() => import("~/page/Register"));
const Login = lazy(() => import("~/page/Login"));
const Home = lazy(() => import("~/page/Home"));

export const RouterNotPrivate = [
  {
    path: PathRoutes.home,
    togger: true,
    element: Home,
  },
  {
    path: PathRoutes.products,
    togger: false,
    element: Products,
  },
  {
    path: PathRoutes.productsDetail,
    togger: false,
    element: ProductDetail,
  },
  {
    path: PathRoutes.introduce,
    togger: true,
    element: Introduce,
  },
  {
    path: PathRoutes.news,
    togger: false,
    element: News,
  },
  { path: PathRoutes.newsDetail, togger: false, element: NewsDetail },
  {
    path: PathRoutes.contact,
    togger: true,
    element: Contact,
  },
  {
    path: PathRoutes.searchName,
    togger: false,
    element: Search,
  },
  {
    path: PathRoutes.carts,
    togger: false,
    element: Carts,
  },
  {
    path: PathRoutes.register,
    togger: false,
    element: Register,
  },
  {
    path: PathRoutes.login,
    togger: false,
    element: Login,
  },
  {
    path: PathRoutes.notFound,
    togger: false,
    element: NotFound,
  },
];
