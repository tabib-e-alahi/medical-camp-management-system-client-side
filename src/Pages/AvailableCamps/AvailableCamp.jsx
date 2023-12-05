import moment from "moment/moment";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HealmetTitle from "../../hooks/HealmetTitle";


const AvailableCamp = ({ camp }) => {

  const {
    _id,
    name,
    image,
    fees,
    scheduledDateAndTime,
    venueLocation,
    specializedServicesProvided,
    healthcareProfessionalsInAttendance,
    targetAudience,
    participantCount,
  } = camp;

  const formattedDate =
    moment(scheduledDateAndTime).format("DD MMM YYYY, h:mmA");
  // console.log(formattedDate);
  return (
    <div className="bg-[#adb8b7] px-4 md:px-10 lg:px-0  antialiased text-gray-900 rounded-lg overflow-hidden">
      <HealmetTitle title='Available Camps'></HealmetTitle>
      <div className=" flex flex-col px-4 md:px-10 lg:px-0 py-4  lg:flex-row lg:justify-center rounded-lg overflow-hidden">
        <div className="">
        <img
          src={image}
          alt=" random imgee"
          className="w-full lg:w-[600px]  lg:h-[400px] object-cover object-center lg:rounded-s-lg shadow-md"
        />
        </div>

        <div className="bg-[#d8e2e8] lg:w-[600px]  lg:h-[400px] p-4 lg:py-6 lg:px-8  shadow-lg rounded-r-lg ">
        <div className="flex justify-between items-center">
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <div className="flex items-baseline">
                  <div className="md:ml-2 font-bold  text-xs mr-2 tracking-wider">
                    Date:
                  </div>
                  <span className="bg-teal-200 text-black text-xs px-2 py-1 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    {formattedDate}
                  </span>
                </div>

                <h2 className="flex gap-1 font-medium items-center">
                  Participants:
                  <span className="text-2xl text-[#f60]">
                    {participantCount}
                  </span>
                </h2>
              </div>

              <h2 className=" bg-gray-100 text-base lg:text-lg text-blue-800 font-bold px-2 py-2  rounded-full   tracking-wide">
                Fees: {fees}$
              </h2>
            </div>

          <h4 className="mt-1  text-lg lg:text-2xl font-bold uppercase leading-tight truncate">
            {name}
          </h4>

          <div className="mt-1 text-sm">
            <span className="font-bold">Venue:</span> {venueLocation}
          </div>
          <div className="mt-4 space-y-4 ">
            <span className="text-[#156668] text-lg font-bold flex flex-col">
              <span className="text-black mr-1 text-sm font-medium">
                Recommended for:
              </span>{" "}
              <span>{targetAudience}</span>
            </span>

            <div className="flex flex-col-reverse    md:flex-row md:justify-between md:items-center gap-4 md:gap-0 ">
              <div className="w-fit">
                <h3 className="font-medium">Special Services:</h3>
                <ul className="text-sm p-4 pt-2 pl-6 lg:p-0 lg:pl-0 text-gray-600 list-disc">
                  {specializedServicesProvided?.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>

              {/* specializedServicesProvided==== */}
              <div className="">
                <h3 className="font-medium text-xl mb-2">Professionals:</h3>
                <div className="border-2 w-fit p-4 pl-6 rounded overflow-hidden border-[#156668]">
                  <ul className="text-sm font-bold text-gray-600 list-disc ">
                    {healthcareProfessionalsInAttendance?.map(
                      (professional, idx) => (
                        <li key={idx}>{professional}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
                <Link to={`/camp-details/${_id}`}>
                  <button className="p-2  bg-blue-500 text-white hover:bg-blue-600 rounded-lg">
                    See Details <ArrowRightAltIcon />
                  </button>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCamp;
