import React from 'react'
import "leaflet/dist/leaflet.css"
import { useState,useEffect } from 'react'
import "../styles/LeftSearch.css"
import {useRef} from 'react'
import Search from "./Search"
import ButtonComp from "./ButtonComp"

const LeftSearch = (props) => {

   
    //const buttonTitles = props.locations;
    const[buttonTitles, setLoadedTitles] = useState([]);
    const [match, setMatch] = useState([]);


    useEffect(()=>{
        const sendSearchLocations = async () =>{

            try{
                const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/places/titles')
                const responseData = await response.json();
                setLoadedTitles(responseData);
                setMatch(responseData);
            }
            catch(err){
                console.log(err);
            }
        }
        sendSearchLocations();   
    },[]);   //only called when page renders, no dependencies to call this again
   

    //passed to search component 
    const searchInputHandler = inputChild => {

       if(inputChild === ""){
        setMatch(buttonTitles);
       }
       else{
            const results = buttonTitles.filter((entry) => {
            return entry.title.toLowerCase().startsWith(inputChild.toLowerCase());
            })
            setMatch(results);
        }
    }

    return(
        <div className = "leftSearch"> 
            <Search
                onInputChange = {searchInputHandler}
             />
        <div className = "test3">
             <div className = "leftbuttonDiv">
                {match.map((loc) =>(
                    <ButtonComp
                        key = {loc.title}
                        label = {loc.title}
                        id = {loc.ide}
                        buttonEvent = {props.eventFunction}
                    />
                ))}
             </div>
        </div>
    </div> //END MAIN DIV
    )
}


export default LeftSearch;





