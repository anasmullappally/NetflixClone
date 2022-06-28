import React, {useEffect,useState} from 'react'
import './RowPost.css'
import { imageUrl , API_KEY} from '../../constants/constans'
import axios from '../../axios'
import YouTube from 'react-youtube'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]=useState('')

    useEffect(() => {
      axios.get(props.url).then((response)=>{
        setMovies(response.data.results)
      })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
const handleMovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!=0){
            setUrlId(response.data.results[0])
        }else{
            console.log('empty');
        }
    })
}

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
            {movies.map((movies)=>
                  <img onClick={()=>handleMovie(movies.id)} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+movies.backdrop_path}`} alt="" />
                
            )}
              
            </div>
           { urlId && <YouTube opts={opts} videoId={urlId.key}  />}
        </div>
    )
}

export default RowPost