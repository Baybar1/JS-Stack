import React, {useState} from 'react'

export const Boxes = (props) => {
    const [color,setColor] = useState('')
    const {newColor, setNewColor} = props;

    const handleSubmit= (e) => {
        e.preventDefault();
        props.onNewBox(color);
        setNewColor([...newColor, color]);
    }
    return (
        <div>
            <form  onSubmit = {handleSubmit}>
                <label>Color</label>
                <input style = {{margin: '30px'}} type='text' value = {color} onChange = {(e)=> setColor(e.target.value)}/>
                <input  type='submit' value='Add'/>
            </form>
            
        </div>
    )
}
