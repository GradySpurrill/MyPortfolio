import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <form>
                <label>Name:</label>
                <input type="text" name="name" />
                <br />
                <label>Email:</label>
                <input type="email" name="email" />
                <br />
                <label>Message:</label>
                <textarea name="message"></textarea>
                <br />
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
