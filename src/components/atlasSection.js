import React from 'react'
import "../styles/atlas.css"
import {useEffect,useState} from 'react'
import AtlasMarkerComponent from './AtlasMakrerComponent';

export default function AtlasSection(props){

    const [entries,setEntries] = useState([]);

    useEffect(()=>{
        const sendSearchLocations = async () =>{
           
            try{
                const response = await fetch(process.env.REACT_APP_BACKEND_URL+`/places/atlasEnt/${props.area}`)
                const responseData = await response.json();
                setEntries(responseData);
            }
            catch(err){
                console.log(err);
            }
            
        }
        sendSearchLocations();   
    },[]);   //only call on render

    //img = {selector(loc.type)}

    return(

        <div className = "header1">
            <div className = "contentDiv">
            <button className = {props.buttonClass} onClick = {() => {props.layerFunction(props.location)} }>{props.location}</button>
            </div>
            {entries.map((loc) =>(
            <AtlasMarkerComponent key = {loc.ide} styleInfo = {props.componentStyle} title = {loc.title} img = {loc.icon} ></AtlasMarkerComponent>
            ))}
        </div>
    )
}

