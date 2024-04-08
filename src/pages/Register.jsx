
import { useForm} from "react-hook-form"
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("fullName", { required: true })} type="text" placeholder="Full Name" className="input input-bordered" />
          {errors.fullName && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input {...register("photo")} type="text" placeholder="PhotoURL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
          {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
