import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdBrowserUpdated } from "react-icons/md";
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

const UpdateCampModal = ({ camp }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const axiosSecure = useAxiosSecure();
  //   console.log(camp.image);
 


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // const {name,phone,age,gender,address,health,emergency} = data;
    axiosSecure.put(`/camps/${camp._id}`, data).then((res) => {
      if (res.data.modifiedCount > 0) {
        handleClose()
        Swal.fire({
          title: "Updated!",
          text: "the camp has been deleted.",
          icon: "success",
        });
      
      }
    });
  };
  return (
    <div>
      <button
        onClick={() => handleOpen()}
        className="p-3 bg-white rounded-full text-[#f60]"
      >
        <MdBrowserUpdated className="h-6 w-6" />
      </button>

      {/* =================== Modal ===================================== */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="overflow-y-auto  "
      >
        <Box className="w-11/12 lg:w-[850px]  mt-20 h-fit " sx={style}>
          <h1 className="my-4 text-2xl font-semibold text-center">
            Update Camps
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
              {/* camp name================== */}
              <div>
                <label className="font-bold " htmlFor="username">
                  Camp name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  defaultValue={camp.name}
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.name && "border-red-600"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>

              {/* date and time ===================== */}
              <div>
                <label className="font-bold " htmlFor="schedule">
                  Schedule Date and Time
                </label>
                <input
                  type="datetime-local"
                  defaultValue={camp.scheduledDateAndTime}
                  {...register("date_and_time", { required: true })}
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.date_and_time && "border-red-600"
                  }`}
                />
                {errors.date_and_time && (
                  <span className="text-red-500">
                    Date and Times field is required
                  </span>
                )}
              </div>

              {/* venue location ====================== */}
              <div>
                <label className="font-bold " htmlFor="venue">
                  Venue Location
                </label>
                <input
                  type="text"
                  defaultValue={camp.venueLocation}
                  {...register("venueLocation", { required: true })}
                  placeholder="house, street, city, country"
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.venueLocation && "border-red-600"
                  }`}
                />
                {errors.venueLocation && (
                  <span className="text-red-500">
                    Location field is required
                  </span>
                )}
              </div>

              {/* camp fees ========================== */}
              <div>
                <label className="font-bold " htmlFor="fees">
                  Camp Fee($)
                </label>
                <input
                  type="number"
                  defaultValue={camp.fees}
                  {...register("fees", { required: true })}
                  min={0}
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.fees && "border-red-600"
                  }`}
                />
                {errors.fees && (
                  <span className="text-red-500">Fee field is required</span>
                )}
              </div>

              {/* target audience ================= */}
              <div>
                <label className="font-bold " htmlFor="audience">
                  Target Audience
                </label>
                <input
                  type="text"
                  defaultValue={camp.targetAudience}
                  {...register("audience", { required: true })}
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.audience && "border-red-600"
                  }`}
                />
                {errors.audience && (
                  <span className="text-red-500">Fee field is required</span>
                )}
              </div>

              {/* services ========================== */}
              <div>
                <label
                  className="font-bold text-sm"
                  htmlFor="passwordConfirmation"
                >
                  Special Services(Must put a <q>/</q> after each service)
                </label>
                <textarea
                  defaultValue={camp?.specializedServicesProvided?.join("/")}
                  {...register("services", { required: true })}
                  type="textarea"
                  placeholder="1st service/2nd service/.."
                  className={`block  w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.services && "border-red-600"
                  }`}
                />
                {errors.services && (
                  <span className="text-red-500">Fee field is required</span>
                )}
              </div>
              {/* description===================== */}
              <div className="lg:col-span-2">
                <label className="font-bold " htmlFor="description">
                  Description
                </label>
                <textarea
                  type="textarea"
                  defaultValue={camp.description}
                  {...register("description", { required: true })}
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.description && "border-red-600"
                  }`}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500">
                    Description must be provided
                  </span>
                )}
              </div>

              {/* professionals========================== */}
              <div>
                <label
                  className="font-bold text-sm"
                  htmlFor="passwordConfirmation"
                >
                  Professionals (Must put a <q>/</q> after each Professional)
                </label>
                <textarea
                  type="textarea"
                  defaultValue={camp?.healthcareProfessionalsInAttendance?.join(
                    "/s"
                  )}
                  {...register("professional", { required: true })}
                  placeholder="1st professional/2nd professional/.."
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.professional && "border-red-600"
                  }`}
                />
                {errors.professional && (
                  <span className="text-red-500">
                    Professionals information is required
                  </span>
                )}
              </div>

              {/* accommodation ====================== */}
              <div>
                <label className="font-bold " htmlFor="audience">
                  Accommodation
                </label>
                <input
                  type="text"
                  defaultValue={camp.accommodationInformation}
                  {...register("accommodation", { required: true })}
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.accommodation && "border-red-600"
                  }`}
                />
                {errors.accommodation && (
                  <span className="text-red-500"> field is required</span>
                )}
              </div>

              {/* refund ================================ */}
              <div>
                <label className="font-bold " htmlFor="audience">
                  Refund Policy
                </label>
                <input
                  type="text"
                  defaultValue={camp.cancellationRefundPolicy}
                  {...register("refund", { required: true })}
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.refund && "border-red-600"
                  }`}
                />
                {errors.refund && (
                  <span className="text-red-500">Refund field is required</span>
                )}
              </div>

              {/* whatToBring ================================ */}
              <div>
                <label className="font-bold " htmlFor="audience">
                  what To Bring
                </label>
                <input
                  type="text"
                  defaultValue={camp.whatToBring}
                  {...register("whatToBring", { required: true })}
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.whatToBring && "border-red-600"
                  }`}
                />
                {errors.whatToBring && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* category ================================ */}
              <div>
                <label className="font-bold " htmlFor="audience">
                  Category
                </label>
                <input
                  type="text"
                  defaultValue={camp.category}
                  {...register("category", { required: true })}
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.category && "border-red-600"
                  }`}
                />
                {errors.category && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div>
                <label className="font-bold " htmlFor="audience">
                  Image
                </label>
                <input
                  type="text"
                  defaultValue={camp.image}
                  {...register("image", { required: true })}
                  className={`block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-500 rounded-md  focus:ring ${
                    errors.category && "border-red-600"
                  }`}
                />
                {errors.image && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* camp image==================== */}
            </div>

            <div className="flex justify-center my-6">
              <button className="px-6 py-4  text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                Update Camp
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateCampModal;
