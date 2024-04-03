import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import netflix from "./assets/netflix.svg";
export const Movie = () => {
    const { movie_name } = useParams();
    const [movieData, setMovieData] = useState(null);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/movie/${movie_name}`).then((res) => {
            console.log(res);
            setMovieData(res.data);
        })
    }, [movie_name]);
    return (
        movieData != null ?
            <main className=' text-white bg-[rgba(0,0,0,0.9)] min-h-screen px-16 pb-16'>
                <section className="flex w-[75%] pt-16 px-12 gap-x-12">
                    <div className="">
                        <img src={movieData.thumbnail} alt="" className="min-w-[200px]" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-3xl ">
                            {movieData.title}                        </h1>
                        <strong className="text-2xl   px-2 border-l-4 italic font-bold border-red-700">
                            Synopsis
                        </strong>
                        <span className="mx-4">
                            {movieData.synopsis}
                        </span>
                    </div>
                </section>
                <section>
                    <h1 className="text-2xl mt-12 mx-16  px-2 border-l-4 italic font-bold border-red-700">
                        Details
                    </h1>
                    <div className="pt-8 px-20">
                        <ul className="flex flex-col gap-y-1">
                            {movieData["Box Office (Gross USA)"] != null ?
                                <li>
                                    <strong>Box Office (Gross USA) : </strong> {movieData["Box Office (Gross USA)"]}
                                </li> : null}
                            {movieData["Director"] != null ?
                                <li>
                                    <strong>Director :</strong> {movieData["Director"]}
                                </li> : null
                            }

                            {movieData["Distributor"] != null ?
                                <li>
                                    <strong>Distributor : </strong> {movieData["Distributor"]}
                                </li> : null
                            }

                            {movieData["Genre"] != null ?
                                <li>
                                    <strong>Genre: </strong> {movieData["Genre"]}
                                </li> : null
                            }

                            {movieData["Original Language"] != null ?
                                <li>
                                    <strong>Original Language: </strong> {movieData["Original Language"]}
                                </li> : null
                            }

                            {movieData["Producer"] != null ?
                                <li>
                                    <strong>Producer: </strong> {movieData["Producer"]}
                                </li> : null
                            }

                            {movieData["Production Co"] != null ?
                                <li>
                                    <strong>Production Co: </strong> {movieData["Production Co"]}
                                </li> : null
                            }

                            {movieData["Rating"] != null ?
                                <li>
                                    <strong>Rating: </strong> {movieData["Rating"]}
                                </li> : null
                            }

                            {movieData["Release Date (Streaming)"] != null ?
                                <li>
                                    <strong>Release Date (Streaming): </strong> {movieData["Release Date (Streaming)"]}
                                </li> : null
                            }
                            {movieData["Release Date (Theaters)"] != null ?
                                <li>
                                    <strong>Release Date (Theaters): </strong> {movieData["Release Date (Theaters)"]}
                                </li> : null
                            }
                            {movieData["Rerelease Date (Theaters)"] != null ?
                                <li>
                                    <strong>Rerelease Date (Theaters): </strong> {movieData["Rerelease Date (Theaters)"]}
                                </li> : null
                            }
                            {movieData["Runtime"] != null ?
                                <li>
                                    <strong>Runtime </strong> {movieData["Runtime"]}
                                </li> : null
                            }
                            {movieData["View the collection"] != null ?
                                <li>
                                    <strong>View the collection: </strong> {movieData["View the collection"]}
                                </li> : null
                            }
                            {movieData["Writer"] != null ?
                                <li>
                                    <strong>Writer: </strong> {movieData["Writer"]}
                                </li> : null
                            }

                        </ul>
                    </div>
                </section>
                {movieData["where-to-watch"].length != 0 ?
                    <section>
                        <h1 className="text-2xl mt-12 mx-16  px-2 border-l-4 italic font-bold border-red-700">
                            Where to Watch
                        </h1>
                        <ul className="mx-16 pt-12 px-12 flex gap-x-4">
                            {movieData["where-to-watch"].map((val, ind) => (
                                val.media === "netflix" ?
                                    <li className=" w-[60px]">
                                        <a href={val.link}>
                                            <img src={netflix} alt="" className="w-[60px] h-[60px] p-2 bg-white rounded-[50%]" />
                                        </a>
                                    </li> : val.media === "amazon-prime-video-us" ? <li className=" w-[60px]">
                                        <a href={val.link}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg" alt="" className="w-[60px] h-[60px] p-2 bg-white rounded-[50%]" />
                                        </a>
                                    </li> : val.media === "apple-tv-us" ? <li className=" w-[60px]">
                                        <a href={val.link}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg" alt="" className="w-[60px] h-[60px] p-2 bg-white rounded-[50%]" />
                                        </a>
                                    </li> : val.media === "vudu" ? <li className=" w-[60px]">
                                        <a href={val.link}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Vudu_2014_logo.svg" alt="" className="w-[60px] h-[60px] p-2 bg-white rounded-[50%]" />
                                        </a>
                                    </li> : val.media === "disney-plus-us" ? <li className=" w-[60px]">
                                        <a href={val.link}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" alt="" className="w-[60px] h-[60px] p-2 bg-white rounded-[50%]" />
                                        </a>
                                    </li> : val.media === "apple-tv-us" ? <li className=" w-[60px]">
                                        <a href={val.link}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg" alt="" className="w-[60px] h-[60px] p-2 bg-white rounded-[50%]" />
                                        </a>
                                    </li> : null
                            ))}
                        </ul>
                    </section> : null}

                <section>
                    <h1 className="text-2xl mt-12 mx-16  px-2 border-l-4 italic font-bold border-red-700">
                        Cast & Crew
                    </h1>
                    <div className="pt-8">
                        <ul className="mx-24 flex flex-1 overflow-auto gap-x-4">

                            {movieData["cast-crew"].map((val, ind) => (
                                <li className="">
                                    <div>
                                        <img src={val.img} alt="" id={ind} className="min-w-[150px] max-w-[150px]" />
                                        <label htmlFor={ind} className="text-xl">{val.name}</label>
                                    </div>
                                    <span className="text-red-700">
                                        {val.as}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section>
                    <h1 className="text-2xl mt-12 mx-16  px-2 border-l-4 italic font-bold border-red-700">
                        {movieData.title} photos
                    </h1>
                    <div className="pt-8">
                        <ul className="mx-24 flex flex-1 overflow-auto gap-x-4">

                            {movieData["other-images"].map((val, ind) => (
                                <li className="">
                                    <div>
                                        <img src={val} alt="" id={ind} className="min-w-[150px] max-w-[150px]" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section>
                    <h1 className="text-2xl mt-12 mx-16  px-2 border-l-4 italic font-bold border-red-700">
                        Reviews
                    </h1>
                    <div>
                        <input type="text" className="w-" />
                    </div>
                </section>
            </main> : null
    )
}