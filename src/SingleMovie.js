import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch'
import Error from './Error'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
const SingleMovie = () => {
  const id = useParams().id;
  const {data, error, loading} = useFetch(`&i=${id}&plot=full`);
  // console.log(data);
  const {
    Title,
    Released,
    Genre,
    Director,
    Actors,
    Plot,
    Awards,
    Poster,
    imdbRating,
  } = data;
  if(loading){
    return <div className='loading'></div>
  }
  if(error) {
    return <Error />
  } 
  // console.log(id);
  return <>
    <section className='single-movie'>
      <img
        src={Poster==='N/A'?url:Poster}
      />
      <div className='single-movie-info'>
        <h2>{Title}</h2>
        <p>
        {Plot!=='N/A'?<>{Plot}</>:<></>}
        </p>
        {Released!=='N/A'?<h3>{Released}</h3>:<></>}
        {Genre!=='N/A'?<h4>Genre: {Genre}</h4>:<></>}
        {Director!=='N/A'?<h4>Director: {Director}</h4>:<></>}
        {Actors!=='N/A'?<h4>Starring: {Actors}</h4>:<></>}
        {Awards!=='N/A'?<h4>Awards: {Awards}</h4>:<></>}
        {imdbRating!=='N/A'?<h4>imdbRating: {imdbRating}</h4>
:<></>}
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  </>;
}

export default SingleMovie
 