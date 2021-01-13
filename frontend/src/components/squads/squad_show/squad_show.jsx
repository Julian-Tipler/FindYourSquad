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

        this.state.socket.on("messages", messages => {
            this.props.fetchSquad(this.props.match.params.squadId);
        });
    }

    componentDidMount() {
        this.props.fetchSquad(this.props.match.params.squadId);
    }

    componentWillUnmount() {
        this.state.socket.off("get_data", this.state.messages);
    }
    
    render() {
        if (Object.values(this.props.currentSquad).length === 0){
            return <> </>
        } else{
            return (
                <div style={{backgroundImage:`url(${this.props.currentSquad.game.images[1]})`}}>
                    <div className="container" >
                        <div className="item-left">
                            <div className="members">
                                <h2>Members:</h2>
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
                                <h2>Requests:</h2>
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
                            <h2>{`${this.props.currentSquad.name}'s Group Channel`}</h2>
                            <div className="messages-container">
                                <MessagesComponent
                                messages={this.props.currentSquad.messages}
                                currentUser={this.props.currentUser.username}
                                />
                            </div>
                            <div className="input-container">
                                <InputComponent />
                            </div>
                        </div>
                    </div>
                    <div className='footer'></div>
              </div>
            );
        }      
    };
}

export default (SquadShow);
