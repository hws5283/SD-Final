import React from 'react'
import {useReducer, useEffect} from 'react'
import '../../styles/input.css'


const Input = props =>{

    const changeHandler = (event) =>{
       props.reducer({
          type: props.changeType,
          value: event.target.value
       })
    }
    //need this, on reloads send an action to the reducer 
    useEffect(()=>{
      props.reducer({
        type: props.changeType,
        value: props.initialValue
      })
    },[props.initialValue])

    return(
        <div className = "textBox">
            <div className = "textBoxLabel">
                 <label className = "LabelArea" htmlFor= {props.id}>{props.label}</label>
            </div>
            <div className = "decriptionInput">
                <textarea className = "descriptionArea" id = {props.id} rows = {props.rows} cols = {props.columns} onChange = {changeHandler} value = {props.initialValue}></textarea>
            </div>   
        </div>
    )
}
export default Input;

    