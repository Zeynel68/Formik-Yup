import React from 'react'

function Anime({ anime }) {
    const { id, title, descripition, link, image, episidos } = anime;
    return (
        <div className='anime'>
            <div>
                <img src={image} />
                <h2 className='titlex'>{title}</h2>
                <h4 className='anime-desc'>{descripition}</h4>
                <h5 className='anime-epis'>{episidos}</h5>
                <div className='anime-link'><a style={{ textDecoration: "none", }} href={link}>Animeye ulaşmak için tıklayınız.</a></div>
            </div>
        </div>
    )
}

export default Anime
