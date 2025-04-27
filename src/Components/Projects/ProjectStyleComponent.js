import styled from "styled-components";

export const ProjectMainSection = styled.div`
        display: flex;
        width: 100%;
        height: 100 vh;
        flex-direction: column;
        align-items: center;

        @media(max-width: 480px) {
            height: auto;
        }
`;

export const ProjectHeading = styled.h4`
    font-size: 40px;
    margin-bottom:0;

    @media(max-width: 480px) {
        font-size: 30px;
        text-align: center;
    }
`;

export const ProjectContent = styled.p`
    font-size: 30px;
    margin-bottom: 50px;

    @media(max-width: 480px) {
         width: 350px;
        line-gap:2;
        font-size: 20px;
        text-align: justify;
        margin-bottom: 15px;
    }
`;

export const ProjectSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px 50px;
    overflow: auto;
    @media(max-width: 480px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
`;

export const Projects = styled.div`
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 400px;
        overflow: hidden;
        border: 1px solid aqua;
        border-radius: 5px;
        box-shadow: 1px 1px 5px navy;
         &:hover {
            cursor: pointer;
             transform: scale(1.03);
        }
        @media(max-width: 480px) {
            width: 100%;
            max-width: 290px;
            height: 290px;
        }
`;

export const ProjectImg = styled.img`
    width: 100%;
    height: 300px;

    @media(max-width: 480px) {
         width: 100%;
         max-width: 290px;
         height: 130px;
    }
`
export const PopupOverlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto; /* Enable vertical scrolling */

  @media (max-width: 480px) {
    width: 100%;
    max-width: 360px;
    height: auto;
    margin-top: 200px;
    margin-left: 40px;
  }
`;


export const PopupContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  width: 500px;
  position: relative;

  @media (max-width: 480px) {
    width: 90%;
    max-width: 320px;
    max-height: 80vh; /* Prevent popup from exceeding screen height */
    overflow-y: auto; /* Enable scrolling inside the popup */
    padding: 15px;
  }
`;



export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: black;

  &:hover {
    color: red;
  }
`;

export const PopupImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px;
`;

export const PopupTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  text-align: center;
`;

export const PopupText = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 5px 0;
`;

export const PopupTech = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;

export const TechBadge = styled.span`
  background-color: aqua;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: black;
`;
export const ViewLink = styled.a`
    display: inline-block; /* Ensures proper spacing */
    margin-top: 10px;
    padding: 10px 15px; /* Adds some padding for better appearance */
    width: 90%;
    text-align: center;
    text-decoration: none;
    color: white;
    background-color: black;
    border-radius: 5px; /* Rounded corners */
    font-size: 1rem;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: navy;
        color: darkgray;
    }
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 8px 12px;
    }
`;
