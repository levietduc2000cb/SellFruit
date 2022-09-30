import { lazy } from "react";
import { PathRoutes } from "../PathRoutes";

const Profile = lazy(() => import("~/page/Profile"));
const EditProfile = lazy(() => import("~/page/EditProfile"));
const Pay = lazy(() => import("~/page/Pay/Pay"));

export const RouterPrivate = [
  {
    path: PathRoutes.profile,
    togger: false,
    element: Profile,
  },
  {
    path: PathRoutes.editProfile,
    togger: false,
    element: EditProfile,
  },
  {
    path: PathRoutes.pay,
    togger: false,
    element: Pay,
  },
];
