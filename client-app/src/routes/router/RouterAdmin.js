import { lazy } from "react";

import { PathRoutes } from "../PathRoutes";

const CreateItem = lazy(() => import("~/page/CreateItem"));
const EditItem = lazy(() => import("~/page/EditItem"));
const GetOrders = lazy(() => import("~/page/GetOrders"));

export const RouterAdmin = [
  {
    path: PathRoutes.createItem,
    togger: false,
    element: CreateItem,
  },
  {
    path: PathRoutes.editItemId,
    togger: false,
    element: EditItem,
  },
  {
    path: PathRoutes.adminGetOrders,
    togger: false,
    element: GetOrders,
  },
];
