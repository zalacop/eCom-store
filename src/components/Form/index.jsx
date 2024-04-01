import React, { useState } from 'react';

function Form() {
    const [fullName, setFullName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const body = {fullName, subject, email, message};

    const [errors, setErrors] = useState({
        fullName: "",
        subject: "",
        email: "",
        message: ""
    });

    const inputValue = (event) => {
        const { name, value } = event.target;
        const setValues = {
            fullName: setFullName,
            subject: setSubject,
            email: setEmail,
            message: setMessage
        };

        const setValue = setValues[name];
        if (setValue) {
            setValue(value);
        };
    };

    const validateForm = (event) => {
        event.preventDefault();
        let formIsValid = true;
     
        const errors = {};
        setErrors(errors);

        if (fullName.length < 3) {
        errors.fullName = 'Full name must be at least 3 characters!';
        formIsValid = false;
        } ;

        if (subject.length < 3) {
        errors.subject = 'Subject must be at least 3 characters!';
        formIsValid = false;
        };

        const emailRegex = /^([a-zA-Z0-9._]+)@[a-zA-Z0-9._]+\.[a-zA-Z]{2,7}$/gm;
        if (!email.match(emailRegex)) {
        errors.email = 'Please enter a valid email address!';
        formIsValid = false;
        };

        if (message.length < 3) {
        errors.message = 'Body must be at least 3 characters!';
        formIsValid = false;
        };

        if(formIsValid) {
            console.log(body);
        };

        return formIsValid;
    };

    return (
        <form onSubmit={validateForm}>
        <div>
            <label>Full Name</label>
            <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={inputValue}
            />
            <span>{errors.fullName}</span>
        </div>
        <div>
            <label>Subject</label>
            <input
                type="text"
                name="subject"
                value={subject}
                onChange={inputValue}
            />
            <span>{errors.subject}</span>
        </div>
        <div>
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={inputValue}
            />
            <span>{errors.email}</span>
        </div>
        <div>
            <label>Message</label>
            <textarea
                name="message"
                row="5"
                col="10"
                value={message}
                onChange={inputValue}
            />
            <span>{errors.message}</span>
        </div>
        <button type="submit">Submit</button>
        </form>
    );
};

export default Form;