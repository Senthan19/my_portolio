import { IconStyle, SkillContainer, SkillContent, SkillHeading, SkillIconsContainer, SkillSection } from "./SkillStyledComponents";
import { SiHtml5, SiCss3, SiPython, SiSpringboot, SiJavascript, SiMysql,SiReact} from "react-icons/si";
import { DiJava } from "react-icons/di";  // Correct import for Java


export default function Skill() {
    return(
        <SkillContainer id="skills">
            <SkillHeading>Skills</SkillHeading>
            <SkillContent>Here are some of my skills on which I have been working on for the past 2 years.</SkillContent>
            <SkillSection>
                <h6 style={{textAlign:"center",fontSize:" 2rem",marginTop:"5px",marginBottom:"10px"}}>Frontend</h6>
                <SkillIconsContainer>
                <IconStyle style={{ color: "white", backgroundColor: "#E34F26"}}><SiHtml5 title="HTML5" style={{ marginRight: "5px", fontSize: "1rem" }} />HTML5</IconStyle>
                <IconStyle style={{ color: "white", backgroundColor:"#1572B6"}}><SiCss3 title="CSS3" style={{ marginRight: "5px", fontSize: "1rem" }}/> CSS </IconStyle>
                <IconStyle style={{color: "black", backgroundColor:"#F7DF1E"}}><SiJavascript title="JavaScript" style={{ marginRight: "5px", fontSize: "1rem" }}/> JavaScript</IconStyle>
                </SkillIconsContainer>
            </SkillSection>
            <SkillSection>
                <h6 style={{textAlign:"center",fontSize:" 2rem",marginTop:"5px",marginBottom:"10px"}}>Backend</h6>
                <SkillIconsContainer>
                    <IconStyle style={{ color: "white", backgroundColor: "#007396"}}><DiJava title="java" style={{ marginRight: "5px", fontSize: "1rem" }}/>Java </IconStyle>
                    <IconStyle style={{ color: "white", backgroundColor: "#007396"}}><SiPython title="python" style={{ marginRight: "5px", fontSize: "1rem" }}/>Python </IconStyle>
                    <IconStyle style={{ color: "white", backgroundColor: "#007396"}}><SiMysql title="mysql" style={{ marginRight: "5px", fontSize: "1rem" }}/>MySQl</IconStyle>
                </SkillIconsContainer>
            </SkillSection>
            <SkillSection>
                <h6 style={{textAlign:"center",fontSize:" 2rem",marginTop:"5px",marginBottom:"10px"}}>Framework & Libraries</h6>
                <SkillIconsContainer>
                    <IconStyle style={{ color: "black", backgroundColor: "#61DAFB"}}><SiReact title="react" style={{ marginRight: "5px", fontSize: "1rem" }}/>React JS</IconStyle>
                    <IconStyle style={{ color: "white", backgroundColor: "#6DB33F"}}><SiSpringboot title="springboot" style={{ marginRight: "5px", fontSize: "1rem" }}/>Spring Boot</IconStyle>
                </SkillIconsContainer>
            </SkillSection>
        </SkillContainer>
    )
}