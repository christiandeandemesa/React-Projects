import React, {useState} from "react";

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = e => {
        e.preventDefault();
        if(firstName.length < 2 && firstName.length > 0){
            setFirstNameError("First name must be at least 2 characters!")
        }
        if(lastName.length < 2 && lastName.length > 0){
            setLastNameError("Last name must be at least 2 characters!")
        }
        if(email.length < 3 && email.length > 0){
            setEmailError("Email must be at least 3 characters!")
        }
        if(password.length < 2 && password.length > 0){
            setPasswordError("Password must be at least 2 characters!")
        }
        if(password !== confirmPassword){
            setConfirmPasswordError("Passwords must match!")
        }
        else {
            setHasBeenSubmitted(true);
        }
    }
    return(
        <div>
            {
                hasBeenSubmitted ?
                <h3>Thank you for filling out the form!</h3> :
                <h3>Please fill out the form.</h3>
            }
            <form onSubmit = {createUser}>
                <div>
                    <label>First Name: </label>
                    <input type = 'text' onChange={e => setFirstName(e.target.value)} />
                    {
                        firstNameError ?
                        <p>{firstNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type = 'text' onChange={e => setLastName(e.target.value)} />
                    {
                        lastNameError ?
                        <p>{lastNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type = 'text' onChange={e => setEmail(e.target.value)} />
                    {
                        emailError ?
                        <p>{emailError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type = 'password' onChange={e => setPassword(e.target.value)} />
                    {
                        passwordError ?
                        <p>{passwordError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type = 'password' onChange={e => setConfirmPassword(e.target.value)} />
                    {
                        confirmPasswordError ?
                        <p>{confirmPasswordError}</p>:
                        ''
                    }
                </div>
                <input type = 'submit' value = 'Create User' />
                <h4>Your Form Data</h4>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </form>
        </div>
    );
};

export default UserForm;