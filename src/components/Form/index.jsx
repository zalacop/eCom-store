import React, { useState } from 'react';
import { Button } from '../SingleProduct/index.styles';
import { Label } from './index.styles';

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
        <div className="container w-50">
            {notification && (
                <div className="alert alert-success mt-3 rounded-0 mx-auto d-flex justify-content-center" role="alert">
                    {notification}
                </div>
            )}
            <form onSubmit={validateForm}>
                <div className="mb-3 d-flex flex-column">
                    <Label htmlFor="fullName" className="form-label ms-2">Full Name</Label>
                    <input
                        type="text"
                        className="form-control border rounded-0 py-2 px-3 text-base font-medium"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={inputValue}
                    />
                    <span className="text-danger ms-3">{errorBody.errorFullName}</span>
                </div>
                <div className="mb-3 d-flex flex-column">
                    <Label htmlFor="subject" className="form-label ms-2">Subject</Label>
                    <input
                        type="text"
                        className="form-control border rounded-0 py-2 px-3 text-base"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={inputValue}
                    />
                    <span className="text-danger ms-3">{errorBody.errorSubject}</span>
                </div>
                <div className="mb-3 d-flex flex-column">
                    <Label htmlFor="email" className="form-label ms-2">Email</Label>
                    <input
                        type="email"
                        className="form-control border rounded-0 py-2 px-3 text-base font-medium"
                        id="email"
                        name="email"
                        value={email}
                        onChange={inputValue}
                    />
                    <span className="text-danger ms-3">{errorBody.errorEmail}</span>
                </div>
                <div className="mb-3 d-flex flex-column">
                    <Label htmlFor="message" className="form-label ms-2">Message</Label>
                    <textarea
                        className="form-control border rounded-0 py-2 px-3 text-base font-medium"
                        id="message"
                        name="message"
                        rows="5"
                        value={message}
                        onChange={inputValue}
                    ></textarea>
                    <span className="text-danger ms-3">{errorBody.errorMessage}</span>
                </div>
                <Button type="submit" className="btn rounded-0 py-2 px-5 border-dark mx-auto d-flex justify-content-center mt-5">Submit</Button>
            </form>            
        </div>
    );
}

export default Form;
