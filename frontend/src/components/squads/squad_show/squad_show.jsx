import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessagesComponent from './messages_container';
import InputComponent from './input_container';
import './css_grid_system.css';

class SquadShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSquad(this.props.match.params.squadId);
    }
    
    render() {
        if (!this.props.currentSquad){
            return <> </>
        } else{
            return (
            <div className="container">
              <div className="item-left">
                <div className="members">

                </div>
                <div className="requests">
                    
                </div>
              </div>
                <div className="item-mid">
                    <div className="item-top">
                        <MessagesComponent messages={this.props.currentSquad.messages}/>
                    </div>
                    <div className="item-bottom">
                        <InputComponent />
                    </div>
                </div>
                <div className="item-right">
                    
                </div>
            </div>
        )
        }      
    };
}

export default (SquadShow);
