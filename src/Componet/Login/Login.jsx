import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebase.init';
import { Link } from 'react-router-dom';
// codeALAMIN10$


const Login = () => {
    const [succes, setsucces] = useState(false);
    const [errormessage, seterrormessage] = useState('');
    const emailref=useRef();

    const handelLoging = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        

        // reset sucess
        setsucces(false);
        // reset error
        seterrormessage('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);


                if(!result.user.emailVerified)
                {
                    seterrormessage('please verifiy ')
                }
                else{
                    setsucces(true);

                }

               
            })
            .catch((error) => {
                setsucces(false);
                seterrormessage(error.message);

                console.log('ERROR ', error.message);
            })




    }


    const handelforgetpassword=()=>{
        console.log('get me email password');
        console.log(emailref.current.value);

        const email=emailref.current.value;
        if(!email)
        {
            console.log('please give a valid email');
        }
        else
        {
            sendPasswordResetEmail(auth,email)
            .then(result=>{
                alert('please checke your email ')
            
            })
        }

                
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    {/* form start from here */}
                    <form onSubmit={handelLoging} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" ref={emailref} name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label onClick={handelforgetpassword} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        succes && <p className='text-2xl text-green-600'>User Login Succefuly </p>
                    }

                    {
                        errormessage && <p className='text-2xl text-red-600'>{errormessage}</p>
                    }


                    <p>New to website please <Link className='underline' to='/regiester'>Sign up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;