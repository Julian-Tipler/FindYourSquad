import React from 'react';
import '../modal/modal.css'

class RequestMessage extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            id: this.props.squad._id,
            newMemberId: this.props.currentUserId,
            type: "addRequest"
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateSquad(this.state);
        this.props.closeModal();
    }

    render(){
        

        return(
            <form id='modal-form' onSubmit={this.handleSubmit}>
                <div className='modal-box'>
                    <h2 id='squad-name'>Squad to send request: {this.props.squad.name}</h2>
                    <p id='modal-title'>Send a message!</p>
                    <textarea id='modal-text' autoComplete='off'/>
                    <input id='modal-btn' type="submit" value="Send Request!"/>
                </div>
            </form>
        )
    }

}

export default RequestMessage