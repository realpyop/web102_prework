import React, { useState, useEffect } from 'react';

const AnimeList = ({ animelist, setAnimeInfo, animeComponent }) => {

    const AddToList = animeComponent;
    return (
        <>
            {
                animelist ? (
                    animelist.map((anime, index) => {
                        return (
                            < div className='anime-card' key={index} onClick={() => setAnimeInfo(anime)} >
                                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                                <div className='anime-info'>
                                    <h4>{anime.title}</h4>
                                    <h5>{anime.title_japanese}</h5>
                                    <div className='overlay'>
                                        <AddToList />
                                    </div>
                                </div>
                            </div >
                        )
                    })
                ) : "Empty"
            }
        </>

    )
}

export default AnimeList;