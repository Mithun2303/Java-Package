

import google from "./assets/google.svg";


export const Login = () => {
    return (
        <main className='w-screen h-screen text-white bg-[url(https://i.ibb.co/JcGHZJx/image.jpg)] flex justify-center items-center'>
            <div className="w-1/4 h-fit py-12  bg-[rgba(0,0,0,0.75)] backdrop-blur-xl flex flex-col gap-y-4 items-center">
                <div className="text-3xl text-white text-left flex justify-start w-full px-16">
                    <span>
                        Sign In
                    </span>
                </div>
                <div className="flex flex-col items-center gap-y-4 w-[75%] pt-4">
                    <input type="text" placeholder="Username" className="p-3  w-full bg-[rgb(255,255,255,0.1)] border-[0.125px] border-white" />
                    <input type="text" placeholder="Password" className="p-3  w-full bg-[rgb(255,255,255,0.1)] border-[0.125px] border-white" />
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
                <button onClick={(e) => {
                                e.preventDefault();
                            }}
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