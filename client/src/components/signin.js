import React, { useState } from 'react';
import appLogo from '../assets/slack_logo.svg'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const Signin = ({}) => {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex items-center justify-center pt-12 pb-10'>
                <img src={appLogo} className='h-7 w-28'/>
            </div>
            <div className='flex flex-col w-full items-center justify-center'>
                <span className='flex font-bold text-5xl mb-3'>Sign in to Slack</span>
                <span className='flex text-lg mb-8' style={{ fontFamily: 'Lato' }}>We suggest using the <strong style={{ marginLeft: '5px' }}>email address that you use at work</strong></span>
                <div className='flex flex-col w-96'>
                    <GoogleOAuthProvider clientId="344719200583-ac7hjfo9qov771h07d3bb62cj31r1juq.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        />
                        {/* <GoogleLogin className='flex items-center justify-center border-2 h-11 font-bold text-lg rounded-md hover:shadow-md transition duration-0 hover:duration-700' style={{ borderColor: 'rgba(29, 28, 29, 0.3)' }}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4 mr-3">
                                <g>
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path class="c-third_party_auth__icon__google--blue" fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path>
                                </g>
                            </svg>
                            <span>Sign in with Google</span>
                        </GoogleLogin> */}
                    </GoogleOAuthProvider>
                    <button className='flex items-center justify-center border-2 mt-6 h-11 font-bold text-lg rounded-md hover:shadow-md transition duration-0 hover:duration-700' style={{ borderColor: 'rgba(29, 28, 29, 0.3)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 mr-3">
                            <path d="M10.16 -2.38419e-07C7.8 0.56 6.9 2.1 6.86 4.14C7.76 4.06 8.27 3.96 8.99 3.23C9.84 2.37 10.22 1.26 10.22 0.43C10.22 0.219999 10.2 0.129999 10.16 -2.38419e-07ZM10.33 3.84C9.86 3.84 9.28 3.95 8.59 4.19C7.94 4.42 7.46 4.54 7.16 4.54C6.92 4.54 6.46 4.43 5.77 4.23C5.07 4.03 4.47 3.92 3.99 3.92C1.69 3.92 1.19209e-07 6.11 1.19209e-07 9.22C1.19209e-07 10.86 0.49 12.58 1.48 14.35C2.47 16.12 3.49 17 4.5 17C4.84 17 5.29 16.89 5.83 16.65C6.36 16.41 6.84 16.32 7.26 16.32C7.69 16.32 8.2 16.43 8.77 16.64C9.39 16.87 9.85 17 10.18 17C11.9 17 13.48 14.12 14 12.41C12.8 12.05 11.72 10.53 11.72 8.85C11.72 7.3 12.46 6.44 13.52 5.53C12.82 4.66 11.93 3.84 10.33 3.84Z" fill="#1D1C1D"></path>
                        </svg>
                        <span>Sign in with Apple</span>
                    </button>
                </div>
                <div className='flex flex-row w-96 items-center my-6'>
                    <hr className='flex border-t border-solid border-red-100 flex-grow' style={{ borderColor: 'rgb(221, 221, 221)' }}/>
                    <div className='px-5'>
                        OR
                    </div>
                    <hr className='flex border-t border-solid border-red-100 flex-grow' style={{ borderColor: 'rgb(221, 221, 221)' }}/>
                </div>
                <div className='flex w-96 border-2 h-11 font-bold text-lg mb-5 rounded-md hover:shadow-md transition duration-0 hover:duration-700' style={{ borderColor: 'rgba(29, 28, 29, 0.3)' }}>
                    <input className='flex w-96 items-center justify-center outline-none px-3 font-normal' placeholder='name@work-email.com'></input>
                </div>
                <button className='flex items-center w-96 justify-center border-2 h-11 font-bold mb-5 text-lg rounded-md hover:shadow-md hover:opacity-90' style={{ borderColor: 'rgba(29, 28, 29, 0.3)', backgroundColor: 'rgb(74, 21, 75)' }}>
                    <span className='text-white'>Sign in with email</span>
                </button>
            </div>
        </div>
    );
}

export default Signin;