import React from 'react';
import "../News-Cards/Cards.scss";
import img from "../../Images/headline-news.svg";

function Navbar() {
    return (
        <>
            <div className="slider border border-5 m-3 ">
                <nav className="navbar navbar-expand-lg navbar-light bg-light p-5 border border-primary rounded-3">
                    <div className="container-fluid">

                    <img src={img} alt="" width="90" height="90" class="d-inline-block align-text-top"/> &nbsp;&nbsp;
                       
                        <a className="navbar-brand text-success" href="#"><h2>My News-App</h2></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse fs-5 text-white-50" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://news.google.com/showcase?hl=en-IN&gl=IN&ceid=IN%3Aen">News Showcase</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://news.google.com/topics/CAAqJQgKIh9DQkFTRVFvSUwyMHZNRE55YXpBU0JXVnVMVWRDS0FBUAE?hl=en-IN&gl=IN&ceid=IN%3Aen">India</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://news.google.com/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNRGx1YlY4U0JXVnVMVWRDR2dKSlRpZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen">World</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://news.google.com/topics/CAAqHAgKIhZDQklTQ2pvSWJHOWpZV3hmZGpJb0FBUAE?hl=en-IN&gl=IN&ceid=IN%3Aen">Local</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://news.google.com/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNRGx6TVdZU0JXVnVMVWRDR2dKSlRpZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://news.google.com/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNRGRqTVhZU0JXVnVMVWRDR2dKSlRpZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen">Technology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://news.google.com/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNREpxYW5RU0JXVnVMVWRDR2dKSlRpZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen">Entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://news.google.com/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNRFp1ZEdvU0JXVnVMVWRDR2dKSlRpZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://news.google.com/topics/CAAqJQgKIh9DQkFTRVFvSUwyMHZNR3QwTlRFU0JXVnVMVWRDS0FBUAE?hl=en-IN&gl=IN&ceid=IN%3Aen">Health</a>
                                </li>


                                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More News
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">India</a></li>
                                    <li><a className="dropdown-item" href="#">World</a></li>
                                    <li><a className="dropdown-item" href="#">Local</a></li>
                                    <li><a className="dropdown-item" href="#">Business</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}


                            </ul>

                            <form className="d-flex">
                                <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;


