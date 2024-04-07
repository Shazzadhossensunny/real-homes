/* eslint-disable react/prop-types */

import { IoLocationSharp } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function SingleEstate({estate}) {
    // eslint-disable-next-line react/prop-types
    const {id, image, estate_title, segment_name, description, price, status, area, location, facilities} = estate
  return (
    <div className="bg-white p-2 rounded-xl">
        <div className="relative">
            <img className="w-full rounded-md h-[320px]" src={image} alt="" />
            <span className="absolute top-2 left-2 badge ">{status}</span>
        </div>
        <div className="pt-6 px-4 pb-4 space-y-4">
         <h3 className="text-xl text-[#101010] font-semibold">{estate_title}</h3>
         <p className="text-[#808080]">{description.slice(0, 80)}...</p>
         <p className="text-gray-500 flex items-center gap-1"><IoLocationSharp className="text-[#1db2ff] text-lg"></IoLocationSharp>{location}</p>
         <h4 className="text-lg font-medium text-[#101010]">{segment_name}</h4>
         <div className="text-[#808080]">
            {
                facilities.map((f, index) => <li key={index}>{f} </li>)
            }
         </div>
         <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-[#101010]">{price}</h3>
            <p className="text-gray-500 flex items-center gap-1"><BiArea className="text-[#1db2ff] text-lg"></BiArea>{area}</p>
         </div>
         <Link to={`/estateDetails/${id}`} className="btn bg-[#1db2ff] text-lg font-semibold text-white">View Property</Link>

        </div>


    </div>
  )
}
