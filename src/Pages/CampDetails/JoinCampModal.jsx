import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useParticipantCount from "../../hooks/useParticipantCount";

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

const JoinCampModal = ({
  fees,
  cancellationRefundPolicy,
  accommodationInformation,
  camp_id,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useAuth();
  const [participants, setParticipants] = useState(0);

  const axiosSecure = useAxiosSecure();
  const [participatedCamps, refetch] = useParticipantCount();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    // const {name,phone,age,gender,address,health,emergency} = data;
    const newCampyData = {
      campy_name: data.name,
      campy_email: user.email,
      camp_id: camp_id,
      campy_age: data.age,
      campy_gender: data.gender,
      campy_phone: data.phone,
      campy_address: data.address,
      campy_health: data.health,
      campy_emergency: data.emergency,
    };

    refetch(`/campy-data?type={"email": '${user?.email}'}`);
    // console.log(participatedCamps);

    const isAvailable = participatedCamps.find((p) => p.camp_id === camp_id);

    if (isAvailable) {
      reset();
      handleClose();
      Swal.fire({
        title: "Already Registered",
        text: "A participant can  register only once.",
        icon: "error",
      });
      return;
    }

    //sending the new campy data to database
    axiosSecure.post("/campy-data", newCampyData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        reset();
        handleClose();

        Swal.fire({
          title: "Registration Successful",
          text: "Mar your calender for the camp.",
          icon: "success",
        });
      }
      refetch("/campy-data");
      setParticipants(participatedCamps.length);
      console.log(participants);
    });
    axiosSecure
        .patch(`/campy-data/${camp_id}`, { participants })
        .then((res) => console.log(res.data));
  };
  // console.log(participants);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-[#f60] hover:bg-[#cd926a] w-[10rem] text-white px-5 py-3 text-xl font-medium rounded-md"
      >
        Join Camp
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
            Registration Form:
          </h1>
          <form className="mb-6 px-4  h-fit" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 ">
              <section className="grid grid-cols-2 gap-4">
                {/* ================ name==================== */}
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="font-semibold text-lg">
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="border-2  border-sky-400 p-3 rounded-lg"
                    placeholder="Tabib E Alahi"
                  />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                {/* =============== phone number============================         */}
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="font-semibold text-lg">
                    Phone No.
                  </label>
                  <input
                    {...register("phone", {
                      required: true,
                      minLength: 11,
                      maxLength: 11,
                    })}
                    type="number"
                    className="border-2 border-sky-400 p-3 rounded-lg"
                    placeholder="01XXXXXXXXX"
                    
                    min={0}
                  />
                  {errors.phone && (
                    <span className="text-red-500">
                      Phone Number must be 11 characters
                    </span>
                  )}
                </div>

                {/* ====================== age ===================== */}
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="font-semibold text-lg">
                    Age
                  </label>
                  <input
                    {...register("age", { required: true, min: 18 })}
                    type="number"
                    className="border-2 border-sky-400 p-3 rounded-lg"
                    placeholder="you age.."
                    min={1}
                  />
                  {errors.age && (
                    <span className="text-red-500">
                      Must be 18 years or old.If you are younger then, ask your
                      guardian to fill up.
                    </span>
                  )}
                </div>

                {/* =================== gender ================= */}
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="font-semibold text-lg">
                    Gender
                  </label>
                  <select
                    {...register("gender", {
                      required: true,
                    })}
                    className="border-2 border-sky-400 p-3 rounded-lg"
                  >
                    <option disabled defaultValue={"Gender"}>
                      Select Your Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                  {errors.gender && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                {/* address=========================== */}
                <div className="flex flex-col gap-1 col-span-2">
                  <label htmlFor="" className="font-semibold text-lg">
                    Address
                  </label>
                  <input
                    {...register("address", {
                      required: true,
                    })}
                    type="text"
                    className="border-2 border-sky-400 p-3 rounded-lg"
                    placeholder="Home,Street,City,Country"
                  />
                  {errors.address?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Address is required
                    </p>
                  )}
                </div>

                {/* ========== fees ======================== */}
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="font-semibold text-lg">
                    Camp Fee
                  </label>
                  <input
                    type="text"
                    className="border-2 text-2xl font-bold text-red-500  border-sky-400 p-2 rounded-lg"
                    value={`${fees}$`}
                    readOnly
                  />
                </div>

                {/* ========== emergency contact============= */}
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="" className="font-semibold text-lg">
                    Emergency Contact No.
                  </label>
                  <input
                    {...register("emergency", { required: true })}
                    type="number"
                    
                    className="border-2 border-sky-400 p-3 rounded-lg"
                    placeholder="01XXXXXXXXX"
                  />
                  {errors.emergency && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                {/* =============health information================================ */}
                <div className="flex flex-col gap-1 col-span-2">
                  <label htmlFor="" className="font-semibold text-lg">
                    What type health problem you have?(Optional)
                  </label>
                  <input
                    {...register("health")}
                    type="text"
                    className="border-2 border-sky-400 p-3 rounded-lg"
                    placeholder="Home,Street,City,Country"
                  />
                </div>
              </section>

              <div className="w-1/3 mx-auto text-center my-4">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className=""
                >
                  Register
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-lg">
                Return Policy:
                <span className="text-sm font-medium text-red-500">
                  {cancellationRefundPolicy}
                </span>{" "}
              </p>
              <p className="font-semibold text-lg">
                Accommodation:
                <span className="text-sm font-medium text-red-500">
                  {accommodationInformation}
                </span>{" "}
              </p>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default JoinCampModal;
