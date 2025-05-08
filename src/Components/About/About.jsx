import { AboutContent, AboutSection, NameHeading,ProfileIamge,ResumeLink,SelfContent } from "./AboutStyledComponents";
import myImage from "../../images/my.jpg";
import TypingEffect from "./TypingEffect";
export default function About() {
    return(
        <AboutSection id="about">
            <AboutContent>
                <NameHeading style={{marginBottom:"20px"}}>Hi I am Senthan S</NameHeading>
                <TypingEffect/>
                <SelfContent style={{marginTop:"20px", marginBottom:"20px"}}>I am a passionate Software Developer with a strong foundation in Java, Spring Boot, and Full-Stack Development. I love solving problems, building scalable applications, and continuously expanding my technical expertise. With a keen interest in backend development, microservices, and cloud technologies, I aim to create impactful and efficient solutions.</SelfContent>
                <ResumeLink href="https://drive.google.com/file/d/1odhmzGIQFRXk-VTa5Y9xN2JNdADy0Vuj/view?usp=drive_link" target="_blank">Check Resume</ResumeLink>
            </AboutContent>
            <ProfileIamge src={myImage} alt="my img"/>
        </AboutSection>
    )
}