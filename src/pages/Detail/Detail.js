import React, {useContext} from 'react'
// import StaticContext from '../../context/StaticContext';
import Context  from '../../context/GifsContext';
import Gif from '../../components/Gif';

export default function Detail ({params}) {
    // const staticConfig = useContext(StaticContext);
    // console.log(staticConfig)

    const {gifs} = useContext(Context);
    
    const gif = gifs.find(singleGifs => singleGifs.id === params.id);
    console.log(gif);
  return <Gif {...gif} />
}
