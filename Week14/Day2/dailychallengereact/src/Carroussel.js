import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselType extends Component {
    render() {
        let elems = this.props.assets.map((asset,index)=>{

            return (
                <div  key = {index}>
                    <img src={`${asset.image}`} alt={asset.name}/>
                    <p className="legend">{asset.name}</p>
                </div>
            )
        })
        return (
            <div style = {{width:"500px",margin:"0 auto"}}>
                <Carousel showArrows={true} >
                    {elems}
                </Carousel>
            </div>

          
        );
    }
};

export default CarouselType