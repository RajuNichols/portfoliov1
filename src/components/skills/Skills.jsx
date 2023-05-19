import "./skills.css"
const Skills = ({img}) => {
    return (
        <div className = "s">
            <div className="s-browser">
                <div className="s-circle"></div>
                <div className="s-circle"></div>
                <div className="s-circle"></div>
            </div>
                <img src={img} alt="pic of skill logo" className="s-img" />
        </div>
    )
}

export default Skills
