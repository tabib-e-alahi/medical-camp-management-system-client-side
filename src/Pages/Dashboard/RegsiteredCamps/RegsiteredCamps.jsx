import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import Swal from "sweetalert2";

const RegsiteredCamps = () => {
  const { user } = useAuth();
  const [registeredCamps, setRegisteredCamps] = useState([]);

  const axiosSecure = useAxiosSecure();
  const { data: registered = [], refetch } = useQuery({
    queryKey: ["participation"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/participant-data?email=${user.email}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    const fetchCampData = async () => {
      const campIds = registered.map((item) => item.camp_id);

      try {
        const response = await axiosSecure.get("/registered-camps", {
          params: {
            camp_ids: campIds.join(","),
          },
        });

        setRegisteredCamps(response.data);
      } catch (error) {
        console.error("Error fetching camp data:", error);
      }
    };

    fetchCampData();
  }, [axiosSecure, registered]);

  //   console.log(registeredCamps[0].scheduledDateAndTime);

  const handleCampDelete = (id) => {
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
        axiosSecure.delete(`/registered-camps/${id}`).then((res) => {
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
  };

  return (
    <div>
      <table className="w-fit  mt-20  divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th
              scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
            >
              Camp Name
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
            >
              Camp Schedule
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
            >
              Campy Fee
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
            >
              Campy location
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
            >
              Payment Status
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400"
            >
              Action
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {registeredCamps.map((camp) => (
            <tr
              key={camp._id}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 "
            >
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {camp.name}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-white whitespace-nowrap ">
                {camp?.scheduledDateAndTime
                  ? moment(camp?.scheduledDateAndTime).format(
                      "DD MMM YYYY, h:mmA"
                    )
                  : "N/A"}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                {camp.fees}
              </td>
              <td className="text-sm py-2  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {camp.venueLocation.split(",").map((vL, idx) => (
                  <ul key={idx}>
                    <li className="text-center mb-2">{vL},</li>
                  </ul>
                ))}
              </td>
              <td className="text-sm py-2 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">
                Yet To Pay
              </td>
              <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                <button
                  onClick={() => handleCampDelete(camp._id)}
                  className="p-3 bg-white rounded-full text-[#f60]"
                >
                  <FaTrashAlt className="h-6 w-6"></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegsiteredCamps;
