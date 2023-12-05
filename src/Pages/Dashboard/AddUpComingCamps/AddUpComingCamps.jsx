import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddUpComingCamps = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure=useAxiosSecure()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
    
        console.log(res.data);
        if(res.data.success){
            const upComingCamp = {
                name: data.name,
                image: res.data.data.display_url,
                fees: parseFloat(data.fees),
                scheduledDateAndTime: data.date_and_time,
                venueLocation: data.venueLocation,
                specializedServicesProvided: data.services.split("/"),
                healthcareProfessionalsInAttendance: data.professional.split("/"),
                targetAudience: data.audience,
                description: data.description,
                accommodationInformation: data.accommodation,
                cancellationRefundPolicy: data.refund,
                whatToBring: data.whatToBring,
                category: data.category,
              };
              console.log(upComingCamp);
              const campRes = await axiosSecure.post("/upComing-camps", upComingCamp);
          console.log("with image url ", campRes.data);
          if (campRes.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `This Camp is added to the camps database.`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
    
        }    
      };


    return (
        <div className="mb-10">
      <section className="max-w-7xl mx-auto p-6  bg-gray-700 rounded-md shadow-md  mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Upcoming Camp:
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            {/* camp name================== */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="username"
              >
                Camp name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
                  errors.name && "border-red-600"
                }`}
              />
              {errors.name && (
                <span className="text-red-500">Name field is required</span>
              )}
            </div>

            {/* date and time ===================== */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="schedule"
              >
                Schedule Date and Time
              </label>
              <input
                type="datetime-local"
                {...register("date_and_time", { required: true })}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
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
              <label className="text-white dark:text-gray-200" htmlFor="venue">
                Venue Location
              </label>
              <input
                type="text"
                {...register("venueLocation", { required: true })}
                placeholder="house, street, city, country"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
                  errors.venueLocation && "border-red-600"
                }`}
              />
              {errors.venueLocation && (
                <span className="text-red-500">Location field is required</span>
              )}
            </div>

            {/* camp fees ========================== */}
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="fees">
                Camp Fee($)
              </label>
              <input
                type="number"
                {...register("fees", { required: true })}
                min={0}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
                  errors.fees && "border-red-600"
                }`}
              />
              {errors.fees && (
                <span className="text-red-500">Fee field is required</span>
              )}
            </div>

            {/* target audience ================= */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="audience"
              >
                Target Audience
              </label>
              <input
                type="text"
                {...register("audience", { required: true })}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
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
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Special Services(Must put a <q>/</q> after each service)
              </label>
              <input
                {...register("services", { required: true })}
                type="text"
                placeholder="1st service/2nd service/.."
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
                  errors.services && "border-red-600"
                }`}
              />
              {errors.services && (
                <span className="text-red-500">Fee field is required</span>
              )}
            </div>
            {/* description===================== */}
            <div className="lg:col-span-2">
              <label
                className="text-white dark:text-gray-200"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                type="textarea"
                {...register("description", { required: true })}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
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
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Professionals (Must put a <q>/</q> after each Professional name)
              </label>
              <input
                type="text"
                {...register("professional", { required: true })}
                placeholder="1st professional/2nd professional/.."
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
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
              <label
                className="text-white dark:text-gray-200"
                htmlFor="audience"
              >
                Accommodation
              </label>
              <input
                type="text"
                {...register("accommodation", { required: true })}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
                  errors.accommodation && "border-red-600"
                }`}
              />
              {errors.accommodation && (
                <span className="text-red-500"> field is required</span>
              )}
            </div>

            {/* refund ================================ */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="audience"
              >
                Refund Policy
              </label>
              <input
                type="text"
                {...register("refund", { required: true })}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
                  errors.refund && "border-red-600"
                }`}
              />
              {errors.refund && (
                <span className="text-red-500">Refund field is required</span>
              )}
            </div>

            {/* whatToBring ================================ */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="audience"
              >
                what To Bring
              </label>
              <input
                type="text"
                {...register("whatToBring", { required: true })}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
                  errors.whatToBring && "border-red-600"
                }`}
              />
              {errors.whatToBring && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* category ================================ */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="audience"
              >
                Category
              </label>
              <input
                type="text"
                placeholder="popular or elite or normal ..."
                {...register("category", { required: true })}
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300  focus:ring ${
                  errors.category && "border-red-600"
                }`}
              />
              {errors.category && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* camp image==================== */}
            <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        {...register("image", { required: true })}
                        className={`sr-only ${
                          errors.image && "border-red-600"
                        }`}
                      />
                      {errors.image && (
                <span className="text-red-500">Image field is required</span>
              )}
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

           
          </div>

          <div className="flex justify-center my-6">
            <button className="px-6 py-4  text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Add Camp
            </button>
          </div>
        </form>
      </section>
    </div>
    );
};

export default AddUpComingCamps;
