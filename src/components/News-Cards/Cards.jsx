import React, { useEffect, useState } from 'react';
// import "../News-Cards/Cards.scss";

function Cards() {

    const [news, setNews] = useState([]);

    const fetchData = async () => {
        let responce = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=700e0e9a18eb44bcb455309875ccd779");
        let data = await responce.json();
        setNews(data.articles)
        console.log(data)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <h1 className="text-center my-3">Enjoy Daily Top - Headlines</h1>
            <br /> <br />
            <div className="main row row-cols-2 row-cols-md-4 g-4">
                {news.map((ele) => {
                    return (
                        <>
                            <div class="card text-center d-flex border border-5 m-3">
                                <div class="card-header col">
                                    <h3>{ele.title}</h3>
                                </div>
                                <div class="card-body">
                                    <img src={ele.urlToImage == null ? "" : ele.urlToImage} class="card-img-top" alt="Home Image" />
                            
                                    <h5 class="card-title">{ele.content}</h5>
                                    <p class="card-text">{ele.description}</p>
                                    {/* where target ="_blank" redirect the page on new tab */}
                                    <a href={ele.url} target="_blank" class="btn btn-primary">Read More - Details</a>
                                </div>
                                <div class="card-footer text-muted">
                                    Author : {ele.author == "" ? "Janelle Ash" : ele.author},  Date of Publish : {ele.publishedAt}
                                </div>
                            </div>
                            <br /> <br />
                        </>
                    );
                })}
            </div>
        </>
    )
    
}

export default Cards;