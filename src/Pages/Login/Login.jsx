import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../SharedComponents/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      // navigate(from, { replace: true });
    });
  };

  return (
    <div className="mb-24 mt-10 w-1/3 mx-auto p-4 rounded-xl border-2 border-sky-400 shadow-md shadow-sky-400">
      <h1 className="text-center text-5xl font-bold my-10 text-sky-400">
        Log In
      </h1>
      <form className="mb-6 px-4" onSubmit={handleLogin}>
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-lg">
              Enter Email
            </label>
            <input
              type="text"
              name="email"
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
              name="password"
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
      {/* social log in  */}

      <SocialLogin></SocialLogin>
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
