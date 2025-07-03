import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Single from "./Single";



export default function Home() {

    let [movieAllData, setMovieAllData] = useState([]);
    let [inputValue, setInputValue] = useState("");
    let [searchKeyword, setSearchKeyword] = useState("movie");
    let [isDataAvailable, setIsDataAvailable] = useState(true);

    const getMovieData = async () => {
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?apikey=6f17d76d&s=${searchKeyword}`);
            if (data?.Response == "True") {
                setMovieAllData(data?.Search);
                setIsDataAvailable(true);
            }
            if (data?.Response == "False") {
                setIsDataAvailable(false);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getMovieData();
    }, [searchKeyword])

    let handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    let handleSearch = () => {
        setSearchKeyword(inputValue);
        setInputValue("");
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row px-4">
                    <div className="col-6" style={{ marginTop: "20px" }}>
                        <div>
                            <h1 className="text-light heading">Watch Your Favourite Here...</h1>
                            <p className="text-light font-size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quo necessitatibus minima assumenda vitae suscipit, quibusdam debitis modi earum labore sit aliquam odit totam voluptatum, expedita et eum laboriosam quaerat.</p>
                        </div>
                        <div className="d-flex gap-2">
                            <input type="text" name="" id="" className="input-field w-75 border-0 rounded px-2" placeholder="Serch Your Favourite..." value={inputValue} onChange={handleInputChange} />
                            <button className="w-40 border-0 rounded search-btn" type="submit" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="row px-4 my-4 row-gap-4 gap-3 justify-content-center">
                    {isDataAvailable ? movieAllData.map((movie) => {
                        return (
                            <div className="col-2 d-flex" key={movie?.imdbID}>
                                <NavLink className="text-decoration-none" to={`/single/${movie?.imdbID}`}>
                                    <div className="card-bg">
                                        <div>
                                            <img src={movie?.Poster} alt="movie-cart" className="movie-card p-2 pb-0" />
                                        </div>
                                        <div className="py-2">
                                            <p className="text-light fs-5 m-0 text-center text-overFlow">{movie?.Title}</p>
                                        </div>
                                    </div>
                                </NavLink>

                            </div>
                        )
                    }) : <h1 className="fs-1 text-center text-light">No Result Found</h1>}


                </div>
            </div>
        </div>
    )
}