import React, {useState} from 'react'
import { List } from './List'

export const Add = (props) => {
    const {listItem,setListItem} = props
    const [list,setList] = useState('')

    const handleSubmit = (e) => {
        
        e.preventDefault();
        props.onNewList(list);
        setListItem([...listItem, list]);
        if (handleSubmit) {
            setList('');
        }
        
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input style={{
                    border: 'none',
                    backgroundColor: 'lightgray',
                    borderRadius: '5px',
                    padding: '20px 35px',
                    marginRight: '20px',
                    fontSize: '20px'
                }} type='text' value = {list} onChange = {(e)=> setList(e.target.value)}/>
                <input style={{
                    color: 'white',
                    backgroundColor: 'blue',
                    padding: '20px 30px',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '20px'
                }} type='submit' value='Add'/>
            </form>
            <List listItem={listItem} setListItem = {setListItem}/>
        </div>
    )
}
