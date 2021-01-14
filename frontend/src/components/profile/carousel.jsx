import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './carousel.css';

class ComponentName extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
               <Carousel animation={"slide"}>
                       {
                       this.props.images.map((image,i) => {
                           return (
                               <div className="carousel-div">
                                   <img className = "carousel-image" src={image} alt={image}/>
                               </div>
                           )
                       })
                   }
               </Carousel>
            </div>
             
        )
    }
}

export default ComponentName



//  {
//                     properties.map(image => (
//                         <img src={image} alt={image}/>
//                     ))
//                 }
//                 <img src=""></img>