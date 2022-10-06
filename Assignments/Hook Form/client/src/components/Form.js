import React, {useState} from 'react'
import styles from './Form.module.css'

export const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirm,setConfirm] = useState("")
    const [email, setEmail] = useState("")

    

    return (
        <div className = {styles.app}>
            <form className = {styles.form}>
                <label>First name</label>
                <input type = 'text' value = {firstName} onChange = {(e) => setFirstName(e.target.value)}></input>
                <label>Last Name</label>
                <input type = 'text' value = {lastName} onChange = {(e) => setLastName(e.target.value)}></input>
                <label>Email</label>
                <input type = 'text' value = {email} onChange = {(e) => setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type = 'password' value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
                <label>Confirm Password</label>
                <input type = 'password' value ={confirm} onChange = {(e) => setConfirm(e.target.value)}></input>
            </form>
            <>
            <p>Your Form data</p>
            <p>First name <strong>{firstName}</strong></p>
            <p>Last Name <strong>{lastName}</strong></p>
            <p>Email <strong>{email}</strong></p>
            <p>Password <strong>{password}</strong></p>
            <p>Confirm Password <strong>{confirm}</strong></p>
            </>
        </div>
    )
}
