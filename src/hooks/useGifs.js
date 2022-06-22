
import React, {useState, useEffect, useContext} from 'react'
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

export  function useGifs ({keyword} = {keyword: null}) {
    
    
    // const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifsContext);
    
    useEffect(function() {

        const keywordToUse = keyword ? keyword : localStorage.getItem('lasKeyword');
        
        setLoading(true);
        getGifs({ keyword: keywordToUse }).then(resp => {
            setGifs(resp);
            setLoading(false);
            localStorage.setItem('lasKeyword', keyword);
        });
    }, [keyword, setGifs]);

    // return de custom hook
    return {
        loading, 
        gifs
    }
}



