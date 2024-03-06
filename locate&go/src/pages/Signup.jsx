import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import mybackgroundImage from '../assets/img2LocateandGo.jpeg';
import Header from '../components/Header2';
import Footer from '../components/Footer';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div>
      <Header />
      <div className="bg-cover bg-center bg-no-repeat h-dvh w-full flex justify-start" style={{ backgroundImage: `url(${mybackgroundImage})` }}>
        <div className={`text-white flex flex-col items-center
            p-10 bg-black bg-opacity-55 m-32 ${hasErrors ? 'h-5/6' : 'h-3/4'}`}>
         <h2 className={`text-white font-bold  ${hasErrors ? 'text-2xl' : 'text-4xl'}`}>SIGN UP</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col items-start'>
              <label className="font-bold" htmlFor="firstName">First Name</label>
              <input
                type="text"
                {...register("firstName", { required: "First name is required" })}
                className='p-2 m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent'
              />
              {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
            </div>
            <div className='flex flex-col items-start'>
              <label className="font-bold" htmlFor="lastName">Last Name</label>
              <input
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                className='p-2 m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent'
              />
              {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
            </div>
            <div className='flex flex-col items-start'>
              <label className="font-bold" htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                {...register("phoneNumber", { required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } })}
                className='p-2 m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent'
              />
              {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber.message}</p>}
            </div>
            <div className='flex flex-col items-start'>
              <label className="font-bold" htmlFor="email">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" } })}
                className='p-2 m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent'
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className='flex flex-col items-start'>
              <label className='font-bold' htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required",
                 minLength: { value: 8, message: "Password must be at least 8 characters" },
                 pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message: "Password must contain at least one digit and one special character"
                  } })}
                className='p-2 m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent'
              />
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>
            <div className='flex flex-col items-start'>
              <label className='font-bold' htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", { required: "Please confirm password", validate: value => value === password || "The passwords do not match" })}
                className='p-2 m-2 w-[18.75rem] rounded bg-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent'
              />
              {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
            </div>
            <button className='p-2 m-2 w-[18.75rem] rounded bg-amber-300 font-bold'>SIGN UP</button>
            <div className='flex flex-row'>
              <p>Already have an account? </p>
              <Link to={'/'} className='text-amber-900 pl-2 font-bold'>Log In</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;