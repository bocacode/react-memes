import React from 'react'

function MemeCard({ meme }) {
    return (
        <div>
            <h3>{meme.title}</h3>
            <img src={meme.imageUrl} alt={meme.title} />
            <p>Creator: {meme.creator}</p>
        </div>
    )
}

export default MemeCard