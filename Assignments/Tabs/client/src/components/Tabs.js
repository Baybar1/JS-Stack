import React from 'react'
import styles from './Tabs.module.css'
export const Tabs = (props) => {
    const {tab,setTab,newTab} = props
    const handleClick = (index) => {
        setTab(index)
        
    }
    return (
        <div style ={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center'
        }}>
            {
                newTab.map((item,index) => (
                    <div  key={index} className = {styles.tab} onClick = {(e) => handleClick(index)}>
                        
                        {item.tabNum}
                    </div>
                ))
            }
            
            
        </div>
    )
}
