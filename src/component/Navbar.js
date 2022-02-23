import React, { useEffect, useState } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'





export default function Navbar() {
    const [same, setSame] = useState([])

    const HandlonChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        const text = e.target.value
        

        fetch(` https://api.themoviedb.org/3/search/movie?api_key=abdca3eea1b7fb0c1f10423e2fc33135&query=${text}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setSame(data.results)
            })


    }

     
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <h1><Link className="navbar-brand" to="/">Movies Gyan</Link></h1>


                <div className="collapse1 navbar-collapse1 d-flex" id="navbarSupportedContent1">

                    <form className="form  my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" size="80" onChange={HandlonChange} />
                        
                    </form>
                    <Link className="btn btn2 btn-outline-danger my-2 my-sm-0 text-white" type="submit" to="/Login">Login</Link>
                </div>
            </nav>
            <div className="container2">
                <div className="  container3">

                    {



                        same.map((curElem, key) => {
                            console.log(curElem)
                            const poster = "https://image.tmdb.org/t/p/w500";
                            return (

                                <div className="card card2" style={{ width: '18rem' }} key={key}>
                                    <img className="card-img-top" src={poster + curElem.poster_path} alt="Card img cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{curElem.title}</h5>
                                        <p className="card-text">{curElem.overview}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Original language:{curElem.original_language}</li>
                                        <li className="list-group-item">Popularity:{curElem.popularity}</li>
                                        <li className="list-group-item">Release date:{curElem.release_date}</li>
                                        <li className="list-group-item">Vote Average:{curElem.vote_average}</li>
                                    </ul>

                                </div>
                            )
                        })


                    }

                </div>
            </div>
        </>
    )
}
