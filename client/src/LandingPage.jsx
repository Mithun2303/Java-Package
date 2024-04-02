import './login.css'
import Logo from './assets/logo.png'
export const LandingPage = () => {
    return(
        <main className='w-screen h-screen bg-[url(https://i.ibb.co/JcGHZJx/image.jpg)]'>
            
            <div className="flex justify-center items-center h-screen">
                <div className="w-1/2 p-12 flex ">
                    <input type="text" className="w-full bg-[rgba(255,255,255,0.25)] backdrop-blur-xl p-6 rounded-l-lg text-xl outline-none text-white" placeholder="Search by movies"/>
                    <button className=" px-6 py-2 rounded-r-lg bg-red-700 text-white text-lg">Search</button>
                </div>
            </div>

            

            
      </main>
    )
}