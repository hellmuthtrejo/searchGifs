import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';

const POPULAR_GIFS = ["Matrix", "Dragon Ball", "Naruto", "Venezuela"];

export default function Home () {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation(); // hook de wouter

    const {loading, gifs} = useGifs();
 
    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`);
    }

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

  return (
    <>
        <h3 className="App-tittle">Los Gif mas populares</h3>

        {/* el ultimo boton de un formulario, queda de forma predeterminada para hacer submit. una buena practica es usar el formulario. */}
        <form onSubmit={handleSubmit}>
            <input type="text"
                onChange={handleChange}
                value={keyword} 
                placeholder="Search a gifs here..."/>
                <button>Submit</button>
        </form>

        <h3 className="App-tittle">Ultima búsqueda</h3>
        
        <ListOfGifs gifs={gifs} />

            <ul>
                {
                    POPULAR_GIFS.map(popularGif => (
                        <Link key={popularGif} to={`/search/${popularGif}`}>
                            Gifs de {popularGif} <br />
                        </Link>
                    ))
                }
            </ul>
    </>
  )
}
