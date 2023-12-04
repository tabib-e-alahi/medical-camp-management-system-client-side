import { useForm } from "react-hook-form";

const AddCamp = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="mb-10">
      <section className="max-w-7xl mx-auto p-6  bg-gray-700 rounded-md shadow-md  mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Camp Details Information:
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="username"
              >
                Camp name
              </label>
              <input
                type="text" {...register("name", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="url"
              >
                Image URl
              </label>
              <input
                type="text" {...register("image", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="schedule"
              >
                Schedule Date and Time
              </label>
              <input
                type="datetime-local" {...register("date_and_time", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="venue"
              >
                Venue Location
              </label>
              <input
                type="text" {...register("venueLocation", { required: true })}
                placeholder="house, street, city, country"  
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="fees"
              >
                Camp Fee($)
              </label>
              <input
                type="number" {...register("fees", { required: true })}
                min={0}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="audience"
              >
                Target Audience
              </label>
              <input
                type="text" {...register("audience", { required: true })}
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Special Services(Must put a <q>/</q> after each service)
              </label>
              <input {...register("services", { required: true })}
                type="text" placeholder="1st service/2nd service/.."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Professionals (Must put a <q>/</q> after each Professional name)
              </label>
              <input
                type="text" {...register("professional", { required: true })}
                placeholder="1st professional/2nd professional/.."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div className="lg:col-span-2">
              <label
                className="text-white dark:text-gray-200"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                type="textarea" {...register("description", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCamp;
