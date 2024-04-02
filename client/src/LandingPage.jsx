import './login.css'
import Logo from './assets/logo.png'
import { useEffect, useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
export const LandingPage = () => {
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState(null);
    const [movieName, setMovieName] = useState();
    useEffect(() => {
        const searchBar = setTimeout(() => {
            console.log(movieName);
            axios.get("http://127.0.0.1:8000/api/search/" + movieName).then((res) => {
                console.log(res.data);
                setSearchResult(res.data);
            })
        }, [300])
        return () => clearTimeout(searchBar)
    }, [movieName])
    return (
        <main className='w-screen h-screen bg-[url(https://i.ibb.co/JcGHZJx/image.jpg)] '>
            <div className="flex flex-col justify-center items-center h-screen ">
                <div className="w-1/2 px-12 flex pt-24 ">
                    <input type="text" onChange={(e) => setMovieName(e.target.value)} className="w-full bg-[rgba(255,255,255,0.25)] backdrop-blur-xl p-6 rounded-l-lg text-xl outline-none text-white" placeholder="Search by movies" />
                    <button className=" px-6 py-2 rounded-r-lg bg-red-700 text-white text-lg">Search</button>
                </div>
                <div className=" mt-12 h-fit">

                    {
                        searchResult != null ?
                            <div className="">
                                <ul className="">
                                    {searchResult.map((val, ind) => (
                                        <li className="flex w-full bg-[rgba(0,0,0,0.5)]" >
                                            <a href={`/m/${val.key}`}>
                                            <img src={val.thumbnail} alt="" className="max-w-[50px]" onclick={(e)=>{e.preventDefault();navigate(`/m/${val.key}`)}} />
                                            </a>
                                            <button onclick={(e)=>{e.preventDefault();navigate(`/m/${val.key}`);console.log("hello")}}>
                                                {val.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            : null
                    }
                </div>
            </div>
        </main>
    )
}