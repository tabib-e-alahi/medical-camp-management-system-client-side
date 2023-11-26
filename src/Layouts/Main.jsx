import { Outlet, useLocation } from "react-router-dom";
import Nav from "../SharedComponents/Nav/Nav";

const Main = () => {
  const location = useLocation();
  console.log();

  return (
    <div>
      {location.pathname === "/login" || location.pathname === '/register' ? (
        <Outlet></Outlet>
      ) : (
        <>
          <Nav></Nav>
          <Outlet></Outlet>
        </>
      )}
    </div>
  );
};

export default Main;
