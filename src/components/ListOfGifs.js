import React from 'react';
import Gif from './Gif';
// import  {useGifs}  from '../hooks/useGifs';

export default function ListOfGifs ({gifs}) {
    // const {keyword} = params;
    // const {loading, gifs} = useGifs({keyword});
    
    // encapsulado en un custom hook
    //const [gifs, setGifs] = useState([]);
    // const [loading, setLoading] = useState(false);

  // useEffects, permite ejecutar funciones cada vez que se renderice el componente. 
  // el segundo argumento es un array, lista de dependencias.
  // el useEffect es equivalente al componentDimount
  // ya que la dependencia es keyword si cambia se vuelve a renderizar el componente.
  // useEffect(function() {
  //   setLoading(true);
  //   getGifs({ keyword }).then(resp => {
  //     setGifs(resp);
  //     setLoading(false);
  //   });
  // }, [keyword]);
  // encapsulado en un custom hook

  // if(loading) 
  // return <i>Cargando @</i>

    return (<>
      {
        gifs.map(({title, url, id}) => 
        <Gif 
          id={id} 
          key={id}
          title={title} 
          url={url} 
        />)
      }
    </>);
}

// 
// export default React.memo(ListOfGifs);

// -- renderizado condicional ejemplo.
// return <>
//   {
//     loading
//     ? <Spinner />
//     : <ListOfGifs datos={datos} />

//   }
// </>