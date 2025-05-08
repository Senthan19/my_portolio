import styled from 'styled-components';
export const EducationMainSection = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;

    @media (max-width: 480px) {
        min-height: auto;
        margin: 0;
    }
`;

export const EduHeading = styled.h4`
    font-size: 40px;
    margin-bottom: 0;

    @media (max-width: 768px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 30px;
        text-align: center;
    }
`;

export const EduContent = styled.p`
    font-size: 30px;
    margin-bottom: 50px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        width: auto;
        line-gap:2;
        font-size: 20px;
        text-align: justify;
        margin-bottom: 15px;
    }
`;

export const EduSection = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid aqua;
    border-radius: 5px;
    box-shadow: 1px 1px 5px navy;
    max-width: 900px;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px; /* Added for spacing */
    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }

    @media (max-width: 768px) {
        width: 95%;
    }

    @media (max-width: 480px) {
        width: 95%;
        height: auto;

    }
`;

export const ImgWithEdu = styled.div`
    display: flex;
    gap: 10px;
`;

export const EduImg = styled.img`
    width: 60px;
    height: 60px;

    @media (max-width: 480px) {
        width: 50px;
        height: 70px;
    }
`;
