import React, { useState, useEffect } from "react";

const AnimeInfo = (props) => {
    const { title, images: { jpg: { large_image_url } }, source, rank, score, popularity, members, status, rating, duration } = props.animeInfo
    return (
        <div className="anime-content">
            <h3>{title}</h3>
            <img src={large_image_url} />
            <div className="infor">
                <h3>#Rank: {rank}</h3>
                <h3>#Score: {score}</h3>
                <h3>Rating: {rating}</h3>
                <h4>Status: {status}</h4>
            </div>
        </div>
    )
}

export default AnimeInfo;