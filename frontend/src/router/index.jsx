import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import MainLayout from "../layout/MainLayout/MainLayout";
import MinimalLayout from "../layout/MinimalLayout";
import { ToastContainer } from "react-toastify";
import Loader from "../layout/Loader";
import NavigationScroll from "../layout/NavigationScroll";

const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const CheckoutSuccess = lazy(() => import("../pages/CheckoutSuccess"));
const Register = lazy(() => import("../pages/auth/Register"));
const Login = lazy(() => import("../pages/auth/Login"));
const NotFound = lazy(() => import("../pages/NotFound"));

const RouteList = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <NavigationScroll>
          <ToastContainer />
          <Routes>
            <Route element={<PrivateRouter />}>
              <Route element={<MainLayout />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route
                  exact
                  path="/checkout-success"
                  element={<CheckoutSuccess />}
                />
              </Route>
            </Route>
            <Route element={<MinimalLayout />}>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </NavigationScroll>
      </BrowserRouter>
    </Suspense>
  );
};

export default RouteList;
