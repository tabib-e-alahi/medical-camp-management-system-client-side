import { Outlet, useLocation } from "react-router-dom";
import Nav from "../SharedComponents/Nav/Nav";
import Footer from "../SharedComponents/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noShoulders =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {noShoulders || <Nav></Nav>}
      <Outlet></Outlet>
      {noShoulders || <Footer></Footer>}
    </div>
  );
};

export default Main;
