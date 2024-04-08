import { Link } from 'react-router-dom'
import errorImg from '../assets/error.jpg'
export default function ErrorPage() {
  return (
    <div className="container mx-auto mt-8">
        <div className='flex flex-col justify-center items-center'>
        <img className='h-full lg:h-[600px] w-full object-contain' src={errorImg} alt="" />
       <Link to='/' className='btn btn-primary'>Return Home</Link>
        </div>

    </div>
  )
}
