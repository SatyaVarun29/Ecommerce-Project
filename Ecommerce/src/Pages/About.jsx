import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletterbox from "../Components/Newsletterbox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever is born out of a passion for innovation and a desire to
            revolution in e-commerce industry
          </p>
          <p>
            Since our inception, we have worked tirelessly to curate a diverse
            selection of brands and clothes which is currently trendy and
            suitable for everyone needs
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at forever is to empower customers with
            choice,convenience and cost effective dresses which is currently
            trendy and suitable for everyone needs and also verstile in the
            clothings.
          </p>
        </div>

      </div>
      <div className="text-xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
     <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
         <b >Quality Assurance:</b>
         <p className="text-gray-600">We meticuosly select and vet each product to ensure it meets our stringent brand name.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
         <b >Convenience:</b>
         <p className="text-gray-600">With our user-friendly interface and hassle free ordering process, shopping has never been easier.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
         <b >Exceptional Customer service:</b>
         <p className="text-gray-600">We meticuosly select and vet each product, ensuring your satisfaction is our top priority</p>
      </div>
     </div>
     <Newsletterbox/>
    </div>
  );
};

export default About;
