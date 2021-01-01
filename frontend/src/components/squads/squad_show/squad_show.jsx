import React from 'react';
import Messages from './messages';
import InputComponent from './input';
import './css_grid_system.css';
import messages from './messages';
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
                            <div className="messages-container">
                                <Messages messages={this.props.currentSquad.messages}/>
                            </div>
                        </div>
                        <div className="item-bottom">
                            <InputComponent
                                currentSquad={this.props.currentSquad} 
                                currentUser={this.props.currentUser}
                                postMessage={this.props.postMessage}
                            />
                        </div>
                    </div>
                    <div className="item-right">
                        
                    </div>
                </div>
            )
        };
    };
}

export default (SquadShow);
