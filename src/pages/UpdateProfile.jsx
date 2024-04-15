import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/AuthContextComponent";
import { toast } from "react-toastify";


export default function UpdateProfile() {
  const {user, userUpdateProfile, setReload} = useContext(AuthContext)
  const [name, setName] = useState(user?.displayName || "")
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "")

  useEffect(() => {
    setName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    userUpdateProfile(name, photoURL)
      .then(() => {
        toast.success("SuccessFully Profile Update");
        setReload(true)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const handleName = (e) => {
     setName(e.target.value)
  }
  const handlePhotoURL = (e) => {
    setPhotoURL(e.target.value)
  }

  return (
    <div >
      <Helmet>
        <title>Real Homes | Update Profile</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">

      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Profile</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input

                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={user?.email}
                  disabled
                />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input

                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  value={photoURL}
                  onChange={handlePhotoURL}
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#1ea69a] text-white">
                 Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
