import React from 'react';
import { Link } from "react-router-dom";


class Member extends React.Component {
    render() {
        return (
          <>
            <div>{this.props.member.username}</div>
              <div>
                <Link to={`/profile/${this.props.member._id}`}>
                  Gamer Profile
                </Link>
              </div>
            </>
        );
    }
}

export default Member
