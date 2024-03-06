import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import mybackgroundImage from '../assets/img1Locate_and_Go.jpg';
import Header from '../components/Header2';
import Footer from '../components/Footer';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/moversquote');
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div>
      <Header />
      <div className="bg-cover bg-center bg-no-repeat h-dvh w-full flex justify-center" style={{ backgroundImage: `url(${mybackgroundImage})` }}>
        <div className={`text-white flex flex-col items-center p-10 bg-black bg-opacity-55 m-32 ${hasErrors ? 'h-1/2' : 'h-96'}`}>
            <h2 className={`text-white font-bold  ${hasErrors ? 'text-2xl' : 'text-4xl'}`}>LOG IN</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col items-start'>
              <label className="font-bold" htmlFor="Email">Email</label>
              <input
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address"
                  }
                })}
                className='p-2 m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent'
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className='flex flex-col items-start'>
              <label className='font-bold' htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  }
                })}
                className='p-2 m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent'
              />
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>
            <p className='flex justify-end text-blue-500 font-bold'>Forgot password ?</p>
            <button className='p-2 m-2 w-[18.75rem] rounded bg-amber-300 font-bold'>LOG IN</button>
            <div className='flex flex-row'>
              <p>New to Locate and Go? </p>
              <Link to={'../Signup'} className='text-amber-900 pl-2 font-bold'>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;