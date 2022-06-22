import React, {useContext} from 'react'
// import StaticContext from '../../context/StaticContext';
import Context  from '../../context/GifsContext';

export default function Detail ({params}) {
    // const staticConfig = useContext(StaticContext);
    // console.log(staticConfig)

    const context = useContext(Context);
    console.log(context)
    
  return (
    <div>Detail of gifs {params.id}</div>
  )
}
