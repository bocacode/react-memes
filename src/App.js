import React, { useState, useEffect } from "react"
import MemeCard from "./components/MemeCard"

function App() {
  const [memeList, setMemeList] = useState(null)
  useEffect(() => {
    fetch('https://meme-api-bc.web.app/memes')
      .then(response => response.json())
      .then(data => setMemeList(data))
      .catch(err => console.error(err))
  }, [])
  return (
    <>
      <h1>These are the Memes</h1>
      {!memeList
        ? <h2>Loading...</h2>
        : <div>
            {memeList.map((meme) => <MemeCard meme={meme} key={meme.id} />)}
        </div>
      }
    </>
  )
}

export default App