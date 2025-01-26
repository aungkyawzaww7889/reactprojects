import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
// import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster toastOptions={{
          // Define default options
          className: '',
          duration: 1000,
          removeDelay: 1000,
        }}/>
      {/* <Footer/> */}
    </>
  );
};

export default MainLayout;