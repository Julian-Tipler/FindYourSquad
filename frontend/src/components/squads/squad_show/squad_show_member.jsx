import React from 'react';
import { Link } from "react-router-dom";


class SquadShowMember extends React.Component {
    render() {
        return (
          <div>
            <div>{this.props.member.username}</div>
              <div>
                <Link to={`/profile/${this.props.member._id}`}>
                  Gamer Profile
                </Link>
              </div>
            </div>
        );
    }
}

export default SquadShowMember
