import "./skillsList.css"
import Skills from "../skills/Skills"
import {skills} from "../../data"
const SkillsList = () => {
    return (
        <div className = "sl">
            <div className="sl-text">
                <h1 className= "sl-title"> My Skills </h1>
                <p1 className = "sl-desc"> These are some of the skills that I've learned in the recent years.
                                           These include both programming langauges and frameworks I've worked with. 
                </p1>
            </div>
            <div className="sl-list">
                {skills.map((item) => (
                    <Skills key ={item.id} img ={item.img}/>
                ))}
            </div>
            
        </div>
    )
}

export default SkillsList
