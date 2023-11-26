import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-24 w-1/3 mx-auto p-4 rounded-xl border-2 border-sky-400 shadow-md shadow-sky-400">
      <h1 className="text-center text-5xl font-bold my-10 text-sky-400">
        Log In
      </h1>
      <form className="mb-6 px-4">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-lg">
              Enter Email
            </label>
            <input
              type="text"
              className="border-2 border-sky-400 p-3 rounded-lg"
              placeholder="example@example.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-lg">
              Enter Password
            </label>
            <input
              type="password"
              className="border-2 border-sky-400 p-3 rounded-lg"
              placeholder="password@123"
            />
          </div>

          <div className="w-1/3 mx-auto text-center">
            <Button variant="contained" size="large" className="">
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="flex justify-center items-center gap-1">
        <p className="font-medium">New Here?</p>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
