import React from 'react';
import { Link } from "react-router-dom";
import './member.css';

class Member extends React.Component {
    render() {

        const correctGameStats = this.props.member.userStats.find(stat => stat.game === this.props.groupGameId)

        let displayStats
        if (correctGameStats === undefined){
              displayStats = <> <div id="gamer-box">...</div ><div id="gamer-box">...</div><div id="gamer-box">...</div></> 
     
        } else {

              displayStats =
              Object.keys(correctGameStats.stats).map((key, idx) => {
                return (
                    <div key={idx} id="gamer-box">{key.length < 3 ? key.toUpperCase().split("").join("/") : key.slice(0,1).toUpperCase() + key.slice(1)}: {correctGameStats.stats[key]}</div>
                  )
              })
        }


        return (
          <>
            <div id='gamer-box'>{this.props.member.username}</div>
            {displayStats}
            <Link id='gamer-link' to={`/profile/${this.props.member._id}`}>
                Gamer Profile
            </Link>
            
          </>
        );
    }
}

export default Member
