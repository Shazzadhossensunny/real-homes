
import { useForm} from "react-hook-form"
import { Link } from "react-router-dom"
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div   className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          </form>

        <p className="text-sm">Don't have an account? <Link to='/register' className="text-[#1cb2ff] hover:link-hover">Register</Link> </p>
        </div>
      </div>
    </div>
  </div>
  )
}
