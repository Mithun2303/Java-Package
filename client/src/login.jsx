import './login.css'
import Logo from './assets/logo.png'
export const Login = () => {
    return(
        <main>
            
            <div className="flex justify-center items-center h-screen">
                <div className="w-1/3 p-4 flex ">
                    <input type="text" className="w-full px-4 py-2 rounded-l-lg text-xl" placeholder="Search"/>
                    <button className=" px-6 py-2 rounded-r-lg bg-red-500 text-white">Search</button>
                </div>
            </div>

            

            
      </main>
    )
}