import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Root() {
  return (
    <div>
      <div className="container mx-auto">
      <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  )
}
