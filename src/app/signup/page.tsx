import githubLogo from "../../../public/img/icons8-github.svg";
import gmailLogo from "../../../public/img/icons8-google.svg";
import Image from "next/image";

export default function Login() {
  return (
    <div className="hero min-h-screen font-inconsolata select-none">
      <div className="hero-content flex-col lg:flex-row-reverse gap-32">
        <div className="text-center lg:text-left">
          <h1 className="text-[32px] mb-[-12px]">SIGNUP FOR <span className='animate-text font-majorMono font-bold bg-gradient-to-r from-teal-500 via-primary to-teal-500 bg-clip-text text-[44px] text-transparent'>
            swApify
          </span></h1>
          <p className="py-6 max-w-[510px] text-justify font-extralight">
          A warm welcome awaits! 🚀 Creating an account is a breeze, and it is your ticket to becoming a part of our dynamic community.<br></br><br></br>
            Join us and dive into a world of possibilities, connections, and experiences. It is the perfect time to start your adventure with us.
          </p>
        </div>
        <div className="card bg-accident flex-shrink-0 w-full max-w-sm shadow-2xl shadow-secondary">
          <div className="px-8 py-5 card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" placeholder="KarareAloo" className="input input-bordered bg-accident" />
            </div>
            <div className="form-control ">
              <label className="label ">
                <span className="label-text ">Email</span>
              </label>
              <input type="text" placeholder="crispyaloo@gmail.com" className="input input-bordered bg-accident"  />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="GolGappe6969" className="input input-bordered bg-accident" />
            </div>
            <div className="form-control mt-4">
              <div className="flex justify-center items-center flex-col w-full">
                {/* Increased gap between Login button and other buttons */}
                <button className="btn w-full mb-2 bg-primary-dark border-accent hover:bg-primary-dark text-white">
                  Signup
                </button>
                {/* Horizontal line with adjusted text size */}
                <div className="w-full flex items-center mb-2">
                  <hr className="w-full border-t border-solid border-gray-300" />
                  <span className="mx-3 text-gray-500 text-md">OR</span>
                  <hr className="w-full border-t border-solid border-gray-300" />
                </div>
                {/* End of horizontal line */}
                {/* Buttons container with adjusted widths */}
                <div className="flex gap-2 w-full justify-center items-center">
                  {/* Decreased width of Gmail and GitHub buttons */}
                  <button className="btn w-[48.5%] bg-primary-darker border-primary-darker hover:bg-primary-darker text-white">
                    <Image src={gmailLogo} alt="Gmail Icon" width={16} height={16} className="inline-block mr-2" />
                    <span className="mb-[1px]">Google</span>
                  </button>
                  <button className="btn w-[48.5%] bg-primary-darker border-primary-darker hover:bg-primary-darker text-white" >
                    <Image src={githubLogo} alt="GitHub Icon" width={20} height={20} className="inline-block mr-2" />
                    <span className="mb-[1px]">GitHub</span>
                  </button>
                </div>
                {/* End of Buttons container */}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-1">
              <p className="text-sm">{`Already have an account`}?</p>
              <br />
              <span className="text-md mt-[-25px] underline underline-offset-3">Login Here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
