import React from 'react';
import './contactStyle.css';

const Contact = () => {
    return (
        <section id="contact">
            
            {/* Create a button that links to the mailto link */}
            <a href="mailto:grady_spurrill@hotmail.com" className="contact-button">Contact</a>
        </section>
    );
}

export default Contact;
