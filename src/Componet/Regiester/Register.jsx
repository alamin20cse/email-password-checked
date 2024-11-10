import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [errormassage, seterrormassage] = useState('');
    const [succes, setsucces] = useState(false);
    const [showpassword, setshowpassword] = useState(false);

    const handelRegiester = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const term=event.target.term.checked;
        // console.log(term)
        // console.log('clicked');

        // reset error message
        seterrormassage('');
        setsucces(false);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if(!term)
            {
                seterrormassage('please accpet our trems and condition');
                return;
            }

        if (!passwordRegex.test(password)) {
            seterrormassage('password must at lest 6 charter,and upper lower');
            return;
        }
       

        // create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setsucces(true);
            })
            .catch((error) => {
                seterrormassage(error.message);
                console.log('ERROR' + error.message);
                setsucces(false);
            })




    }
    return (
        <div className='py-6 max-w-lg mx-auto'>
            <h1>Regiseter</h1>


            <form onSubmit={handelRegiester} className='py-6'>

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" name='email' className="grow" placeholder="Email" />
                </label>



                <div className='relative'>

                    <label className="input input-bordered flex items-center gap-2 my-8 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type={showpassword ? "text" : "password"} name='password' className="grow" />
                    </label>

                    <button onClick={() => {
                        setshowpassword(!showpassword);
                    }} className='absolute top-4 right-4'>{showpassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </button>

                </div>

                <div className="form-control">
                    <label className="cursor-pointer label justify-start">
                    <input type="checkbox" name='term' className="checkbox checkbox-accent" />
                        <span className="label-text">Acept our Treams and policy</span>
                       
                    </label>
                </div>



                <button className="btn btn-primary btn-wide">Login</button>

            </form>

            {
                errormassage && <p className='text-red-600 text-3xl'>{errormassage}</p>
            }
            {
                succes && <p>Succesfully login </p>
            }


        </div>
    );
};

export default Register;