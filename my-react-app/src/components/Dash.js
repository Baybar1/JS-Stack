import React from 'react'

export const Dash = (props) => {
    const { fruit1, fruit2, fruit3 } = props
    return (
        <div>
            <h1>Hello World</h1>
            <ul>
                <li>{fruit1}</li>
                <li>{fruit2}</li>
                <li>{fruit3}</li>
            </ul>
            <a href="https://www.youtube.com/watch?v=j59qQ7YWLxw">Favorite Video</a>
        </div>
    )
}
