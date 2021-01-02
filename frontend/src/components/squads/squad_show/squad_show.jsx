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
            console.log(this.props.currentSquad.requests)
            return (
              <div className="container">
                <div className="item-left">
                  <div className="members">
                      <h2>Members</h2>
                    <div>
                      {this.props.currentSquad.members.map((member, idx) => {
                        return (
                          <li key={`member-${idx}`}>
                            <SquadShowMember
                              member={member}
                              squadId={this.props.squadId}
                              updateSquad={this.props.updateSquad}
                            />
                          </li>
                        );
                      })}
                    </div>
                    <h2>Requests:</h2>
                    <div>
                      {(this.props.currentSquad.requests) ? 
                        this.props.currentSquad.requests.map((request, idx) => {
                            console.log(request)
                            return (
                              <li key={`request-${idx}`}>
                                <SquadShowRequest
                                  request={request}
                                  squadId={this.props.squadId}
                                  updateSquad={this.props.updateSquad}
                                />
                              </li>
                            );
                        })
                      :
                      <div>No Requests</div>}
                    </div>
                  </div>
                  <div className="requests"></div>
                </div>
                <div className="item-mid">
                  <div className="item-top">
                    <MessagesComponent
                      messages={this.props.currentSquad.messages}
                    />
                  </div>
                  <div className="item-bottom">
                    <InputComponent />
                  </div>
                </div>
                <div className="item-right"></div>
              </div>
            );
        }      
    };
}

export default (SquadShow);
