import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'



const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {data, error, loading} = useGlobalContext();
  if (loading) {
    return <div className='loading'></div>
  }
  return <section className='movies'>
    {data.map((item , index) => {
      const {title, year,imdbID, Poster } = item;
      return <Link className='movie' to = {`/movies/${imdbID}`} key={index}>
    <article>
      <img 
        src= {Poster==='N/A'?url:Poster}
        alt={title}
      />
      <div className='movie-info'>
        <h4 className="title">{title}</h4>
        <p>{year}</p>
      </div>
    </article>
  </Link>
    })}
  </section>
}

export default Movies
 