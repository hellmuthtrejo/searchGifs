import React, {useEffect, useState} from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs ({keyword}) { 
    const [gifs, setGifs] = useState([]);

  // useEffects, permite ejecutar funciones cada vez que se renderice el componente. 
  // el segundo argumento es un array, lista de dependencias.
  // el useEffect es equivalente al componentDimount
  // ya que la dependencia es keyword si cambia se vuelve a renderizar el componente.
  useEffect(function() {
    getGifs({ keyword }).then(resp => setGifs(resp));
  }, [keyword]);

    return gifs.map(({title, url, id}) => 
          <Gif 
            id={id} 
            key={id}
            title={title} 
            url={url} 
          />);
}