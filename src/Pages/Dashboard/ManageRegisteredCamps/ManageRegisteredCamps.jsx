
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const ManageRegisteredCamps = () => {

    const axiosSecure = useAxiosSecure();
   
  const { data: camps = []} = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const res = await axiosSecure.get("/manage-campy-data");
    //   console.log(res.data);
      return res.data;
    },
  });
  
 



    return (
        <div>
           <table className="w-fit  mt-20  divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Camp ID
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Campy Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Campy Gender
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Campy Address
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Campy Email
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400"
                    >
                      Campy phone
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400"
                    >
                      Campy Age
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {camps.map((camp) => (
                    <tr
                      key={camps.camp_id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700 "
                    >
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {camp.camp_id}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {camp.campy_name}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      {camp.campy_gender}
                      </td>
                      <td className="text-sm py-2  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {camp.campy_address}
                      </td>
                      <td className="text-sm py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {camp.campy_email}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-white text-right whitespace-nowrap">
                      {camp.campy_phone}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <button className="p-3 bg-white rounded-full text-[#f60]">
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

export default ManageRegisteredCamps;