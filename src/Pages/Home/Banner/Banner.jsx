import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);

  return (
    // <Carousel>
    //   {banner.map((b, idx) => (
    //     <div className="h-80 relative lg:h-[700px] max-w-7xl mx-auto" key={idx}>
    //       <img className="h-full" src={b.url} />
    //       <p className="absolute top-1/2 left-1/3">Legend 3</p>
    //     </div>
    //   ))}
    // </Carousel>
    <div className="h-full pt-8 bg-[#82aac6] md:mb-20">
      <section className=" ">
        <div className="grid grid-cols-1 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

          <div className="mr-auto text-left place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl text-slate-50">
              Your journey matters
            </h1>
            <p className="max-w-2xl mb-6  font-semibold lg:mb-8 md:text-lg lg:text-xl text-gray-100">
              Every patient&rsquo;s success story is a beacon of hope for others.
            </p>
          </div>

          <div className=" lg:pt-10 lg:mt-0 lg:col-span-5 lg:flex">
            <Carousel>
              {banner.map((b, idx) => (
                <div
                  className="  lg:h-[350px]  rounded-lg overflow-hidden"
                  key={idx}
                >
                  <img className="h-full rounded-lg" src={b.url} />
                </div>
              ))}
            </Carousel>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Banner;
