'use client'
import githubLogo from "../../../public/img/icons8-github.svg";
import gmailLogo from "../../../public/img/icons8-google.svg";
import Image from "next/image";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Database } from "../../../types/supabase";
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState('');

  async function signIn(formData:any) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      window.location = window.location.origin;
    }
  }

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleLogIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div className="hero min-h-screen font-inconsolata select-none">
      <div className="hero-content flex-col lg:flex-row gap-32">
        <div className="text-center lg:text-left">
          <h1 className="text-[32px] mb-[-12px]">LOGIN TO <span className='animate-text font-majorMono font-bold bg-gradient-to-r from-teal-500 via-primary to-teal-500 bg-clip-text text-[44px] text-transparent'>
            swApify
          </span></h1>
          <p className="py-6 max-w-[510px] text-justify font-extralight">
            Use your email address and <i>super secret password</i> to log in and access the website and start exchanging skills!<br /><br />
            Need assistance or have questions? Our support team is here to help. Contact us anytime; we are just a message away!
          </p>
        </div>
        <Formik 
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={signIn}
          >
             {({ errors, touched }) => (
              <Form className="card bg-accident flex-shrink-0 w-full max-w-sm shadow-2xl shadow-secondary p-12">
                <label htmlFor="email">Email</label>
                <Field
                  className={cn('input', errors.email && touched.email && 'bg-red-950/30')}
                  id="email"
                  name="email"
                  placeholder="JohnDoe69@swapify.com"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-600/80">{errors.email}</div>
                ) : null}

                <label htmlFor="email">Password</label>
                <Field
                  className={cn('input', errors.password && touched.password && 'bg-red-950/30')}
                  placeholder="MyPassword#6969"
                  id="password"
                  name="password"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-600/80">{errors.password}</div>
                ) : null}

                <Link href="/reset-password" className="label-text-alt link link-hover pt-2">
                  Forgot your password?
                </Link>
                <br></br>
                <button className="btn w-full mb-2 bg-primary-dark border-accent hover:bg-primary-dark text-white" type="submit">
                  LOGIN
                </button>
                {errorMsg && <div className="text-red-600/80">{errorMsg}</div>}
                <br></br>
                <div className="flex flex-col justify-center items-center pt-1">
                  <p className="text-sm">{`Don't have an account`}?</p>
                  <Link href="/sign-up">
                  <span className="text-md underline underline-offset-3">Signup Here</span>
                  </Link> 
                </div>      
              </Form>
          )}
          </Formik>
          
          {/* <div className="px-8 py-5 card-body">
            <div className="form-control ">
              <label htmlFor="email" className="label ">
                <span className="label-text ">Email</span>
              </label>
              <input
               name="email"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               type="text" placeholder="crispyaloo@gmail.com" className="input input-bordered bg-accident"  />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="GolGappe6969" className="input input-bordered bg-accident" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-1">
              <div className="flex justify-center items-center flex-col w-full">
                <button type="submit" onClick={handleLogIn} className="btn w-full mb-2 bg-primary-dark border-accent hover:bg-primary-dark text-white">
                  Login
                </button>
                <div className="w-full flex items-center mb-2">
                  <hr className="w-full border-t border-solid border-gray-300" />
                  <span className="mx-3 text-gray-500 text-md">OR</span>
                  <hr className="w-full border-t border-solid border-gray-300" />
                </div>
                <div className="flex gap-2 w-full justify-center items-center">
                  <button className="btn w-[48.5%] bg-primary-darker border-primary-darker hover:bg-primary-darker text-white">
                    <Image src={gmailLogo} alt="Gmail Icon" width={16} height={16} className="inline-block mr-2" />
                    <span className="mb-[1px]">Google</span>
                  </button>
                  <button className="btn w-[48.5%] bg-primary-darker border-primary-darker hover:bg-primary-darker text-white" >
                    <Image src={githubLogo} alt="GitHub Icon" width={20} height={20} className="inline-block mr-2" />
                    <span className="mb-[1px]">GitHub</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-1">
              <p className="text-sm">{`Don't have an account`}?</p>
              <br />
              <span className="text-md mt-[-25px] underline underline-offset-3">SignUp Here</span>
            </div>
          </div> */}
        
      </div>
    </div>
  );
}
