import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import FeedBackModal from "./FeedBackModal";



const FeedBack = () => {
    const { user } = useAuth();
    const [registeredCamps, setRegisteredCamps] = useState([]);
  
    const axiosSecure = useAxiosSecure();
    const { data: registered = [] } = useQuery({
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
    return (
        <div>
      <table className="w-full mt-20  divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-100  dark:bg-gray-700">
          <tr className="w-full">
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
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
            >
              Review
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
              <td className="text-sm py-2 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">
              <FeedBackModal camp={camp}></FeedBackModal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default FeedBack;