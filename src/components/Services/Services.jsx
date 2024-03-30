import React from "react";
// import Img from "../../assets/biryani.png";
// import Img2 from "../../assets/biryani2.png";
// import Img3 from "../../assets/biryani4.png";
// import StarRatings from "react-star-ratings";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoFastFood } from "react-icons/io5";
// import { GiFoodTruck } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
const ServicesData = [
  {
    id: 1,
    //img: Img,
    name: "Biryani",
    description:
      "L’établissement de normes élevées en matière de qualité des aliments est vital et important pour garantir que nos chers clients obtiennent la même qualité à chaque fois.",
  },
  {
    id: 2,
    // img: Img2,
    name: "Chiken kari",
    description:
      "As we delve deeper, we encounter scenes that resonate with tradition marocaine.",
  },
  {
    id: 3,
    // img: Img3,
    name: "Cold Cofee",
    description:
      "Sophisticated design showcases restaurant architectural elegance.",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">About</h1>
            <p className="text-md text-gray-400">
              These pictures contain a few places in the restaurant, where you
              can visit to see the historical monuments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-gradient-to-r from-blue-800 to-secondary dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  {/* Use conditional rendering to display the appropriate icon */}
                  {service.name === "Biryani" && (
                    <AiFillAlert className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  )}

                  {service.name === "Chiken kari" && (
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400 text-red-500" />
                  )}

                  {service.name === "Cold Cofee" && (
                    <MdFoodBank className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  )}
                </div>

                <div
                  className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-200"
                >
                  <MdFoodBank className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                </div>

                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
