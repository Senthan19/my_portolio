import styled from "styled-components";

export const ExperienceMainSection = styled.div`
        display: flex;
        width: 100%;
        height: 100 vh;
        flex-direction: column;
        align-items: center;

        @media(max-width: 480px) {
            height: auto;
        }
`;

export const ExperienceHeading = styled.h4`
    font-size: 40px;
    margin-bottom:0;

    @media(max-width: 480px) {
        font-size: 30px;
        text-align: center;
    }
`;

export const ExperienceContent = styled.p`
    font-size: 30px;
    margin-bottom: 50px;

    @media(max-width: 480px) {
         width: auto;
        line-gap:2;
        font-size: 1.5rem;
        text-align: justify;
        margin-bottom: 20px;
    }
`;

export const ExperienceSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px 50px;

    @media(max-width: 480px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
`;

export const Experiences = styled.div`
        display: flex;
        flex-direction: column;
        width: 400px;
        height: auto;
        padding: 5px;
        border: 1px solid aqua;
        border-radius: 5px;
        box-shadow: 1px 1px 5px navy;

            &:hover {
            cursor: pointer;
             transform: scale(1.03);
        }
        @media(max-width: 480px) {
            width: 95%;
        }
`;

export const ExpImg = styled.img`
        width: 50px;
        height: 50px;

         @media(max-width: 480px) {
            width: 40px;
             height: 60px;
        }

`;

