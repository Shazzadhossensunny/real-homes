import { useLoaderData, useParams } from "react-router-dom";
import { CiShare2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoPrintSharp } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { FaShower } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { BiArea } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

export default function EstateDetails() {
  const data = useLoaderData();
  const { id } = useParams();
  const estateDetail = data.find((item) => item.id == id);
  const {
    image,
    property_id,
    bedrooms,
    bathrooms,
    garage,
    year_built,
    area,
    description,
    additional_details
  } = estateDetail;

  return (
    <div className="container mx-auto px-3 xl:px-0">
      <Helmet>
        <title>Real Homes | Estate Details</title>
      </Helmet>
      <div className="mb-12">
        <img className="w-full h-full lg:h-[550px] object-cover" src={image} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">
          Property ID : <span className="text-[#1db2ff]">{property_id}</span>
        </h4>
        <div className="flex gap-3 text-2xl text-[#808080] cursor-pointer">
          <div className="tooltip" data-tip="Share">
          <CiShare2></CiShare2>
          </div>
          <div className="tooltip" data-tip="Add To Favorites">
          <FaHeart></FaHeart>
          </div>
          <div className="tooltip" data-tip="Print">
          <IoPrintSharp></IoPrintSharp>
          </div>
        </div>
      </div>
      <div className="border border-dashed my-4"></div>
      <div className="flex flex-wrap gap-6 lg:gap-10">
        <div className="space-y-2">
            <p className="text-[#808080]">Bedrooms</p>
            <div className="flex items-center gap-5">
            <IoIosBed className="text-[#1db2ff] text-xl"></IoIosBed>
            <p className="text-[#101010] text-lg">{bedrooms}</p>
            </div>
        </div>
        <div className="space-y-2">
            <p className="text-[#808080]">Bathrooms</p>
            <div className="flex items-center gap-5">
            <FaShower className="text-[#1db2ff] text-xl"></FaShower>
            <p className="text-[#101010] text-lg">{bathrooms}</p>
            </div>
        </div>
        <div className="space-y-2">
            <p className="text-[#808080]">Garage</p>
            <div className="flex items-center gap-5">
            <GiHomeGarage className="text-[#1db2ff] text-xl"></GiHomeGarage>
            <p className="text-[#101010] text-lg">{garage}</p>
            </div>
        </div>
        <div className="space-y-2">
            <p className="text-[#808080]">Year Built</p>
            <div className="flex items-center gap-5">
            <SlCalender  className="text-[#1db2ff] text-xl"></SlCalender>
            <p className="text-[#101010] text-lg">{year_built}</p>
            </div>
        </div>
        <div className="space-y-2">
            <p className="text-[#808080]">Area</p>
            <div className="flex items-center gap-5">
            <BiArea className="text-[#1db2ff] text-xl"></BiArea>
            <p className="text-[#101010] text-lg">{area}</p>
            </div>
        </div>

      </div>
      <div className="mt-4">
        <h3 className="text-[#1db2ff] text-xl font-semibold">Description</h3>
        <p className="text-[#808080] mt-3">{description}</p>
      </div>
      <div className="mt-4 py-7">
      <h3 className="text-[#1db2ff] text-xl font-semibold">Addition Details</h3>
      <div className="bg-[#f7f7f7] p-2 rounded-xl flex items-center mt-3">
        <h3 className="text-lg w-[50%] lg:w-[20%]">Built In:</h3>
        <p className="text-[#808080] w-[50%] lg:w-[20%]">{additional_details.built_in}</p>
      </div>
      <div className="p-2 rounded-xl flex items-center mt-3">
        <h3 className="text-lg w-[50%] lg:w-[20%]">Flooring:</h3>
        <p className="text-[#808080] w-[20%]">{additional_details.flooring}</p>
      </div>
      <div className="bg-[#f7f7f7] p-2 rounded-xl flex items-center mt-3">
        <h3 className="text-lg w-[50%] lg:w-[20%]">View:</h3>
        <p className="text-[#808080] w-[50%] lg:w-[20%]">{additional_details.view}</p>
      </div>
      <div className=" p-2 rounded-xl flex items-center mt-3">
        <h3 className="text-lg w-[50%] lg:w-[20%]">Parking:</h3>
        <p className="text-[#808080] w-[50%] lg:w-[20%]">{additional_details.parking}</p>
      </div>
      <div className="bg-[#f7f7f7] p-2 rounded-xl flex items-center mt-3">
        <h3 className="text-lg w-[50%] lg:w-[20%]">Waterfront:</h3>
        <p className="text-[#808080] w-[50%] lg:w-[20%]">{additional_details.waterfront}</p>
      </div>
      <div className=" p-2 rounded-xl flex items-center mt-3">
        <h3 className="text-lg w-[50%] lg:w-[20%]">Waterfront Description:</h3>
        <p className="text-[#808080] w-[50%] lg:w-[20%]">{additional_details.waterfront_description}</p>
      </div>
      <div className="bg-[#f7f7f7] p-2 rounded-xl flex items-center mt-3">
        <h3 className="text-lg w-[50%] lg:w-[20%]">Pets:</h3>
        <p className="text-[#808080] w-[50%] lg:w-[20%]">{additional_details.pets}</p>
      </div>

      </div>
    </div>
  );
}
