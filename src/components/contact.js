import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = (props) => { 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_7ii3fk5', 'template_u59c5b8', form.current, {
            publicKey: 'nDIqwmJd8sLbYxky4',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        e.target.reset();
    };

    return (
        <section>
            <div className="container">
                <hr className="hr-2"></hr>
                <h2 className="H2">Send by email</h2>
                <form ref={form} onSubmit={sendEmail} className="form">
                    <input type="text" placeholder="Full Name" name="user_name" required />
                    <input type="email" placeholder="Email" name="user_email" required />
                    <textarea name="message" cols="30" rows="10" value={props.cartData}></textarea> 
                    <button type="submit" className="button">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
