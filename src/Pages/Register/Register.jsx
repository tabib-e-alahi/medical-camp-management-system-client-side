import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../SharedComponents/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = { name: data.name, email: data.email };
          console.log(userInfo);
          axiosPublic.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log('User added: ',res.data);
              reset();
              Swal.fire({
                title: "Registration Completed",
                text: "thanks For registering",
                icon: "success"
              });
              navigate('/')
            } 
          })
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="mt-16 w-1/3 mb-10 mx-auto p-4 rounded-xl border-2 border-sky-400 shadow-md shadow-sky-400">
      <h1 className="text-center text-5xl font-bold my-6 text-sky-400">
        Register
      </h1>
      <form className="mb-6 px-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Personal Information================== */}
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-lg">
              Your name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="border-2 border-sky-400 p-3 rounded-lg"
              placeholder="Tabib E Alahi"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-lg">
              Photo URL
            </label>
            <input
              {...register("photoURL", { required: true })}
              type="text"
              className="border-2 border-sky-400 p-3 rounded-lg"
              placeholder="url...."
            />
            {errors.photoURL && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-lg">
              Enter Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="border-2 border-sky-400 p-3 rounded-lg"
              placeholder="example@example.com"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-lg">
              Enter Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              type="password"
              className="border-2 border-sky-400 p-3 rounded-lg"
              placeholder="password@123"
            />
            {errors.password?.type === "required" && (
              <p role="alert" className="text-red-500">
                Password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p role="alert" className="text-red-500">
                Password must be 6 characters minimum
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p role="alert" className="text-red-500">
                Password must be less that 20 characters minimum
              </p>
            )}
          </div>
          <div className="w-1/3 mx-auto text-center">
            <Button type="submit" variant="contained" size="large" className="">
              Register
            </Button>
          </div>
        </div>
      </form>
      <SocialLogin></SocialLogin>
      <div className="flex justify-center items-center gap-1">
        <p className="font-medium">Already have an account?</p>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
