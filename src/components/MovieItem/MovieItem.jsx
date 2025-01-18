import React from 'react';
import './MovieItem.css'

const MovieItem = ({Title: title, Year: year, imdbID, Type: type, Poster: poster}) => {
    return (
        <div className='card'>

            {poster === 'N/A' ?
                <img src={'https://placehold.jp/150x150.png'} alt={title} className="card-image"/>
            :
                <img src={poster} alt={title} className="card-image"/>
            }
            
            <div className="desc">
                <div className="title">{title}</div>
                <div className="desc-footer">
                    <div className="year">{year}</div>
                    <div className="type">{type}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;