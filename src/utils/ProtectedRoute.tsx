import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Sign from "../pages/Sign";
import { iDataUser } from "../types/store.interface";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { logged } = useSelector((state: any) => state.user_info);

  return logged ? <Fragment>{children}</Fragment> : <Sign />;
};

export default ProtectedRoute;
