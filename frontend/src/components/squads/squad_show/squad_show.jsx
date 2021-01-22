import React from 'react';
// import React, { useState, useEffect } from 'react';
import MessagesComponent from './messages_container';
import InputComponent from './input_container';
import SquadShowMember from './squad_show_member'
import SquadShowRequest from './squad_show_request'
import './css_grid_system.css';
import MySocket from '../../../socket';

class SquadShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            messages: this.props.currentSquad.messages,
            socket: MySocket.getSocket()
        };

        this.state.socket.on("new-message-received", (message) => {
            // console.log("MATT_TEST: ", this.props.match.params.squadId);
            this.props.fetchSquadMessages(this.props.match.params.squadId);
        });

        this.renderChat = this.renderChat.bind(this)
    }

    componentDidMount() {
        this.props.fetchSquad(this.props.match.params.squadId);
    }

    componentWillUnmount() {
        this.state.socket.off("new-message-received", this.setState({
            socket: '',
        }));
        this.props.removeSquadFromState();
    }


    renderChat() {
        let currentMembers = [];
        this.props.currentSquad.members.forEach(member => currentMembers.push(member._id))
        if (currentMembers.includes(this.props.currentUser.id)) {
            return (
                <div>
                    <div className="messages-container">
                        <MessagesComponent
                        messages={this.props.currentSquad.messages}
                        currentUser={this.props.currentUser.username}
                        fetchSquadMessages={this.props.fetchSquadMessages}
                        />
                    </div>
                    <div className="input-container">
                        <InputComponent />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="hidden-chat-feature">
                    -Chat feature is hidden unless you are a group member- 
                </div>
            )
        }
    }
    
    render() {
        if (Object.values(this.props.currentSquad).length === 0){
            return <> </>
        } else{
            let edit_bio;
            if(this.props.currentSquad.leader === this.props.currentUser.id){
                edit_bio = this.props.otherForm;
            }
            return (
                <div style={{backgroundImage:`url(${this.props.currentSquad.game.images[1]})`}}>
                    <div className="container" >
                        <div className="item-left">
                            <div className="members">
                                <h2>{this.props.currentSquad.name}</h2>
                                <h3>Description:</h3>
                                <span>{edit_bio}</span>
                                <p className="squad-bio">{this.props.currentSquad.generalBio ? this.props.currentSquad.generalBio : <> </>}</p>
                                <h3>Members:</h3>
                                <div>
                                {(this.props.currentSquad.requests) ? 
                                this.props.currentSquad.members.map((member, idx) => {
                                    return (
                                    <div key={`member-${idx}`} className='member'>
                                        <SquadShowMember
                                        member={member}
                                        squadId={this.props.squadId}
                                        updateSquad={this.props.updateSquad}
                                        currentUser={this.props.currentUser}
                                        currentSquad={this.props.currentSquad}
                                        deleteSquad={this.props.deleteSquad}
                                        />
                                    </div>
                                    );
                                })
                                :
                                <div>No Requests</div>}
                                </div>
                                <h3>Requests:</h3>
                                <div>
                                {(this.props.currentSquad.requests) ? 
                                    this.props.currentSquad.requests.map((request, idx) => {
                                        return ( 
                                        <div key={`request-${idx}`} className='request'>
                                            <SquadShowRequest
                                            request={request}
                                            squadId={this.props.squadId}
                                            updateSquad={this.props.updateSquad}
                                            currentUser={this.props.currentUser}
                                            currentSquad={this.props.currentSquad}
                                            />
                                        </div>
                                        );
                                    })
                                :
                                <div>No Requests</div>}
                                </div>
                                {/* <span>{this.props.otherForm}</span> */}
                            </div>
                        <div className="requests"></div>
                        </div>
                        
                        <div className="item-right">
                            <h2>Group Channel</h2>
                            {this.renderChat()}
                        </div>
                    </div>
                    <div className='footer'></div>
              </div>
            );
        }      
    };
}

export default (SquadShow);
