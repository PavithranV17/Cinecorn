import {useState, useEffect} from 'react'

export const useFetch = (apiPath, sText="") => {

    const [eachMovie, setEachMovie] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&language=en-US&query=${sText}`;
    useEffect(() => {
        async function fetchMovie(){
            const response = await fetch(url);
            const dt = await response.json();
            setEachMovie(dt.results);
        }
        fetchMovie();
    },[url]);

  return { eachMovie }
}
