import { useState } from 'react'
import './App.css'
import Header from './Header'
import { animes } from './Data'
import Anime from "./Component/anime"
function App() {



  return (
    <div>
      <Header />
      <div className='anime-main'>
        {
          animes?.map((anime) => (
            <Anime key={anime.id} anime={anime} />
          ))
        }
      </div>

    </div>

  )
}

export default App
