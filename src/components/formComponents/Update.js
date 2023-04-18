import React, { useEffect, useContext, useReducer} from 'react'
import './update.css'
import {useState} from 'react'
import Input from './Input';
import Button from './FormButton'
import Selection from './Selection'
import { VALIDATOR_MINLENGTH } from '../../utils/validators'
import ImageUpload from './ImageUpload'
import { AuthContext } from '../general/context/auth-context';
import LoadingSpinner from '../general/LoadingSpinner';
import FormButton from './FormButton'
import Modal from '../general/Modal';
//THIS PAGE DEALS WITH UPDATING MAP COMPONENTS IT GENERATES A TEXTBOX AND IMAGE UPLOAD BUTTON WITH A SUBMIT FOR BUTTON
export default function Update(){

    const [loadedPlace, setLoadedPlace] = useState("");              //value of textbox
    const auth = useContext(AuthContext);
    const[isLoading,setIsLoading] = useState(false);    //controls the loading spinner
    const[successStatus, setSuccess] = useState(false);
    const[showOverlay, setShowOverLay] = useState(false);
    const[fileData, setFileData] = useState(false);

    const changeReducer = (state,action) =>{
        switch(action.type){
            case "SELECTION_CHANGE":
                setLoadedPlace(action.value);
                return {
                    ...state,
                    selection: { value: action.value}
                }
            case "DESCRIPTION_CHANGE":
                setLoadedPlace(action.value);
                return{
                    ...state,
                    description: {value: action.value}
                }
            case "IMAGE_CHANGE":
                 setFileData(true);
                  return{
                    ...state,
                    images: {formFiles: action.formFiles},
                    fileCount: {value: state.fileCount.value + 1}
                  }
            case "REMOVE_IMAGE":
                  if(state.images.formFiles.length === 1)       
                    setFileData(false);
                  return{
                    ...state,
                    images: {formFiles: action.formFiles},
                    fileCount: {value: state.fileCount.value -1}
                  }
            case "URL_CHANGE":
                    return{
                      ...state,
                      urlLink: {value: action.value}
                    }
            default:
                return state;
        }
    }
   
    //we manage the form state inside the update component
    const [formState, dispatch] = useReducer(changeReducer,              
        {
            selection: {
                value: '15210',          
              },
              description: {
                value: '',
              },
              images: {             
                formFiles: [],
              },
              fileCount:{
                value: 0,
              },
              urlLink:{
                value:'',
              }
        },
      );

    const closeModalHandler = () => {
        setShowOverLay(false);
    }
    const openModalHandler = () => {
        setShowOverLay(true);
    }
        
    useEffect(()=>{
        const fetchPlace = async () =>{
            console.log("usestate called");
            let response = "";
            let responseData = "";
            try{
                response = await fetch(process.env.REACT_APP_BACKEND_URL + `/places/byname/${formState.selection.value}`);
                responseData = await response.json();
                setLoadedPlace(responseData.placebyName.description);   //STATE CHANGE
                
                if(response && !response.ok){
                    console.log("error loading data");
                }
      
            }catch(err){
                console.log(err);
            }
        }
        fetchPlace();
    },[formState.selection.value]);  //should only be called when dropdown changes and on initial render 
    

    const formSubmitHandler = async (event)=>{
        event.preventDefault(); //NEEDTHIS
        console.log("update request sent");
        setShowOverLay(true);
    }
    
    const markerUpdateSubmitHandler =  async (event) =>{   
        
        setShowOverLay(false);
        setIsLoading(true);
        //NOTE, USING PROTECTED ROUTE HERE, WE MUST PROVIDE A TOKEN!!!, or this request wont work -> check backend code
        const url = process.env.REACT_APP_BACKEND_URL + `/places/upload/${formState.selection.value}`;  
    
        try{
        //build the form data object
        const fd = new FormData();
        fd.append('description', formState.description.value);
        fd.append('link', formState.urlLink.value);  

        for(var x = 0; x<formState.images.formFiles.length; x++){  
           fd.append('image', formState.images.formFiles[x]);
        }

        const requestOptions = {
            method: 'POST',
            body:fd,
            headers:{Authorization: 'Bearer ' + auth.token}     //attatch token, retrieved from context ****
        }
        //Authorization: 'Bearer' + auth.token
        await fetch(url,requestOptions);
        
        }catch(err){
            console.log(err);
        };
        setSuccess(true);
        setIsLoading(false);
    }
    
    //All components here need a pointer to the inputHandler function from the useform hook ***
  
    const checkData = () =>{
        console.log(formState.selection.value);
        console.log(formState.description.value);
        console.log(formState.images.formFiles);
        console.log(formState.fileCount.value);
        console.log(formState.urlLink.value);
    }
    
    return(
        <React.Fragment>
        <Modal 
        show = {showOverlay} 
        onCancel = {closeModalHandler} 
        header = {"Update Point"}
        headerClass="_fail"
        contentClass = "place-item__modal-content"
        footerClass = "place-item__modal-actions"
        footer = {
            <React.Fragment>
                <FormButton onClick = {markerUpdateSubmitHandler} text = {"Yes"}></FormButton>
                <FormButton onClick = {closeModalHandler} text = {"No"}></FormButton>
            </React.Fragment>    
                }
        >
            <p>Are you sure you want to update this marker, this cannot be undone from this form. 
                <br></br> 
                Close this form and check data again if needed.
            </p>
        </Modal>

        <div className = "updateDiv">
            <div>
                <button onClick = {checkData}>test button</button>
            </div>

        <div className = "formDiv">
      
        <form className = "updateForm" onSubmit={formSubmitHandler}>
            <div className = "selectComponent">
                <Selection reducer = {dispatch} id = "selection" disabled = {fileData}></Selection>   
            </div>
            <div className = "descriptionUpdate">

            <div className = "box1">
            <Input 
            changeType = "DESCRIPTION_CHANGE"
            reducer = {dispatch}
            element = "textbox" 
            type = "text" 
            id = "description"
            label = "Description" 
            errorText = "No description provided, add one if needed."
            initialValue = {loadedPlace}
            rows = {10}
            columns = {50}
            />
            </div>
            </div>
            <div>
            <ImageUpload id = "images" reducer = {dispatch}></ImageUpload>
            </div>
            <div>
            <Input
            changeType = "URL_CHANGE"
            reducer = {dispatch}
            element = "textbox"
            type = "text"
            id = "linkEntry"
            label = "Url Link"
            initialValue = {formState.urlLink.value}
            rows = {1}
            columns = {50}
            ></Input>
            </div>
            {successStatus &&
            <div  className = "formFeedback">
                <p>
                    Data submitted successfully, check map page for updates....
                </p>
            </div>
            }
            <div className = "submit-Btn">
                <Button disabled = {false} type = "submit" text = "Update Marker"></Button>
            </div>
            
            {isLoading && <LoadingSpinner asOverlay/>}
        </form>
        
        
        </div>
        </div>
        </React.Fragment>
    )
}


