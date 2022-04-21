// The contact form for the contact page
import React from 'react';
import '../Styles/ContactForm.css';
import emailjs from 'emailjs-com'

function sendEmail (e) {
    e.preventDefault();

    emailjs.sendForm('service_2bljklg', 'template_u7rbalg', e.target, 'JZTiaWBOtI3jz0JYJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset()
  };

const ContactForm = () => {
    return ( 
        <div className="contact_form">
            <form onSubmit={sendEmail}>
                <label className="form_label">Name:</label>
                <input type="text" className="name_field" name="name"/>

                <label className="form_label">Email:</label>
                <input type="text" className="email_field" name="email"/>
            
                <label className="form_label">Message:</label>
                <textarea rows="5" type="text" className="message_field" name="message"/>
                
                <input type="submit" className='submit_button' value='Send Message'/>
            </form>
         </div>
    );
}
 
export default ContactForm;
