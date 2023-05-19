import "./projects.css"
import ProjectList from "../projectList/ProjectList";
import {useEffect,useState} from "react"
import { 
    javaProject,pythonProject, 
    cProject, jsProject} 
    from "../../projectdata";
const Projects = () => {
    const [selected,setSelected] = useState("java")
    const [data,setdata] = useState([])
    const list = [
        {
            id: "java",
            title:"Java"
        },
        {
            id: "python",
            title:"Python"
        },
        {
            id: "c",
            title:"C"
        },
        {
            id: "js",
            title:"JS"
        }   
    ];

    useEffect(()=>{
        switch(selected){
            case "java":
                setdata(javaProject);
                break;
            case "python":
                setdata(pythonProject);
                break;
            case "c":
                setdata(cProject);
                break;
            case "js":
                setdata(jsProject);
                break;
            default:
                setdata(javaProject)
        }
    },[selected])

    return (
        <div className = "p">
            <h1>Projects</h1>
            <ul className = "tag-name">
                {list.map((item) =>(
                    <ProjectList 
                    title = {item.title} 
                    active ={selected === item.id} 
                    setSelected = {setSelected}
                    id = {item.id}/> 
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="p-item">
                        <a href = {d.link} target = "_blank" rel="noreferrer">
                            <img src={d.img} alt="pic of project"  className = "p-img"/>
                        </a>
                        <h3 className= "item-title">{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
