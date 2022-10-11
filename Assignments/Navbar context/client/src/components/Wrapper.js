import React from 'react'
import { MyContext} from '../Context/Context'
import {useState} from 'react'
import { Navbar } from './Navbar'
import { FormWrapper } from './FormWrapper'

export const Wrapper = () => {
    const [name,setName] = useState('')
    return (
        <MyContext.Provider value = {{name,setName}}>
            <Navbar/>
            <FormWrapper />
        </MyContext.Provider>
    )
}



