import React from "react";
import {connect} from 'react-redux';
import {movieDetails} from '../reducers/action';

const MovieList = (props) =>{
    return( 
    <div>
        <h1>Movie List</h1>
        {
           props.moviesArr.map((item,i) => {
                return(
                    <div key={i} className="li">
                        <li>{item.title}</li>
                        <button onClick={()=>props.movieDetails(item)}>details</button>
                    </div>) 
            })
        }         
    </div>
    )   
};

const mapStateToProps =(state)=>{
    return{
        moviesArr: state.movies
    }
};

const mapDispatchToProps =(dispatch)=>{
    return{
        movieDetails: (obj)=> dispatch(movieDetails(obj))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);