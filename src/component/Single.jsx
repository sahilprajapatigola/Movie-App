import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function Single() {

    const { id } = useParams();

    let [singleMovie, setSingleMovie] = useState("");


    let getSingleData = async () => {
        const data = await axios.get(`http://www.omdbapi.com/?apikey=6f17d76d&i=${id}`);
        console.log(data);
        setSingleMovie(data?.data);
    }

    useEffect(() => {
        getSingleData();
    }, [id])


    return (
        <div>
            <div className="container-fluid">
                <div className="row px-4 my-4 mt-4">
                    <div className="col-4">
                        <div>
                            <img src={singleMovie?.Poster} alt={singleMovie?.Title} className="single-poster" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div>
                            <h2 className="text-light">{singleMovie?.Title}</h2>       
                        </div>
                         <div>
                            <p className="text-light">{singleMovie?.Plot}</p>       
                        </div>
                        <div className="mt-2">
                            <p className="text-grey m-0 fs-5">Rating</p>
                            <p className="m-0 fs-14 text-yellow p-1 px-2 rounded mt-1 card-bg d-inline-block"><span> <i className="fa-solid fa-star"></i></span>{singleMovie?.imdbRating}</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-grey m-0 fs-5">Awards</p>
                            <p className="m-0 text-light fs-14"> {singleMovie?.Awards}</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-grey m-0 fs-5">Country</p>
                            <p className="m-0 text-light fs-14"> {singleMovie?.Country}</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-grey m-0 fs-5">Language</p>
                            <p className="m-0 text-light fs-14"> {singleMovie?.Language}</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-grey m-0 fs-5">Runtime</p>
                            <p className="m-0 text-light fs-14"> {singleMovie?.Runtime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}