import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import moment from "moment/moment";
import UpdateCampModal from "./UpdateCampModal";


const ManageCamps = () => {

    const axiosSecure = useAxiosSecure();
  const { data: camps = [], refetch } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const res = await axiosSecure.get("/camps");
    //   console.log(res.data);
      return res.data;
    },
  });

  const handleDeleteCamp = (camp) =>{
    // console.log(camp.name);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/camps/${camp._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "the camp has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
  }
    
    return (
        <div className="">
      <div className=" mt-20">
        <div className=" shadow-md sm:rounded-lg">
          <div className="w-full">
            <div className="overflow-x-scroll ">
              <table className="w-fit   divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Serial No.
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Camps Title
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Schedule
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Venue
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Fees
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400"
                    >
                      Update
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {camps.map((camp, index) => (
                    <tr
                      key={camps._id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700 "
                    >
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {camp.name}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      {moment(camp.scheduledDateAndTime).format("DD MMM YYYY, h:mmA")}
                      </td>
                      <td className="text-sm py-2  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {camp.venueLocation}
                      </td>
                      <td className="text-sm py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {camp.fees}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <UpdateCampModal key={camp._id} camp={camp}></UpdateCampModal>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <button onClick={() => handleDeleteCamp(camp)} className="p-3 bg-white rounded-full text-[#f60]">
                          <FaTrashAlt className="h-6 w-6"></FaTrashAlt>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ManageCamps;