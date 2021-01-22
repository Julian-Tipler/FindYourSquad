import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import './image_upload.css';

class ImageUpload extends React.Component {
    constructor( props ) {
    super( props );
        this.state = {
            selectedFile: null,
            buttonText: "Upload!"
        }
    }

singleFileChangedHandler = ( event ) => {
    
  this.setState({
   selectedFile: event.target.files[0],
  });
 };

    singleFileUploadHandler = () => {
        this.setState({ buttonText: "Uploading.."});
        const data = new FormData();
        if ( this.state.selectedFile ) {
        data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
        axios.post( `/api/users/${this.props.profileUserId}/img-upload`, data, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }
        })
        .then( ( response ) => {
        if ( 200 === response.status ) {
        if( response.data.error ) {
            if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
            this.ocShowAlert( 'Max size: 2MB', 'red' );
        } else {
            console.log( response.data );
            this.ocShowAlert( response.data.error, 'red' );
        }
        } else {
        let fileName = response.data;
        console.log( 'fileName', fileName );
        this.ocShowAlert( 'File Uploaded', '#3089cf' );
            this.props.fetchUser(this.props.profileUserId);
        }
        }
            }).catch( ( error ) => {
            this.ocShowAlert( error, 'red' );
            });
        } else {
            this.ocShowAlert( 'Please upload file', 'red' );
        }
    };

    ocShowAlert = ( message, background = '#3089cf' ) => {
        let alertContainer = document.querySelector( '#oc-alert-container' ),
        alertEl = document.createElement( 'div' ),
        textNode = document.createTextNode( message );
        alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
        $( alertEl ).css( 'background', background );
        alertEl.appendChild( textNode );
        alertContainer.appendChild( alertEl );
       
        setTimeout( function () {
            $( alertEl ).fadeOut( 'slow' );
            $( alertEl ).remove();
        }, 3000 );
        
        this.setState({
            selectedFile: null,
            buttonText: "Upload!"
        });
    };



    render() {
        console.log(this.state.selectedFile)

    return(
    <div>
        <div className="image-uploader-container">
        <div id="oc-alert-container"></div>
            <div className="card border-light mb-3 mt-5" >
                <div className="card-header">
                {/* <h3 style={{ color: '#555', marginLeft: '12px' }}>Single Image Upload</h3> */}
                    <p className="text-muted">Upload Size: 250px x 250px ( Max 2MB )</p>
                        </div>
                    <div className="card-body">
                    <p className="card-text">Upload images to your profile</p>
                    <br/>
                <input id='file-btn' type="file" onChange={this.singleFileChangedHandler}/> 
             <div className="mt-5">
                 <br/>
            <button className="btn-info" onClick={this.singleFileUploadHandler}>{this.state.buttonText}</button>
         </div>
        </div>
        </div>
    </div>
    </div>
  );
 }
}
export default ImageUpload;