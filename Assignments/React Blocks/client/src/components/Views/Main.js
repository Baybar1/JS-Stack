import React from 'react'
import { Advertisement } from './Advertisement'
import { Subcontent } from './Subcontent'

export const Main = () => {
    return (
        <div style={{
            backgroundColor: '#E06666',
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px 0px',
            height: '100%',
            border: '2px solid black'
            
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '60%',
                gap: '20px',
                width: '90%',
                marginBottom: '30px'
            }}>
            <Subcontent />
            <Subcontent />
            <Subcontent />
            </div>
            <Advertisement />
        </div>
    )
}
