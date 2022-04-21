// The About Page with the members and information about CSUS
import React from 'react';
import '../Styles/About.css';
import MemberCard from '../../Components/JS/MemberCard.js';
import ahmed  from '../../images/ahmed.jpg'
import david  from '../../images/david.png'
import habib  from '../../images/habib.jpeg'
import huda  from '../../images/Huda.jpeg'
import serena  from '../../images/serena.png'
import tae  from '../../images/tae.jpeg'
import thomas  from '../../images/thomas.jpeg'

const About = () => {
    return ( 
        <div className="About">
            <div className="About_description">
                <p className="About_description_header">WHAT WE DO</p>
                <p className="About_description_text">The Computer Science Undergraduate Society is the organization that 
                represents all computer science students at Western University in London, Ontario. As the oldest and 
                most established computer science organization on campus, CSUS is run by students and for students. <br/><br/>
                We work closely with the Department of Computer Science to promote computer science as an academic 
                discipline, to connect students to related university services, and to provide methods of networking 
                between students, faculty, and employers.</p>
            </div>

                
            <div className="About_members">
                <p className="About_members_header">MEET THE TEAM</p>
                <div className="About_member_cards">
                    <MemberCard image={ahmed} name = "Ahmed Mohamed" role = "President" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/>
                    <MemberCard image={david} name = "David George" role = "VP Projects" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/>
                    <MemberCard image={habib} name = "Habib Ahmed" role = "VP Events" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/>
                    <MemberCard image={thomas} name = "Thomas Michalski" role = "VP Finance" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/>
                    <MemberCard image={huda} name = "Huda Mukhtar" role = "Lead Web Developer" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/>
                    <MemberCard image={serena} name = "Serena Hou" role = "VP Communications" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/>
                </div>
                <MemberCard image={tae} name = "Matteo Tanzi" role = "VP Marketing" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/>
            </div>
        </div>
    );
}
 
export default About;
