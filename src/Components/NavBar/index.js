import { useState } from "react";
import { NavBar, NavBarContainer, NavLink, FaBar, MobileMenu, MobileLink, ContactButton } from "./NavStylesComponents";

export default function Index() {
    const [isOpen, setOpen] = useState(false);

    return (
        <NavBar>
            <NavBarContainer>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#education">Education</NavLink>
            </NavBarContainer>

            <ContactButton>
                <a href="mailto:senthanganesh5885@gmail.com" style={{ color: "white", textDecoration: "none", }}>
                    Contact Me
                </a>
            </ContactButton>

            <FaBar onClick={() => setOpen(!isOpen)} />

            <MobileMenu isOpen={isOpen}>
                <MobileLink href="#about" onClick={() => setOpen(false)}>About</MobileLink>
                <MobileLink href="#skills" onClick={() => setOpen(false)}>Skills</MobileLink>
                <MobileLink href="#experience" onClick={() => setOpen(false)}>Experience</MobileLink>
                <MobileLink href="#projects" onClick={() => setOpen(false)}>Projects</MobileLink>
                <MobileLink href="#education" onClick={() => setOpen(false)}>Education</MobileLink>
                <MobileLink href="mailto:senthanganesh5885@gmail.com" style={{ backgroundColor: "navy", color: "white", borderRadius: "10px",padding:"5px",textAlign:"center" }} onClick={() => setOpen(false)}>Contact Me</MobileLink>
            </MobileMenu>
        </NavBar>
    );
}
