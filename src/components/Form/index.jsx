import React, { useState } from 'react';

function Form() {
    const [fullName, setFullName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const body = {fullName, subject, email, message};

    const [errorFullName, setErrorFullName] = useState("");
    const [errorSubject, setErrorSubject] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const errorBody = {errorFullName, errorSubject, errorEmail, errorMessage};

    const inputValue = (event) => {
        const { name, value } = event.target;
        const setValues = {
            fullName: setFullName,
            subject: setSubject,
            email: setEmail,
            message: setMessage
        };

        const setErrorValues = {
            fullName: setErrorFullName,
            subject: setErrorSubject,
            email: setErrorEmail,
            message: setErrorMessage
        }

        const setValue = setValues[name];
        const setErrorValue = setErrorValues[name];
        if (setValue) {
            setValue(value);
            setErrorValue("");
        };
    };

    const validateForm = (event) => {
        event.preventDefault();
        let formIsValid = true;
     
        const errors = {};

        if (fullName.length < 3) {
        setErrorFullName("Full name must be at least 3 characters!");
        formIsValid = false;
        } ;

        if (subject.length < 3) {
        setErrorSubject("Subject must be at least 3 characters!");
        formIsValid = false;
        };

        const emailRegex = /^([a-zA-Z0-9._]+)@[a-zA-Z0-9._]+\.[a-zA-Z]{2,7}$/gm;
        if (!email.match(emailRegex)) {
        setErrorEmail("Please enter a valid email address!");
        formIsValid = false;
        };

        if (message.length < 3) {
        setErrorMessage("Body must be at least 3 characters!");
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
            <span>{errorBody.errorFullName}</span>
        </div>
        <div>
            <label>Subject</label>
            <input
                type="text"
                name="subject"
                value={subject}
                onChange={inputValue}
            />
            <span>{errorBody.errorSubject}</span>
        </div>
        <div>
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={inputValue}
            />
            <span>{errorBody.errorEmail}</span>
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
            <span>{errorBody.errorMessage}</span>
        </div>
        <button type="submit">Submit</button>
        </form>
    );
};

export default Form;