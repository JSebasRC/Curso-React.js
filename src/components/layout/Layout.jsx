import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />

      <div className="main">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
