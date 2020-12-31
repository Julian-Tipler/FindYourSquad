import React from 'react';
import '../modal/modal.css'

class RequestMessage extends React.Component {
    constructor(props){

        super(props)
        // console.log(this.props.squadId.name)
        this.handleSubmit = this.handleSubmit.bind(this)
        // console.log(this.props)
        this.state = {
            id: this.props.squad._id,
            newMemberId: this.props.currentUserId,
            type: "addRequest"
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateSquad(this.state);
    }

    render(){
        

        return(
            <form onSubmit={this.handleSubmit}>
                <div>{this.props.squad.name}</div>
                <div className='modal-box'>
                    <p id='modal-title'>Send a message!</p>
                    <input type='text' id='modal-text' />
                </div>
                <input type="submit" value="Send Request!"/>
            </form>
        )
    }

}

export default RequestMessage