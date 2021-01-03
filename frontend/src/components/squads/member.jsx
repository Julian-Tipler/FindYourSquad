import React from 'react';
import { Link } from "react-router-dom";
import './member.css';

class Member extends React.Component {
    render() {
        return (
          <>
            <div id='gamer-box'>{this.props.member.username}</div>
              <div>
                <Link id='gamer-link' to={`/profile/${this.props.member._id}`}>
                  Gamer Profile
                </Link>
              </div>
            </>
        );
    }
}

export default Member
