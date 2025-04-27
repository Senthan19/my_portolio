import { ExperienceContent, ExperienceHeading, ExperienceMainSection, Experiences, ExperienceSection, ExpImg } from "./ExperienceStyledComponents";
import Kod from "../../images/icons/kod.jpg";
import Emg from "../../images/icons/emglitz-logo.jpg";
import Adu from "../../images/icons/aicte.png"
export default function Experience() {

    return(
        <ExperienceMainSection id="experience">
            <ExperienceHeading>Experience</ExperienceHeading>
            <ExperienceContent>My work experience as a software engineer and working on different companies and projects.</ExperienceContent>
            <ExperienceSection>
                <Experiences>
                    <div style={{display:"flex"}}>
                        <ExpImg src={Kod}/>
                        <div style={{marginLeft:"10px"}}>
                        <h5 style={{color:"navy", marginTop:"0",margin:"0",fontSize:"1.2rem"}}>Full Stack Development</h5>
                        <h5 style={{color:"navy", marginTop:"0",margin:"0",fontSize:"1.2rem"}}>Intern KodNest</h5>
                        <h6 style={{margin:"0",fontSize:"1rem"}}>June 2024 - Present</h6>
                        </div>
                    </div>
                        <p style={{fontSize:"1.5rem",marginTop:"0",textAlign:"justify"}}>Enhancing expertise in Java-based full-stack development, focusing on backend with Spring Boot and frontend with React.js.</p>
                        <p style={{fontSize:"1.5rem",marginTop:"0"}}><strong>Skills:</strong> Java • Spring Boot • React JS • SQL • JavaScript • HTML & CSS</p>
                </Experiences>
                <Experiences>
                    <div style={{display:"flex"}}>
                        <ExpImg src={Emg}/>
                        <div style={{marginLeft:"10px"}}>
                        <h5 style={{color:"navy", marginTop:"0",margin:"0",fontSize:"1.2rem"}}>Core Python Intern</h5>
                        <h5 style={{color:"navy", marginTop:"0",margin:"0",fontSize:"1.2rem"}}>Emglitz Technologies</h5>
                        <h6 style={{margin:"0",fontSize:"1rem"}}>June 2023 - July 2023</h6>
                        </div>
                    </div>
                        <p style={{fontSize:"1.5rem",marginTop:"0",textAlign:"justify"}}>Strong understanding of Python fundamentals, including data structures, OOP, and file handling. Experienced in writing efficient algorithms and problem-solving using Python.</p>
                        <p style={{fontSize:"1.5rem",marginTop:"0"}}><strong>Skills:</strong> Core Python</p>
                </Experiences>
                <Experiences>
                    <div style={{display:"flex"}}>
                        <ExpImg src={Adu}/>
                        <div style={{marginLeft:"10px"}}>
                        <h5 style={{color:"navy", marginTop:"0",display:"inline",margin:"0",fontSize:"1.2rem"}}>AI-ML Virtual Intern</h5>
                        <h5 style={{color:"navy", marginTop:"0",display:"inline",margin:"0",fontSize:"1.2rem"}}>AICTE Edu-Skills</h5>
                        <h6 style={{margin:"0",fontSize:"1rem"}}>Duration: 2023</h6>
                        </div>
                    </div>
                        <p style={{fontSize:"1.5rem",marginTop:"0",textAlign:"justify"}}>Gained experience in Artificial Intelligence and Machine Learning through hands-on projects.</p>
                        <p style={{fontSize:"1.5rem",marginTop:"0"}}><strong>Skills:</strong>AI • ML • Python</p>
                </Experiences>
                <Experiences>
                    <div style={{display:"flex"}}>
                        <ExpImg src={Kod}/>
                        <div style={{marginLeft:"10px"}}>
                        <h5 style={{color:"navy", marginTop:"0",display:"inline",margin:"0",fontSize:"1.2rem"}}>HTML 5 Intern</h5>
                        <h5 style={{color:"navy", marginTop:"0",display:"inline",margin:"0",fontSize:"1.2rem"}}>Infosys Springboard</h5>
                        <h6 style={{margin:"0",fontSize:"1rem"}}>Duration: 2023</h6>
                        </div>
                    </div>
                        <p style={{fontSize:"1.5rem",marginTop:"0",textAlign:"justify"}}>Experienced in building responsive and accessible web pages using HTML5, focusing on semantic structure, forms, multimedia, and SEO-friendly markup to enhance user experience and performance.</p>
                        <p style={{fontSize:"1.5rem",marginTop:"0"}}><strong>Skills:</strong> HTML 5</p>
                </Experiences>
            </ExperienceSection>
        </ExperienceMainSection>
    )
}