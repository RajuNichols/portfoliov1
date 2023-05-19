
import Nav from "./components/nav/Nav"
import Intro from "./components/intro/Intro";
import SkillsList from "./components/skillsList/SkillsList";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App(){
  return (
    <div>
      <Nav />
      <section id = "home">
        <Intro />
      </section>
      <section id = "skills">
        <SkillsList/>
      </section>
      <section id = "projects">
        <Projects/>
      </section>
      <section id = "contact">
        <Contact/>
      </section>
      
      
    </div>
  )
}

export default App;
