import React from 'react';
import './contactStyle.css';

const Contact = () => {
    return (
        <div className="contact-section"> {/* Changed to div to fit in sidebar */}
            {/* Create a button that links to the mailto link */}
            <a href="mailto:grady_spurrill@hotmail.com" className="contact-button">Contact</a>
        </div>
    );
}

export default Contact;
