// The contact page with in person and online contact info, and a contact form
import React from 'react';
import '../Styles/Contact.css'
import ContactForm from '../../Components/JS/ContactForm.js'

const Contact = () => {

    return ( 
        <div className='contact'>
            <p className='in_person_header'>In Person</p>
            <a className="in_person_info" >Room 12, Middlesex College Western University</a><br/>
            <a className="in_person_info" href="https://www.google.com/maps/place/Middlesex+College,+1151+Richmond+St,+London,+ON+N6A+3K7/@43.0092271,-81.2730253,16.62z/data=!4m5!3m4!1s0x882eee16edeb59c7:0xc46aa0b2732ffe30!8m2!3d43.0094907!4d-81.2702514" target="_blank">43°0'35.064"N, 81°16'14.484"W</a>

            <p className='online_header'>Online</p>
            <div className="email_info">
                <p className="email_text">Email: &nbsp;</p>
                <p className="email_addr"><a href="mailto:csus@uwo.ca" >csus@uwo.ca</a></p>
            </div>
            <div className="facebook_info">
                <p className="facebook_text">Facebook: &nbsp;</p>
                <p className="facebook_link"><a href="http://www.facebook.com/westerncsus" target="_blank">/westerncsus</a></p>
            </div>

            <p className='message_us_header'>Message Us</p>
            <ContactForm/>
        </div>
    );
}
 
export default Contact;
