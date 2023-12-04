import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ParticipantProfile = () => {
  const { user } = useAuth();
  console.log(user);

  const axiosPublic = useAxiosSecure();
 

  const {  data: participation=[]} =useQuery({
    queryKey: ['participation'],
    queryFn: async() =>{
        const res = await axiosPublic.get(`/participant-data?email=${user.email}`)
        return res.data
    }
})
console.log(participation);
  
  

  return (
    <div>
      <div className="bg-gray-100 mt-20">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                  <img
                    className="h-20 w-20 rounded-full mx-auto"
                    src={user?.photoURL}
                    alt
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl text-center leading-8 my-1">
                  {user.displayName}
                </h1>
              </div>
              <div className="my-4" />
            </div>
            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Full name:</div>
                      <div className="px-4 py-2">{user.displayName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      {participation[0]?.campy_gender ? participation[0]?.campy_gender : 'N/A'}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">{participation[0]?.campy_phone ? participation[0]?.campy_phone : 'N/A'}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                      Address:
                      </div>
                      <div className="px-4 py-2">
                      {participation[0]?.campy_address ? participation[0]?.campy_address  : 'N/A'}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jane@example.com"
                        >
                          {user?.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantProfile;
