import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

import google from "./assets/google.svg";


export const Login = () => {
    // const [isLogin, setIsLogin] = useState(true);
    // const [username, setusername] = useState("");
    // const [password, setpassword] = useState("");
    // const [toggleValue, setValue] = useState(false);
    // let [errormessage, seterrrormessage] = useState("");
    // let [pwdcrct, setpwdcrct] = useState(true);
    // const [user, setUser] = useState(null);
    // const [profile, setProfile] = useState(null);
    // const toggleSetValue = () => {
    //     setValue(!toggleValue);
    // };
    // const RenderEye = () => {
    //     if (toggleValue) {
    //         return (
    //             <svg
    //                 className=""
    //                 width="20px"
    //                 height="20px"
    //                 strokeWidth="1.5"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 color="#000000"
    //             >
    //                 <path
    //                     d="M12 14a2 2 0 100-4 2 2 0 000 4z"
    //                     stroke="#000000"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                 ></path>
    //                 <path
    //                     d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
    //                     stroke="#000000"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                 ></path>
    //             </svg>
    //         );
    //     } else
    //         return (
    //             <svg
    //                 className=""
    //                 width="20px"
    //                 height="20px"
    //                 strokeWidth="1.5"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 color="#000000"
    //             >
    //                 <path
    //                     d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823"
    //                     stroke="#000000"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                 ></path>
    //                 <path
    //                     d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5"
    //                     stroke="#000000"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                 ></path>
    //             </svg>
    //         );
    // };
    // const login = useGoogleLogin({
    //     onSuccess: (codeResponse) => { console.log(codeResponse); setUser(codeResponse); },
    //     onError: (error) => console.log('Login Failed:', error)
    // });
    // useEffect(
    //     () => {
    //         if (user) {
    //             axios
    //                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    //                     headers: {
    //                         Authorization: `Bearer ${user.access_token}`,
    //                         Accept: 'application/json'
    //                     }
    //                 })
    //                 .then((res) => {
    //                     console.log(res.data);
    //                     setProfile(res.data);
    //                 })
    //                 .catch((err) => console.log(err));
    //         }
    //     },
    //     [user]
    // );

    // useEffect(
    //     () => {
    //         if (profile) {
    //             console.log(profile);
    //             axios.post("http://127.0.0.1:8000/api/auth/", {
    //                 username: profile.name,
    //                 user_id: profile.id,
    //                 email: profile.email,
    //                 profile: profile.picture,
    //                 user_type: "Google"
    //             }).then((res) => {
    //                 if (res.status == 200) {
    //                     console.log(res.data.data);
    //                     navigate("/");
    //                 }
    //                 else {
    //                     throw (res.data.message);
    //                 }
    //             })
    //                 .catch((err) => {
    //                     console.log(err.message);
    //                 });
    //         }
    //     }, [profile]
    // );

    return (
        <main className='w-screen h-screen text-white bg-[url(https://i.ibb.co/JcGHZJx/image.jpg)] flex justify-center items-center'>
            <div className="w-1/4 h-fit py-12  bg-[rgba(0,0,0,0.75)] backdrop-blur-xl flex flex-col gap-y-4 items-center">
                <div className="text-3xl text-white text-left flex justify-start w-full px-16">
                    <span>
                        Sign In
                    </span>
                </div>
                <div className="flex flex-col items-center gap-y-4 w-[75%] pt-4">
                    <input type="text" placeholder="Username" className="p-3  w-full bg-[rgb(255,255,255,0.1)] border-[0.125px] border-white outline-none" />
                    <input type="text" placeholder="Password" className="p-3  w-full bg-[rgb(255,255,255,0.1)] border-[0.125px] border-white outline-none" />
                </div>
                <div className="pt-3 w-[75%] px-3">
                    <button className="bg-red-700  rounded-sm px-4 py-2 w-full">
                        Submit
                    </button>
                </div>
                <div className="py-2">
                    <span>
                        OR
                    </span>
                </div>
                <div>
                <button 
                // onClick={(e) => {
                //                 e.preventDefault(); login()
                //             }}
                                className="bg-white p-3 rounded-2xl gap-x-2  flex text-black">
                                <img src={google} alt="" className="rounded-[50%] w-[25px]" />
                                <span>
                                    Sign in with google
                                </span>
                            </button>
                </div>
            </div>
        </main>
    )
}