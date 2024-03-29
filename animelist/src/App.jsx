import { useState, useEffect } from 'react'
import './App.css'
import AnimeList from './components/AnimeList';
import AnimeInfo from './components/AnimeInfo';
import AddToList from './components/AddToList';

function App() {

  const [animeData, setAnimeData] = useState()
  const [search, setSearch] = useState("")
  const [animeInfo, setAnimeInfo] = useState();


  const fetchData = async () => {
    let response
    if (search === '') {
      response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    }
    else {
      response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`);
    }
    const json = await response.json();

    setAnimeData(json.data)
    console.log(json)
  }

  useEffect(() => {
    fetchData();
  }, [search])

  return (
    <div className='whole-page'>
      <div className='nagivation-bar'>
        <h1>My Anime List</h1>

        {/* Search Box */}
        <div className='search-box'>
          <input
            type="text"
            placeholder="Search for anime..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </div>
      </div>



      {/* Anime List  */}
      <div className='anime-container'>
        <div className='anime-info'>
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>

        <div className="anime-list">
          <AnimeList
            animelist={animeData}
            setAnimeInfo={setAnimeInfo}
            animeComponent={AddToList}
          />
        </div>
      </div>
    </div>
  )
}

export default App
