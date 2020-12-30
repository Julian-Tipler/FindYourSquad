import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessagesContainer from './messages_container';
import InputContainer from './input_container';
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
                        <MessagesContainer messages={this.props.currentSquad.messages}/>
                    </div>
                    <div className="item-bottom">
                        <InputContainer />
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
