import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import 'leaflet/dist/leaflet.css';
import { IoLocationSharp } from "react-icons/io5";
import {
    MapContainer,
    TileLayer,
  } from 'react-leaflet'
import { Marker, Popup } from "react-leaflet";
import { Helmet } from "react-helmet-async";

// import { useMap } from "react-leaflet/hooks";
export default function Contact() {
  return (
    <div className="bg-[#f7f7f7] px-3 xl:px-0">
        <Helmet>
            <title>Real Homes | Contact Us</title>
        </Helmet>
      <div className="container mx-auto">
        <div className="py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-[48%]">
              <form>
                <div className="mb-3">
                  <label className="block mb-2" htmlFor="">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-400 p-3 w-full rounded-md"
                  />
                </div>
                <div className="mb-3">
                  <label className="block mb-2" htmlFor="">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-gray-400 p-3 w-full rounded-md"
                  />
                </div>
                <div className="mb-3">
                  <label className="block mb-2" htmlFor="">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="border border-gray-400 p-3 w-full rounded-md"
                  />
                </div>
                <div className="mb-3">
                  <label className="block mb-2" htmlFor="">
                    Message
                  </label>
                  <textarea
                    className="border border-gray-400 p-3 w-full rounded-md"
                    name=""
                    id=""
                    rows="5"
                  ></textarea>
                </div>
                <button className="btn bg-[#6EC1E4] text-white">
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full lg:w-[48%] space-y-5">
              <div className="flex gap-4">
                <FaPhone className="text-2xl"></FaPhone>
                <div className="space-y-2">
                  <h3>Phone</h3>
                  <p>+880171000000</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MdEmail className="text-2xl"></MdEmail>
                <div className="space-y-2">
                  <h3>Email</h3>
                  <p>sales@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <IoLocationSharp className="text-2xl"></IoLocationSharp>
                <div className="space-y-2">
                  <h3>Address</h3>
                  <p>3015 Grand Ave, Banani, Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="pb-10">
          <MapContainer
            center={[23.804693486833536, 90.41041631531532]}
            zoom={13}
            scrollWheelZoom={false}
            style={{height: 536}}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[23.804693486833536, 90.41041631531532]}>
              <Popup>
               Dhaka,Bangladesh
              </Popup>
            </Marker> */}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
