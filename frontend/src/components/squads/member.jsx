import React from 'react';
import { Link } from "react-router-dom";
import './member.css';

class Member extends React.Component {
    render() {

        const correctGameStats = this.props.member.userStats.find(stat => stat.game === this.props.groupGameId)
        console.log(correctGameStats)

        let displayStats
        if (correctGameStats === undefined){
              displayStats = <> <div id="gamer-box">...</div ><div id="gamer-box">...</div><div id="gamer-box">...</div></> 
     
        } else {
          // correctGameStats.map(stat =>{

          // })
          displayStats =
           Object.keys(correctGameStats.stats).map((key, idx) => {
             return (
                <div id="gamer-box">{key}: {correctGameStats.stats[key]}</div> //key={`${idx}${stat.game}`} 
              )
            })
        }
        // console.log(displayStats)

        return (
          <>
            <div id='gamer-box'>{this.props.member.username}</div>
            
      
            {displayStats}



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
