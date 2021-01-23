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
    }

    render() {
        return(
            <div className='image-container'>
               <Carousel animation={"fade"} autoPlay={false} navButtonsAlwaysVisible={true}>
                       {
                       this.props.images.map((image,i) => {
                           return (
                               <div key={i}>
                                <div className = "full-carousel-div">
                                        <div className="carousel-div">
                                            <img className = "carousel-image" id="left-image" alt='carousel' src={this.props.images[(((i-1)%this.props.images.length)+this.props.images.length)%this.props.images.length]}/>
                                        </div>
                                        <div className="carousel-div">
                                            <img className = "carousel-image" id="center-image" src={image} alt={image}/>
                                        </div>
                                        <div className="carousel-div">
                                            <img className = "carousel-image" id="right-image" alt='carousel' src={this.props.images[(i+1)%this.props.images.length]}/>
                                        </div>
                                </div>
                                    {this.props.currentUserId === this.props.profileUserId ? <button id='delete-image-btn' onClick={(e)=>this.deleteImage(i, e)}>Delete</button> : <> </>}
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
