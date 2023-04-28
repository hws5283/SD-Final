import "../styles/atlas.css"
import AtlasSection from '../components/atlasSection'
import "../styles/atlasbuttons.css"
export default function Atlas(props){


    
    return (
            <div className = "buttonDiv">
            <AtlasSection 
                location = "Great Shadeck Forest" 
                area = "gsf" 
                layerFunction = {props.layerController}
                buttonClass = "headerBtn SSH"
                componentStyle = "general h1Regions"
            ></AtlasSection>  

            <AtlasSection 
                location = "Dave's Desert" 
                area = "dd" 
                layerFunction = {props.layerController}
                buttonClass = "headerBtn DD"
                componentStyle = "general h2Regions"
            ></AtlasSection>  

            <AtlasSection 
                location = "Middle of Nowhere" 
                area = "mm" 
                layerFunction = {props.layerController}
                buttonClass = "headerBtn MM"
                componentStyle = "general h3Regions"
            ></AtlasSection>  

            <AtlasSection 
                location = "Skadhauge Steppe" 
                area = "ss" 
                layerFunction = {props.layerController}
                buttonClass = "headerBtn SS"
                componentStyle = "general h4Regions"
            ></AtlasSection>  

            <AtlasSection 
                location = "Oberrath Range" 
                area = "or" 
                layerFunction = {props.layerController}
                buttonClass = "headerBtn OR"
                componentStyle = "general h5Regions"
            ></AtlasSection> 

            <AtlasSection 
                location = "4RS Highlands" 
                area = "ah" 
                layerFunction = {props.layerController}
                buttonClass = "headerBtn SSH"
                componentStyle = "general h1Regions"
            ></AtlasSection> 

            <AtlasSection 
                location = "Wearyland" 
                area = "wl" 
                layerFunction = {props.layerController}
                buttonClass = "headerBtn MM"
                componentStyle = "general h3Regions"
            ></AtlasSection> 
            
            </div>     
    )
}