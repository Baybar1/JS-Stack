import React, {useState} from 'react'
import styles from './Form.module.css'

export const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirm,setConfirm] = useState("")
    const [email, setEmail] = useState("")
    const [firstError,setFirstError] = useState("")
    const [lastError,setLastError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passError, setPassError] = useState("")
    const [matchError, setMatchError] = useState("")

    const firstNameError = (e) => {
        setFirstName(e.target.value);
        if (!e.target.value.length){
            setFirstError("");
        }else if ((e.target.value).trim().length === 0) {
            setFirstError("");
        }else if ((e.target.value).trim().length < 2) {
            setFirstError("Must be at least 2 characters long");
        } else {
            setFirstError("");
        }
    }

    const lastNameError = (e) => {
        setLastName(e.target.value);
        if (!e.target.value.length){
            setLastError("");
        }else if ((e.target.value).trim().length === 0) {
            setLastError("");
        }else if ((e.target.value).trim().length < 2) {
            setLastError("Must be at least 2 characters long");
        } else {
            setLastError("");
        }
    }

    const fullEmailError = (e) => {
        setEmail(e.target.value);
        if (!e.target.value.length){
            setEmailError("");
        }else if ((e.target.value).trim().length === 0) {
            setEmailError("");
        }else if ((e.target.value).trim().length < 5) {
            setEmailError("Must be at least 5 characters long");
        } else {
            setEmailError("");
        }
    }

    const passwordError = (e) => {
        setPassword(e.target.value);
        if (!e.target.value.length){
            setPassError("");
        }else if ((e.target.value).trim().length === 0) {
            setPassError("");
        }else if ((e.target.value).trim().length < 8) {
            setPassError("Must be at least 8 characters long");
        } else {
            setPassError("");
        }
    }

    const confirmError = (e) => {
        setConfirm(e.target.value);
        if (!e.target.value.length){
            setMatchError("");
        }else if ((e.target.value).trim().length === 0) {
            setMatchError("");
        }else if (e.target.value !== password) {
            setMatchError("Passwords must match");
            
        } else {
            setMatchError(""); 
        }
    }

    

    return (
        <div className = {styles.app}>
            <form className = {styles.form}>
                <label>First name</label>
                <input type = 'text' value = {firstName}  onChange = {firstNameError}></input> 
                {
                    firstError ?
                    <p>{firstError}</p> :
                    ""
                    
                }
                <label>Last Name</label>
                <input type = 'text' value = {lastName} onChange = {lastNameError}></input>
                {
                    lastError ?
                    <p>{lastError}</p> :
                    ""
                }
                <label>Email</label>
                <input type = 'text' value = {email} onChange = {fullEmailError}></input>
                {
                    emailError ?
                    <p>{emailError}</p> :
                    ""
                }
                <label>Password</label>
                <input type = 'password' value = {password} onChange = {passwordError}></input>
                {
                    passError ?
                    <p>{passError}</p> :
                    ""
                }
                <label>Confirm Password</label>
                <input type = 'password' value ={confirm} onChange = {confirmError}></input>
                {
                    matchError ?
                    <p>{matchError}</p> :
                    ""
                }
            </form>                        
        </div>
    )
}
