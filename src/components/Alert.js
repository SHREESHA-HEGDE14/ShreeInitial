
import React from 'react'
import { useState } from 'react';

function Alert(props) {
    // const [alert, setAlert] = useState(null);
    // const showAlert = (message, type)=>{
    //     setAlert({
    //       msg: message,
    //       type: type
    //     })
    //     setTimeout(() => {
    //         setAlert(null);
    //     }, 1500);
    // }
    const capitalize = (word)=>{
        if(word === "danger"){
            word = "error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // style={{height: '50px'}} 
        <div className='tw-h-16'>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
    )
}
export default Alert