export const movieDetails = (movie_obj) => {
  
    return{
        type: 'MOVIE_SELECTED',
        payload: movie_obj
    }
};