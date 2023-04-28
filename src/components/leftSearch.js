import React from 'react'
import "leaflet/dist/leaflet.css"
import { useState,useEffect } from 'react'
import "../styles/LeftSearch.css"
import Search from "./Search"
import ButtonComp from "./ButtonComp"
import LoadingSpinner from './general/LoadingSpinner'

const LeftSearch = (props) => {

    const[leftLoad, setLoad] = useState(false);
    const[buttonTitles, setLoadedTitles] = useState([]);
    const [match, setMatch] = useState([]);

    useEffect(()=>{
        const sendSearchLocations = async () =>{
            setLoad(true);
            try{
                const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/places/titles')
                const responseData = await response.json();
                setLoadedTitles(responseData);
                setMatch(responseData);
            }
            catch(err){
                console.log(err);
            }
            setLoad(false);
        }
        sendSearchLocations();   
    },[]);   //only call on render
   

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

        {leftLoad && <LoadingSpinner asOverlay></LoadingSpinner>}
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





