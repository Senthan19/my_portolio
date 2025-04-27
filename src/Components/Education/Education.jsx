import { EducationMainSection, EduContent, EduHeading, EduImg, EduSection, ImgWithEdu } from "./EducationStyleComponent";
import clg from "../../images/school-img/clg.jpeg";
import scl from "../../images/school-img/school.jpg";
export default function Education() {
    return(
        <EducationMainSection id="education">
            <EduHeading>Education</EduHeading>
            <EduContent>My education has been a journey of self-discovery and growth. My educational details are as follows.</EduContent>
            <EduSection>
                <ImgWithEdu>
                    <EduImg src={clg} alt="clg_img"/>
                    <div style={{marginLeft:"5px"}}>
                        <h5 style={{margin:0,fontSize:"1rem"}}>Nehru Institute of Engineering and Technology</h5>
                        <h6 style={{margin:0,fontSize:"1rem"}}>Bachelor of Engineering - BE, Computer Science and Engineering</h6>
                        <p style={{margin:0,fontSize:"1rem"}}>Dec 2020 – Jun 2024</p>
                    </div>
                    </ImgWithEdu>
                    <p style={{margin:0,fontSize:"1rem"}}><strong>Grade:</strong> 7.70 CGPA</p>
                    <p style={{margin:0,fontSize:"17px"}}> I have completed my Bachelor's degree in CSE from NIET, Coimbatore. During my studies, I gained expertise in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems and Computer Networks. I am passionate about software development, constantly building projects to refine my skills and stay updated with emerging technologies. 🚀</p>
                
            </EduSection>
            <EduSection>
                <ImgWithEdu>
                    <EduImg src={scl} alt="clg_img"/>
                    <div style={{marginLeft:"5px"}}>
                        <h5 style={{margin:0,fontSize:"1rem"}}>Parvatha Raja Gurukulam Higher Secondary School</h5>
                        <h6 style={{margin:0,fontSize:"1rem"}}>XII, Maths with Biology</h6>
                        <p style={{margin:0,fontSize:"1rem"}}>Jun 2019 - Mar 2020</p>
                    </div>
                    </ImgWithEdu>
                    <p style={{margin:0,fontSize:"1rem"}}><strong>Grade:</strong> 67%</p>
                    <p style={{margin:0,fontSize:"17px"}}>I completed my Higher Secondary Certificate (HSC) at Parvatha Raja Gurukulam Higher Secondary School, Kattumannarkoil, Tamilnadu, with 67% (June 2019 – March 2020).</p>
                
            </EduSection>
            <EduSection>
                <ImgWithEdu>
                    <EduImg src={scl} alt="clg_img"/>
                    <div style={{marginLeft:"5px"}}>
                        <h5 style={{margin:0,fontSize:"1rem"}}>Parvatha Raja Gurukulam Higher Secondary School</h5>
                        <h6 style={{margin:0,fontSize:"1rem"}}>X, General</h6>
                        <p style={{margin:0,fontSize:"1rem"}}>Jun 2017 - Mar 2018</p>
                    </div>
                    </ImgWithEdu>
                    <p style={{margin:0,fontSize:"1rem"}}><strong>Grade:</strong> 84.6%</p>
                    <p style={{margin:0,fontSize:"17px"}}>I completed my Secondary School Leaving Certificate (SSLC) at Parvatha Raja Gurukulam Higher Secondary School, Kattumannarkoil, Tamilnadu, with 84.6% (June 2017 – March 2018).</p>
                
            </EduSection>
        </EducationMainSection>
    )
}