import React from 'react'


export const BoxColors = (props) => {
    
    
    const {newColor} = props;
    return (
        <div>
            {
                newColor.map((color,index) => (
                    <div key={index} style = {{
                        backgroundColor: color,
                        width: '100px',
                        height: '100px',
                        margin: '10px'
                    }}>
                    </div>
                ))
            }
            
        </div>
    )
}
