import { useState, useEffect, useCallback, useMemo } from "react";

export default function TypingEffect() {
    const roles = useMemo(()=>["Full Stack Developer", "Software Engineer", "Programmer"],[]);
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [styles, setStyles] = useState({}); // Initially empty styles

    useEffect(() => {
        function getStyles() {
            const isMobile = window.innerWidth <= 480;
            return {
                container: {
                    fontSize: isMobile ? "24px" : "40px",
                    marginLeft: isMobile? "10px" : null
                },
                cursor: {
                    display: "inline-block",
                    width: "5px",
                    height: isMobile ? "20px" : "35px",
                    backgroundColor: "navy",
                    animation: "blink 0.8s infinite",
                },
                text: {
                    color: "navy",
                },
            };
        }

        setStyles(getStyles()); // ✅ Update styles on mount

        const handleResize = () => setStyles(getStyles());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const typeEffect = useCallback(() => {
        const currentText = roles[index];

        if (!isDeleting) {
            setText(currentText.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
        } else {
            setText(currentText.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => setIsDeleting(true), 1000); // 1 sec hold
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setText("");
            setIndex((index + 1) % roles.length);
        }
    }, [charIndex, isDeleting, index, roles]);

    useEffect(() => {
        const timeout = setTimeout(typeEffect, isDeleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, typeEffect]); // ✅ Added 'typeEffect' to dependencies

    return (
        <div style={styles.container}>
            I am a <span style={styles.text}>{text}</span>
            <span style={styles.cursor}></span>
        </div>
    );
}
