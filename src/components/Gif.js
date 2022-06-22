import React from 'react';
import './Gif.css';
import { Link } from 'wouter';

export default function Gif ({title, url, id}){
    return (
    // <a href={`/gif/${id}`} className='Gif'>
    //     <h4>{title}</h4>
    //     <small>{id}</small>
    //     <img src={url} alt={title}/>
    // </a>
        <Link to={`/gif/${id}`} className="Gif">
            <h4>{title}</h4>
            <img loading='lazy' alt={title} src={url} />
        </Link>
    );
}