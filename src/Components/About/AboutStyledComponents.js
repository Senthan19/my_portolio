import styled from "styled-components";
export const AboutSection = styled.div`
    display: flex;
    width: 100%;
    left: 0;
    right: 0;
    margin-top: 50px;
    height: 100vh;
    align-items: center;
    justify-content: space-around;
    
    @media (max-width: 480px) {
        height: auto;
        flex-direction: column-reverse;
        margin-top: 10px;
    }
`;



export const AboutContent = styled.div`
    display:flex;
    flex-direction:column;
`;
export const NameHeading = styled.h4`
    font-size: 40px;
    magin-bottom:0;

    @media(max-width: 480px) {
        font-size: 20px;
        text-align: center;
    }
`;

export const SelfContent = styled.p`
    width: 500px;
    font-size: 30px;

    @media(max-width: 480px) {
        width: 300px;
        line-gap:2;
        font-size: 17px;
        text-align: justify;
        
    }
`;

export const ResumeLink = styled.a`
background-color:navy;
border-radius:5px;
padding:20px 20px;
width:200px;
text-align:center;
text-decoration:none;
color:white;
font-size: 30px;

@media(max-width:480px) {
    margin-left: 30px;
    padding: 2px 2px;
    align-items: center;
}
`;

export const ProfileIamge = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    @media(max-width: 480px) {
        margin-top: 50px;
        width: 100%;
        max-width: 90px;
        height: 90px;
        margin-bottom: auto;
    }
`;
