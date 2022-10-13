import React, { useReducer} from 'react'
import styles from './Validation.module.css'


export const Validation = (props) => {
    const initialState = {
        firstName: {
            value: '',
            error: ""
        },
        lastName: {
            value: "",
            error: ""
        },
        email: {
            value: "",
            error: ""
        },
        hasBeenSubmitted: false
    };

    

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_FIRSTNAME_VALUE':
                return {
                    ...state,
                    firstName: {
                        ...state.firstName,
                        value: action.payload
                    }
                }
            case 'SET_FIRSTNAME_ERROR':
                return {
                    ...state,
                    firstName: {
                        ...state.firstName,
                        error: action.payload
                    }
                }
            case 'SET_LASTNAME_VALUE':
                return {
                    ...state,
                    lastName: {
                        ...state.lastName,
                        value: action.payload
                    }
                }
            case 'SET_LASTNAME_ERROR':
                return {
                    ...state,
                    lastName: {
                        ...state.lastName,
                        error: action.payload
                    }
                }
            case 'SET_EMAIL_VALUE':
                return {
                    ...state,
                    email: {
                        ...state.email,
                        value: action.payload
                    }
                }
            case 'SET_EMAIL_ERROR':
                return {
                    ...state,
                    email: {
                        ...state.email,
                        error: action.payload
                    }
                }
            case 'SET_SUBMITTED_BOOLEAN' :
                return {
                    ...state,
                    hasBeenSubmitted: action.payload
                }    
            default:
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleFirstNameChange = (e) => {
        if (e.target.value < 3) {
            dispatch({
                type: 'SET_FIRSTNAME_ERROR',
                payload: 'First name must be at least 3 characters'
            });
        } else {
            dispatch({
                type: 'SET_FIRSTNAME_ERROR',
                payload: ""
            });
        }

        dispatch({
            type: 'SET_FIRSTNAME_VALUE',
            payload: e.target.value
        });
        
    }

    const handleLastNameChange = (e) => {
        if (e.target.value < 3) {
            dispatch({
                type: 'SET_LASTNAME_ERROR',
                payload: 'Last name must be at least 3 characters'
            });
        } else {
            dispatch({
                type: 'SET_LASTNAME_ERROR',
                payload: ''
            });
        }

        dispatch({
            type: 'SET_LASTNAME_VALUE',
            payload: e.target.value
        });
    }

    const handleEmailChange = (e) => {
        if (e.target.value < 6) {
            dispatch({
                type: 'SET_EMAIL_ERROR',
                payload: 'Email must be at least 6 characters'
            });
        } else {
            dispatch({
                type: 'SET_EMAIL_ERROR',
                payload: ''
            });
        }
        dispatch({
            type: 'SET_EMAIL_VALUE',
            payload: e.target.value
        });

    }

    const handleSubmit = (e) => {
        e.prevent.default();
        dispatch ({
            type: 'SET_SUBMITTED_BOOLEAN',
            payload: true
        });
    }

    return (
        <div>
            <h1>{JSON.stringify(state)}</h1>
            <form className= {styles.column} onSubmit = {handleSubmit}>
                
                
                <label htmlFor = 'first-name'>First Name:</label>
                <input  value = {state.firstName} onChange = {(e) => handleFirstNameChange} />
                

                <label htmlFor = 'last-name'>Last Name:</label>
                <input  value = {state.lastName} onChange = {(e) => handleLastNameChange} />

                <label htmlFor = 'email'>Email:</label>
                <input  value = {state.email} onChange = {(e) => handleEmailChange} />
                
                <input className = {styles.submit} type = 'submit' />
                
                
            </form>
        </div>
    )
}


