import { useEffect, useState } from "react";
import axios from "axios";
export const Movie = () => {
    const movie_name = "toy_story";
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
                            <li>
                                <strong>Box Office (Gross USA) : </strong> {movieData["Box Office (Gross USA):"]}
                            </li>
                            <li>
                                <strong>Director :</strong> {movieData["Director:"]}
                            </li>
                            <li>
                                <strong>Distributor : </strong> {movieData["Distributor:"]}
                            </li>
                            <li>
                                <strong>Genre: </strong> {movieData["Genre:"]}
                            </li>
                            <li>
                                <strong>Original Language: </strong> {movieData["Original Language:"]}
                            </li>
                            <li>
                                <strong>Producer: </strong> {movieData["Producer:"]}
                            </li>
                            <li>
                                <strong>Production Co: </strong> {movieData["Production Co:"]}
                            </li>
                            <li>
                                <strong>Rating: </strong> {movieData["Rating:"]}
                            </li>
                            <li>
                                <strong>Release Date (Streaming): </strong> {movieData["Release Date (Streaming):"]}
                            </li>
                            <li>
                                <strong>Release Date (Theaters):: </strong> {movieData["Release Date (Theaters):"]}
                            </li>
                            <li>
                                <strong>Rerelease Date (Theaters): </strong> {movieData["Rerelease Date (Theaters):"]}
                            </li>
                            <li>
                                <strong>Runtime </strong> {movieData["Runtime"]}
                            </li>
                            <li>
                                <strong>View the collection: </strong> {movieData["View the collection:"]}
                            </li>
                            <li>
                                <strong>Writer: </strong> {movieData["Writer:"]}
                            </li>

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
                    <div>
                        <ul className="px-16 flex flex-1 overflow-auto gap-x-4">

                            {movieData["cast-crew"].map((val, ind) => (
                                <li className="">
                                    <img src={val.img} alt="" id={ind} className="min-w-[150px] max-w-[150px]"/>
                                    <label htmlFor={ind} className="text-xl">{val.name}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main> : null
    )
}