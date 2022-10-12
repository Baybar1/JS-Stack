import React from 'react'
import style from './Content.module.css'
export const Content = (props) => {
    const {tab,newTab} = props
    return (
        <div className={style.content}>Content</div>
    )
}
