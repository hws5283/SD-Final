import profile from "../navImages/lee-shadeck.jpg"
import map from "../navImages/leeWall.jpg"
import "../styles/aboutcomp1.css"
import {Link} from "react-router-dom";

function AboutComp1() {
  return (
    
      <section className="about">
        <div className="content">
            <img src={profile} alt = "Lee Shadeck"/> 
            <div className="text">
                <h1>About <span className="spanClass">Lee's Map</span></h1>
                <h5>Interactive Map</h5>
                <p>Welcome to Lee Shadeck's interactive map! We believe that everyone has a story to tell, and we want to help you explore those stories. This website provides an interactive map experience that allows users to explore the history of Lee Shadeck's friends and family through different landmarks. With this, you are able to explore the relationships, places, and events that make up Lee Shadeck's life through various pop-ups. We invite you to explore the map and learn about the people and places that make up this incredible story.</p>
                <Link to="https://www.airbnb.com/rooms/565043333963667558?guests=1&adults=1&s=67&unique_share_id=08556878-92d6-4818-bc98-d853303b1eb7&source_impression_id=p3_1676477888_COX3kcVRMcsRmjs8" target="_blank" rel='noreferrer'>
                    <button type="button" className="aboutBtn">Airbnb Page</button>
                </Link>
                <Link to="https://sites.google.com/view/l-lucian-art/about-the-artist" target="_blank" rel='noreferrer'>
                    <button type="button" className="aboutBtn">More About Lee</button>
                </Link>
            </div>
            </div>

        <div className="content2">
            <div className="text">
                <h1>The<span className="spanClass">Beginning</span></h1>
                <h5>How the Map Started</h5>
                <p>
                    The idea for the map room.
                    My story and I’m sticking to it goes like this:
                    Winnie and I purchased 545 W 2nd street - with the plan that we could live in the 
                    upstairs and Air BNB out the downstairs.  
                    As we were starting to rehab the downstairs apartment we were 
                    working on the master bedroom…and as we were sanding and chipping away paint on this wall, 
                    
                    Winnie said:
                    “Those look just like the colors and shapes on an old map.”
                    And my immediate knee jerk response was “Will you let me?”
                    And Winnie being Winnie is always encouraging and up for adventures.
                    See we kinda froze the project in space and took a step back.
                    There were the colors of the bare plaster; white from stucco from previous repairs; 
                    and then over the course of about 120 years - somehow there are only 5 layers of 
                    paint- 2 blues; a brown and 2 green layers .  
                    (I’m guessing there were years of wallpaper before paint was all that common)
                    - there were cracks and a few holes and the colors on the wall.
                    I don’t really know how I got the idea to make up a map based on some of the people 
                    and places in my life…but I remember there being a big bump in the wall and thinking- 
                    I can make those into mountains- and Dylan is the tallest person I know- he can be the biggest mountain…

                    And that is how it started.
                    We filled the wall with the names of the people who were and 
                    have been closest to us over the years…who stand the test of time- 
                    cause I still like em and they still tolerate me. It's also a cool visual of our 
                    people coming together as we begin our life together in our new home. 
                    I hope you enjoy my/our artistic and emotional endeavor.
                    Lee and Winnie.
                </p>
            </div>
            <img src={map} alt = "Map"/>
        </div>
      </section>
    
  );
}

export default AboutComp1;