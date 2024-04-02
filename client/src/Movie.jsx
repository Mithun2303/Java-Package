import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export const Movie = () => {
    const { movie_name } = useParams();
    const [movieData, setMovieData] = useState(null);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${movie_name}`).then((res) => {
            console.log(res);
            setMovieData(res.data);
        })
    }, [movie_name]);
    return (
        movieData != null ?
            <main className=' text-white bg-[rgba(0,0,0,0.9)] min-h-screen px-16'>
                <section className="flex w-[75%] pt-16 px-12 gap-x-12">
                    <div className="">
                        <img src={movieData.thumbnail} alt="" className="min-w-[200px]" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-3xl">
                            {movieData.title}                        </h1>
                        {movieData.synopsis}
                    </div>
                </section>
                <section>
                    <h1 className="text-3xl pt-12 px-12">
                        Details
                    </h1>
                    <div className="pt-8 px-16">
                        <ul className="flex flex-col gap-y-1">
                            {movieData["Box Office (Gross USA):"] != null ?
                                <li>
                                    <strong>Box Office (Gross USA) : </strong> {movieData["Box Office (Gross USA):"]}
                                </li> : null}
                            {movieData["Director:"] != null ?
                                <li>
                                    <strong>Director :</strong> {movieData["Director:"]}
                                </li> : null
                            }

                            {movieData["Distributor:"] != null ?
                                <li>
                                    <strong>Distributor : </strong> {movieData["Distributor:"]}
                                </li> : null
                            }

                            {movieData["Genre:"] != null ?
                                <li>
                                    <strong>Genre: </strong> {movieData["Genre:"]}
                                </li> : null
                            }

                            {movieData["Original Language:"] != null ?
                                <li>
                                    <strong>Original Language: </strong> {movieData["Original Language:"]}
                                </li> : null
                            }

                            {movieData["Producer:"] != null ?
                                <li>
                                    <strong>Producer: </strong> {movieData["Producer:"]}
                                </li> : null
                            }

                            {movieData["Production Co:"] != null ?
                                <li>
                                    <strong>Production Co: </strong> {movieData["Production Co:"]}
                                </li> : null
                            }

                            {movieData["Rating:"] != null ?
                                <li>
                                    <strong>Rating: </strong> {movieData["Rating:"]}
                                </li> : null
                            }

                            {movieData["Release Date (Streaming):"] != null ?
                                <li>
                                    <strong>Release Date (Streaming): </strong> {movieData["Release Date (Streaming):"]}
                                </li> : null
                            }
                            {movieData["Release Date (Theaters):"] != null ?
                                <li>
                                    <strong>Release Date (Theaters):: </strong> {movieData["Release Date (Theaters):"]}
                                </li> : null
                            }
                            {movieData["Rerelease Date (Theaters)::"]!=null?
                                <li>
                                <strong>Rerelease Date (Theaters): </strong> {movieData["Rerelease Date (Theaters):"]}
                            </li>:null
                            }
                            {movieData["Runtime:"]!=null?
                                <li>
                                <strong>Runtime </strong> {movieData["Runtime:"]}
                            </li>:null
                            }
                            {movieData["View the collection:"]!=null?
                                <li>
                                <strong>View the collection: </strong> {movieData["View the collection:"]}
                            </li>:null
                            }
                            {movieData["Writer:"]!=null?
                                <li>
                                <strong>Writer: </strong> {movieData["Writer:"]}
                            </li>:null
                            }

                        </ul>
                    </div>
                </section>
                <section>
                    <h1 className="text-3xl pt-12 px-12">
                        Where to Watch
                    </h1>
                    {/* {movieData["where-to-watch"].map((val,ind)=>(
                        <li>
                            {val}
                        </li>
                    ))} */}
                </section>

                <section>
                    <h1 className="text-3xl pt-12 px-12">
                        Cast & Crew
                    </h1>
                    <div className="pt-8">
                        <ul className="mx-16 flex flex-1 overflow-auto gap-x-4">

                            {movieData["cast-crew"].map((val, ind) => (
                                <li className="">
                                    <img src={val.img} alt="" id={ind} className="min-w-[150px] max-w-[150px]" />
                                    <label htmlFor={ind} className="text-xl">{val.name}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main> : null
    )
}