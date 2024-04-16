import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import netflix from "./assets/netflix.svg";
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import a from "./assets/a.svg";
export const Movie = () => {
    const { movie_name } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [review, setReview] = useState("");
    const [reviews,setReviews] = useState([])
    const [s,setS] = useState(a);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/movie/${movie_name}`).then((res) => {
            console.log(createAvatar(lorelei,{seed:"anoasdasd"}).toString());
            setMovieData(res.data);
            setReviews(res.data["reviews"]);
            const s = createAvatar(lorelei,{seed:"anosdasd"}).toString();
            setS(s)
        })
    }, [movie_name]);

    const handleReview = (e) => {
        e.preventDefault();
        console.log(review);
        axios.post("http://127.0.0.1:8000/api/review", {
            "name": movieData["name"],
            "review": review
        }).then((res) => {
            console.log(res.data);
            setReviews(res.data["reviews"]);
        })
    }
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
                                <li className="flex items-center">
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
                    <div className="pt-8">
                        <textarea rows={5} cols={75}
                            type="text"
                            placeholder="Add a review"
                            className="outline-none bg-[rgba(0,0,0,0.1)] mx-24 p-4 flex flex-1 border-2 border-red-800 text-white rounded-xl overflow-auto gap-x-4"
                            onChange={
                                (e) => {
                                    e.preventDefault();
                                    setReview(e.target.value);
                                    console.log(review);
                                }} />
                    </div>
                    <button className="w-fit bg-red-700 text-white px-4 py-2 mt-6 mx-24 rounded-lg" onClick={(e)=>handleReview(e)}>
                        Add +
                    </button>

                </section>

                <section>
                    <div className="pt-8">
                        <ul className="px-24  flex flex-1 flex-wrap  gap-x-4 gap-y-4 w-[100%] overflow-y-hidden text-ellipsis">
                            {
                                reviews && reviews.map((val, ind) => (
                                    <li className="flex flex-col w-[100%] h-[25vh] p-4 text-white rounded-xl bg-[rgba(0,0,0,0.1)] border-2 border-red-800 ">
                                        <div className="">
                                            <div className="flex items-center gap-x-2">
                                                <img src={a} alt="avatar" className="w-10"/>
                                                {/* <img src={netflix} alt="" className="w-[60px] h-[60px] p-2 rounded-[50%] border-2 border-[rgb(255,255,255,0.5)]" /> */}
                                                <span>Anonymous user</span>
                                            </div>
                                            <div className="py-2 flex flex-1  gap-x-4 mt-4 text-white">
                                                <span className="px-4 text-clip overflow-hidden">{val}</span>
                                            </div>
                                        </div>
                                    </li>
                                )) 
                            }
                        </ul>
                    </div>
                </section>
            </main> : null
    )
}