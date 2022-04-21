// Each of the cards in the meet the team section in the about page
import React from 'react';
import '../Styles/MemberCard.css';

const MemberCard = (props) => {
    const image = props.image
    const name = props.name
    const role = props.role

    return ( 
        <div className="Card">
            <img src={image} alt="" className="Card_image"/>
            <div className="Card_name_div">
                <span className="Card_name">{name}</span>
                <br/>
                <span className="Card_role">{role}</span>
            </div>
        </div>
    );
}
 
export default MemberCard;
