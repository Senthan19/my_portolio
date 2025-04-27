import About from './Components/About/About';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Index from './Components/NavBar/index';
import  Project  from './Components/Projects/Project';
import Skill from './Components/Skills/Skill';
function App() {
 
  return (
    <div>
      <Index/>
      <About/>
      <Skill/>
      <Experience/>
      <Project/>
      <Education/>
    </div>
  );

 
}

export default App;
