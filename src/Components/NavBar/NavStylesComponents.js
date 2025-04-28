import styled from 'styled-components';
import { FaBars } from "react-icons/fa";

/* NavBar */
export const NavBar = styled.div`
    display: flex;
    position: fixed; /* Change from absolute to fixed */
    top: 0;
    left: 0;
    justify-content: space-between;
    background-color: navy;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 0 20px;
    z-index: 9999; /* Ensures it stays above other elements */

    @media screen and (max-width: 768px) {
        height: 50px;
        padding: 0 10px;
    }
`;


/* NavBarContainer */
export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 5px 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

/* NavLink */
export const NavLink = styled.a`
    cursor: pointer;
    color: white;
    text-decoration: none;
    padding: 10px 15px;

    &:hover {
        color: aqua;
        border-radius: 5px;
        transition: 0.3s ease-in-out;
    }
`;

/* ContactButton */
export const ContactButton = styled.button`
    padding: 7px 14px;
    font-size: 1rem;
    border-radius: 20px;
    background-color: #FFA500;
    border: none;
    cursor: pointer;
    color: white;
    margin-right: 25px;
    &:hover {
        background-color: aqua;
        color: white;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

/* FaBar - Mobile Menu Button */
export const FaBar = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
        font-size: 22px;
        color: white;
    }
`;

/* Mobile Menu */
export const MobileMenu = styled.div`
    display: "flex";
    flex-direction: column;
    position: absolute;
    z-index: 200;
    top: 50px;
    right: 0;
    width: 100%;
    background: rgba(51, 51, 51, 0.9);
    padding: 10px;
    backdrop-filter: blur(5px);
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

/* MobileLink */
export const MobileLink = styled.a`
    display: block;
    text-decoration: none;
    padding: 10px;
    color: white;
    text-align: center;
    width: 100%;
    cursor: pointer;

    &:hover {
        color: aqua;
    }
`;

/* Profile Section */
export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin-top: 80px;

    @media screen and (max-width: 768px) {
        margin-top: 60px;
        padding: 10px;
    }
`;

/* Profile Image */
export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
        width: 120px;
        height: 120px;
    }
`;

/* Profile Text */
export const ProfileText = styled.p`
    font-size: 16px;
    color: black;
    max-width: 90%;
    margin: 10px 0;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

/* Resume Button */
export const ResumeButton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 10px;
    background-color: navy;
    border: none;
    cursor: pointer;
    color: white;

    &:hover {
        background-color: aqua;
        color: navy;
    }

    @media screen and (max-width: 768px) {
        padding: 8px 16px;
        font-size: 0.9rem;
    }
`;
