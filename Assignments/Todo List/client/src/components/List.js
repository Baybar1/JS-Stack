import React, { useState } from 'react';

export const List = (props) => {
    const { list } = props;
    const [checked, setChecked] = useState([]);
    const [disable,setDisable] = useState(true)
    const { listItem } = props;
    const {setListItem} = props
    
    const handleCheck = (e) => {
        let updatedList = [...checked];
        if (e.target.checked) {
            updatedList = [...checked, e.target.value,];
            setDisable(false)
        } else {
            updatedList.splice(checked.indexOf(e.target.value), 1);
            
        }
        setChecked(updatedList);
        
    };

    const handleDelete = (index) => {
        const deleted = listItem.filter((list,i) => {
            return i !== index;
        })
        setListItem(deleted);
    }


    const isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";


    return (
        <div>
            <ul  
            style={{
                listStyle: 'none',
            }}>
            
                
                
                {

                    listItem.map((list, index) => (
                        <div key={index}>
                            <li className={isChecked(list)}>
                                {list}
                                <input value={list} type='checkbox' onClick={handleCheck} />
                                <button disabled = {disable} onClick={(e) => handleDelete(index)}>Delete</button>
                            </li>


                        </div>
                    ))
                }
            </ul>



        </div>
    )
}
