
import React, {useState, useEffect} from 'react'
import getGifs from '../services/getGifs';

export  function useGifs ({keyword} = {keyword: null}) {
  
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(function() {

        const keywordToUse = keyword ? keyword : localStorage.getItem('lasKeyword');
        
        setLoading(true);
        getGifs({ keyword: keywordToUse }).then(resp => {
            setGifs(resp);
            setLoading(false);
            localStorage.setItem('lasKeyword', keyword);
        });
    }, [keyword]);

    // return de custom hook
    return {
        loading, 
        gifs
    }
}



