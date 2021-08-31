import React from 'react';
 
const MovieList = (props) => {
   return (
       <>
           {props.movies.map((movie, index) => (
               <div className= "movieCard">
                   <div className= "poster">
                        <img src={movie.Poster} alt='movie'></img>
                   </div>
                   <div className= "text">
                       <h1>{movie.Title}</h1>
                       <h2>{movie.Plot}</h2><br></br>
                       <h3>
                           <strong>Release date: </strong>{movie.Released}<br></br>
                           <strong>Rating: </strong>{movie.imdbRating}
                        </h3>
                   </div>
                   <div className= "rating">
                   </div>
               </div>
        ))}
        </>
    );
};

export default MovieList;