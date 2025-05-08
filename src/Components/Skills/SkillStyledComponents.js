import styled from "styled-components";

export const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;

    @media(max-width: 480px) {
        height: auto;
    }
`;

export const SkillSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: auto;
    border: 1px solid aqua;
    border-radius: 5px; 
    align-items: center;
    padding: 25px 50px;
    margin-bottom: 20px;
     box-shadow: 1px 1px 5px navy;
    @media(max-width: 480px) {
        width: 100%;
        padding: 2px 5px;
        height: auto;
    }
     &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`;

export const SkillHeading = styled.h4`
    font-size: 40px;
    margin-bottom:0;

    @media(max-width: 480px) {
        font-size: 30px;
        text-align: center;
    }
`;

export const SkillContent = styled.p`
    font-size: 30px;
    margin-bottom: 50px;

    @media(max-width: 480px) {
        width: auto;
        line-gap:2;
        font-size: 1.5rem;
        text-align: justify;
        margin-bottom: 15px;
    }
`;

export const IconStyle = styled.span`
    display: inline-flex; 
    align-items: center;
     padding: 10px 20px;
     border-radius: 5px;
     width: auto;
     box-shadow: 2px 2px 15px black;
     @media(max-width: 480px) {
        padding: 5px 10px;
        width: 100px;
     }
`;

export const SkillIconsContainer = styled.div`
    display: flex; 
    gap: 10px;
    
    @media(max-width: 480px) {
        flex-direction: column;
        margin-bottom: 10px;
    }
` ;