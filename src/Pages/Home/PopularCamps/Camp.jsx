import PropTypes from "prop-types";
import "./Camp.css";
import moment from "moment";
const Camp = ({ camp }) => {
  const {
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
  console.log(formattedDate);
  //   console.log(camp);
  return (
    <div className="wrapper p-4 lg:p-10 bg-[#adb8b7]  antialiased text-gray-900 rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt=" random imgee"
          className="w-full md:w-[600px]  md:h-[400px] object-cover object-center rounded-lg shadow-md"
        />
        <h2 className="absolute top-2 right-2 font-bold bg-white p-2 rounded-full flex justify-center items-center gap-2">
          Participants:{" "}
          <span className="  text-2xl text-[#f60]">{participantCount}</span>
        </h2>

        <div className="relative px-4 -mt-10 md:-mt-20  lg:hover:-mt-32">
          <div className="bg-[#d8e2e8] p-4 lg:py-6 lg:px-8 rounded-lg shadow-lg lg:hover:scale-110 ">
            <div className="flex justify-between items-center">
              <div className="flex items-baseline">
                <div className="ml-2 font-bold  text-xs mr-2 tracking-wider">
                  Date:
                </div>
                <span className="bg-teal-200 text-black text-xs px-2 py-1 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  {formattedDate}
                </span>
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
            <div className="mt-4 space-y-4">
              <span className="text-[#156668] text-lg font-bold">
                <span className="text-black mr-1 text-base font-medium">
                  Recommended for:
                </span>{" "}
                {targetAudience}
              </span>

              <div className="flex flex-col  md:flex-row md:justify-between md:items-center lg:gap-10">
                <div>
                  <h3 className="font-medium">Special Services:</h3>
                  <ul className="text-sm p-4 pl-6 lg:p-0 text-gray-600 list-disc">
                    {specializedServicesProvided.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>

                {/* specializedServicesProvided==== */}
                <div>
                  <h3 className="font-medium text-xl mb-2">Professionals:</h3>
                  <div className="border-2 w-fit p-4 pl-6 rounded overflow-hidden border-[#156668]">
                    <ul className="text-sm font-bold text-gray-600 list-disc ">
                      {healthcareProfessionalsInAttendance.map(
                        (professional, idx) => (
                          <li key={idx}>{professional}</li>
                        )
                      )}
                    </ul>
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

Camp.propTypes = {
  camp: PropTypes.object,
};

export default Camp;
