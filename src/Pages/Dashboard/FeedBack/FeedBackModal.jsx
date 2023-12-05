import { VscFeedback } from "react-icons/vsc";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -20%)",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const FeedBackModal = ({camp}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {user} = useAuth();

  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const ratings1 = parseFloat(data.speaker);
    const ratings2 = parseFloat(data.arrangement);
    const ratings3 = parseFloat(data.volunteer);
    const ratings4 = parseFloat(data.services);

    const ratings = ((ratings1 + ratings2 + ratings3 + ratings4)/4).toFixed(1);
    // console.log(ratings);

    const testimonial = {
        name: user.displayName,
        email:user.email,
        image:user.photoURL,
        camp_name:camp.name,
        camp_id:camp._id,
        feedback:data.feedback,
        ratings: ratings
    }

    axiosSecure.post('/testimonials', {testimonial})
    .then(res => {
        if(res.data.insertedId){
            reset();
            handleClose()
            Swal.fire({
              title: "Feedback Given Completed",
              text: "Your thoughts are valuable to us",
              icon: "success"
            });
          } 
        })
      .catch((error) => console.log(error));

  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="p-3 bg-white rounded-full text-[#f60]"
      >
        <VscFeedback className="w-6 h-6" />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="overflow-y-auto  "
      >
        <Box className="w-[700px]  mt-20 h-fit " sx={style}>
          <h1 className="my-4 text-2xl font-semibold text-center">
            Feedback Form:
          </h1>
          <form className="mb-6 px-4  h-fit" onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
              <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
                Feedback
              </h2>
              <p className="mb-5 leading-relaxed font-bold text-gray-600">
                If you had any issues or you liked our management system, please
                share your thought with us!
              </p>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-600"
                >
                  Your Thoughts
                </label>
                <textarea
                  type="textarea"
                  {...register("feedback", { required: true })}
                  className={`h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${
                    errors.feedback && "border-red-600"
                  }`}
                />
                {errors.feedback && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <p className="mb-5 font-bold leading-relaxed text-gray-600">
                Give Ratings Base on your Experience(0 to 5):
              </p>
              <div className="mb-4 grid grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm mr-2 leading-7 text-gray-600"
                  >
                    Speakers:
                  </label>
                  <input
                    type="text" min={0}
                    {...register("speaker", { required: true,min: 0,
                        max: 5, })}
                    className={`h-8 w-16 resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${
                      errors.speaker && "border-red-600"
                    }`}
                  />
                  {errors.speaker && (
                    <span className="text-sm text-red-500">Rantings Must be between 0 to 5</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm mr-2 leading-7 text-gray-600"
                  >
                    Arrangement:
                  </label>
                  <input
                    type="text" min={0}
                    {...register("arrangement", { required: true,min: 0,
                        max: 5, })}
                    className={`h-8 w-16 resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${
                      errors.arrangement && "border-red-600"
                    }`}
                  />
                  {errors.arrangement && (
                    <span className="text-sm text-red-500">Rantings Must be between 0 to 5</span>
                  )}
                </div>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm mr-2 leading-7 text-gray-600"
                  >
                    Volunteer:
                  </label>
                  <input
                    type="text" min={0}
                    {...register("volunteer", { required: true ,min: 0,
                        max: 5,})}
                    className={`h-8 w-16 resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${
                      errors.volunteer && "border-red-600"
                    }`}
                  />
                  {errors.volunteer && (
                    <span className="text-sm text-red-500">Rantings Must be between 0 to 5</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm mr-2 leading-7 text-gray-600"
                  >
                    Services:
                  </label>
                  <input
                    type="text" min={0}
                    {...register("services", { required: true,min: 0,
                        max: 5, })}
                    className={`h-8 w-16 resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 ${
                      errors.services && "border-red-600"
                    }`}
                  />
                  {errors.services && (
                    <span className="text-sm text-red-500">Rantings Must be between 0 to 5</span>
                  )}
                </div>
              </div>

              <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className=""
                >
                  Submit
                </Button>

              <p className="mt-3 text-xs text-gray-500">
                Feel free to connect with us on social media platforms.
              </p>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default FeedBackModal;
