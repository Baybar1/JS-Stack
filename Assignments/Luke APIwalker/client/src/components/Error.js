import React from 'react'

export const Error = () => {
    return (
        <div style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            marginTop: '50px'
        }}>
            <h1>These are not the droids you are looking for</h1>
            <img src='https://thumbs.gfycat.com/CreamySelfreliantFox-size_restricted.gif' alt='Page Not Found'></img>
        </div>
    )
}
