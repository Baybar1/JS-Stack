import React, {useContext} from 'react'
import { MyContext } from '../Context/Context'
import styles from './Form.module.css'
export const Form = () => {
    const {setName} = useContext(MyContext)
    
    return (
        <div className = {styles.form}>
            <label>Your Name:</label>
            <input  type='text' onChange = {(e) => setName(e.target.value)}/>
        </div>
    )
}
