import React from "react";
import'./Card.css';


const Card = (props)=>{
    console.log (props.info);
    let img_path="https://image.tmdb.org/t/p/w500";

    return(
        <>
            <div className="movie">
                <img src={img_path+props.info.poster_path} alt="photo" className="poster"/>
                <div className="movie-detalis">
                    <div className="box">
                            <h4 className="title">{props.info.title}</h4>
                            <p className="rating">{props.info.vote_average} </p>                      
                    </div>
                    <div className="overview">
                            <h1>overview</h1>
                            {props.info.overview}
                             <h2>release date</h2>
                            {props.info.release_date}
                                                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;