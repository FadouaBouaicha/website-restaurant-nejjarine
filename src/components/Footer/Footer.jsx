import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaTripadvisor,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";
 
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Restaurant Nejjarine
            </h1>
            <p className="">All visitors are invited to experience not only the delicious cuisine but also the rich history embodied in the restaurant's monuments .All are welcome to indulge in both the flavors of the cuisine and the heritage of the establishment.
              {/* Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "} */}
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+212 672765632</p>
            </div>

         

          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                
                 <a href="https://www.tripadvisor.fr/Restaurant_Review-g293733-d1217023-Reviews-Restaurant_Nejjarine-Fes_Fes_Meknes.html">
                <FaTripadvisor className="text-3xl" />Tripadvisor
              </a>
              <a href="https://www.instagram.com/restaurant_nejjarine_1_fes?igsh=MW1tcXJ6cm0wZGt5aA==">
                <FaInstagram className="text-3xl" />Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=100066632706260&mibextid=kFxxJD">
                <FaFacebook className="text-3xl" />Facebook
              </a>
              </div>
            </div>


            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  
                </ul>
              </div>
            </div>


            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Location
                </h1>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>9 Reu Nejjarine, Medina, Fés Maroc</p>
            </div>
            {/* Map container */}
            <div className="w-full md:w-auto mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.185799533535!2d-4.980409517884258!3d34.06475105529094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9ff5573e6ae78b%3A0x38300d3b9b28f14!2sRestaurant%20Nejjarine!5e0!3m2!1sfr!2sma!4v1711642953916!5m2!1sfr!2sma"
                width="100%"
                height="250"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          
          
        </div>
              
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Fadoua Bouaicha 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
