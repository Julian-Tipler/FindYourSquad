import React from 'react';
// import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessagesComponent from './messages_container';
import InputComponent from './input_container';
import SquadShowMember from './squad_show_member'
import SquadShowRequest from './squad_show_request'
import './css_grid_system.css';

class SquadShow extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.fetchSquad(this.props.squadId);
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
                      {this.props.currentSquad.members.map((member) => {
                        return (
                          <li key={member._id}>
                            <SquadShowMember member={member} />
                          </li>
                        );
                      })}
                    </div>
                    <h2>Requests:</h2>
                    <div>
                      {(this.props.currentSquad.requests) ? 
                        this.props.currentSquad.requests.map((request) => {
                            console.log(request)
                            return (
                            <li key={request._id}>
                                <SquadShowRequest request={request} />
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
