import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const Layout = ({ basket }) => {
  return (
    <>
      <Navigation basket={basket} />
      <Outlet />
    </>
  );
};

export default Layout;
