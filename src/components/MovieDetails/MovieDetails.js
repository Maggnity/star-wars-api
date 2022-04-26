/*import React from 'react';
import { Card } from '@mui/material';
import { useParams } from "react-router-dom";
import FetchData from '../../swapi';


export default function MovieDetails(props){
    console.log(FetchData);
    let id = useParams();

    const getMovieDetails = (id) => {
        const movieDetail = props.moveList.results.filter(
            (e) => id == e.episode_id
        );

        return (
            <div>
                {movieDetail[0] ?(
                    <>
                        <div>{getMovieImg(id)}</div>
                        <div className="movie_details_info">
                        <div>Title: {movieDetail[0].title}</div>
                        <div>Producer: {movieDetail[0].producer}</div>
                        <div>Release date: {movieDetail[0].release_date}</div>
                        <div>Opening crawl: {movieDetail[0].opening_crawl}</div>
                        </div>
                    </>
                ) : ("")}
            </div>
        )
    }

    const getMovieImg = (id) => {
        return (
            <img
              alt=""
              className="movie_details_img"
              src={process.env.PUBLIC_URL + `${id}.jpg`}
            ></img>
          );       
    }
    return (
        <div className="movie_detail_wraper">
          {props.movieList ? getMovieDetails(id): <Card/> }
        </div>
      );
}
*/