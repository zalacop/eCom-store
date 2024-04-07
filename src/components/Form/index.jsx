import React, { useState } from 'react';

function Form() {
    const [fullName, setFullName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [notification, setNotification] = useState(null);

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

        if (fullName.length < 3) {
            setErrorFullName("Full name must be at least 3 characters!");
            formIsValid = false;
        }

        if (subject.length < 3) {
            setErrorSubject("Subject must be at least 3 characters!");
            formIsValid = false;
        }

        const emailRegex = /^([a-zA-Z0-9._]+)@[a-zA-Z0-9._]+\.[a-zA-Z]{2,7}$/gm;
        if (!email.match(emailRegex)) {
            setErrorEmail("Please enter a valid email address!");
            formIsValid = false;
        }

        if (message.length < 3) {
            setErrorMessage("Body must be at least 3 characters!");
            formIsValid = false;
        }

        if (formIsValid) {
            setNotification("Message successfully sent =)!");
            console.log(body);
            setTimeout(() => {
                setNotification(null);
            }, 5000);
        }

        return formIsValid;
    };

    return (
        <div className="container">
            <form onSubmit={validateForm}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control border rounded-0 py-2 px-3 text-base font-medium"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={inputValue}
                    />
                    <span className="text-danger">{errorBody.errorFullName}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                        type="text"
                        className="form-control border rounded-0 py-2 px-3 text-base font-medium"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={inputValue}
                    />
                    <span className="text-danger">{errorBody.errorSubject}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control border rounded-0 py-2 px-3 text-base font-medium"
                        id="email"
                        name="email"
                        value={email}
                        onChange={inputValue}
                    />
                    <span className="text-danger">{errorBody.errorEmail}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control border rounded-0 py-2 px-3 text-base font-medium"
                        id="message"
                        name="message"
                        rows="5"
                        value={message}
                        onChange={inputValue}
                    ></textarea>
                    <span className="text-danger">{errorBody.errorMessage}</span>
                </div>
                <button type="submit" className="btn btn-primary rounded-0">Submit</button>
            </form>
            {notification && (
                <div className="alert alert-success mt-3" role="alert">
                    {notification}
                </div>
            )}
        </div>
    );
}

export default Form;
