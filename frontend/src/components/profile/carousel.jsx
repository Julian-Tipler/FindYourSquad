import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './carousel.css';

class CarouselComponent extends React.Component {
    constructor(props){
        super(props);
        this.deleteImage = this.deleteImage.bind(this)
    }

    deleteImage(i, e){
        e.preventDefault();
        let data = {
            id: this.props.profileUserId,
            location: this.props.images[i]
        }
        this.props.deleteUserImage(data)
        console.log('ping')
    }


    render() {
        return(
            <div>
               <Carousel animation={"slide"}>
                       {
                       this.props.images.map((image,i) => {
                           return (
                               <div key={i} className="carousel-div">
                                   <img className = "carousel-image" src={image} alt={image}/>
                                   {this.props.currentUserId === this.props.profileUserId ? <button onClick={(e)=>this.deleteImage(i, e)}>delete</button> : <> </>}
                               </div>
                           )
                       })
                   }
               </Carousel>
            </div>
             
        )
    }
}

export default CarouselComponent



//  {
//                     properties.map(image => (
//                         <img src={image} alt={image}/>
//                     ))
//                 }
//                 <img src=""></img>


