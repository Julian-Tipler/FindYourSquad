import React from 'react';
import { Redirect } from 'react-router-dom';
import '../modal/modal.css'

class RequestMessage extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            id: this.props.squad._id,
            newMemberId: this.props.currentUserId,
            type: "addRequest",
            redirect: false
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let demoUser = false;
        if (this.props.currentUsername === 'demoUser') {
            demoUser = true;
        }
        let message = {
            id: this.state.id,
            newMemberId: this.state.newMemberId,
            type: this.state.type,
            demoUser: demoUser
        }
        this.props.updateSquad(message);
        this.setState({ redirect: true })
        
    }

    render(){
        if (this.state.redirect === true){
        this.props.closeModal();
        return (
          <Redirect to={`/squads/${this.props.squad._id}`}/>
        )
      }
        

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