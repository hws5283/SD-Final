import "../styles/atlas.css"
import section1 from "../devInfo/gsf.json"
import section2 from "../devInfo/dd.json"
import section3 from "../devInfo/mm.json"
import AtlasMarkerComponent from "./AtlasMakrerComponent"
import LakeIcon from "../navImages/lakeIconUse.png"
import CoastIcon from "../navImages/coastal.png"
import MntIcon from "../navImages/mountainIconV2.png"
import OceanIcon from "../navImages/oceanIconClear.png"
import TreeIcon from "../navImages/treeIconV2.png"
import DesertIcon from "../navImages/desertV5.png"
import PondIcon from "../navImages/pondV1.png"
import "../styles/atlasbuttons.css"
export default function Atlas(props){

    const great_shadeck_forest = section1;
    const daves_desert = section2;
    const moors = section3;

    const selector = (area) =>{
            if(area === "lake")
                return LakeIcon;
            if(area === "alpine")
                return MntIcon;
            if(area === "coast")
                return CoastIcon;
            if(area === "ocean")
                return OceanIcon;
            if(area === "woodlands")
                return TreeIcon;
            if(area ==="desert")
                return DesertIcon;
            if(area === "pond")
                return PondIcon;
    }

    return (
            <div className = "buttonDiv">
                <div className = "header1">
                    <div className = "contentDiv">
                    <button className = "headerBtn SSH" onClick = {() => {props.layerController("Great Shadeck Forest")} }>Great Shadeck Forest</button>
                    </div>
                    {great_shadeck_forest.map((loc) =>(
                    <AtlasMarkerComponent key = {loc.feature} styleInfo = {"general h1Regions"} title = {loc.feature} img = {selector(loc.type)}></AtlasMarkerComponent>
                    ))}
                </div>

                <div className = "header2">
                    <div className = "contentDiv">
                    <button className = "headerBtn DD" onClick={() =>{props.layerController("LLucian Lake")}}>Dave's Desert</button>
                    </div>
                    {daves_desert.map((loc) =>(
                    <AtlasMarkerComponent key = {loc.feature} styleInfo = {"general h2Regions"} title = {loc.feature} img={selector(loc.type)}></AtlasMarkerComponent>
                    ))}

                </div>


                <div className = "header3">
                    <div className = "contentDiv">
                    <button className = "headerBtn MM" onClick={() =>{props.layerController("LLucian Lake")}}>Middle of Nowhere</button>
                    </div>
                    {moors.map((loc) =>(
                    <AtlasMarkerComponent key = {loc.feature} styleInfo = {"general h3Regions"} title = {loc.feature} img={selector(loc.type)}></AtlasMarkerComponent>
                    ))}

                </div>
                
             </div>
          
    )
}