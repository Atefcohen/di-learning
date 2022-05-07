import {connect} from 'react-redux';

const MovieDetails = (props) =>{
        return(
            <div>
                <h1>Movie Details</h1>
                <div>{props.detail.title?props.detail.title:""}</div> <br/>
                <div>{props.detail.releaseDate?props.detail.releaseDate:""}</div> <br/>
                <div>{props.detail.rating?props.detail.rating:""}</div>
            </div>
        ) 
};

function mapStateToProps(state){
    return{
        detail: state.movie
    }
};

export default connect(mapStateToProps,null)(MovieDetails);