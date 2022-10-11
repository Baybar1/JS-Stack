import React, {useContext} from 'react'
import { MyContext } from '../Context/Context'
import styles from './Navbar.module.css'
export const Navbar = () => {
    const {name} = useContext(MyContext)
    return (
        <div className ={styles.nav}>
            <h1>Hello {name}!</h1>
        </div>
    )
}
