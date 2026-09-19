import { useState, useRef, useEffect } from "react";
import "./DropdownButton.css";
import NavButton from "./NavButton.jsx";

export default function DropdownButton({ label, options }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const toggleOpen = () => setIsOpen((prev) => !prev);

    // Close the menu if the user clicks outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="dropdown-container" ref={containerRef}>
            <button type="button" className="button" onClick={toggleOpen}>
                {isOpen ? "Store ▼" : "Store"}
            </button>

            {isOpen && (
                <div className="dropdown-menu-horizontal">
                    {options.map((option) => (
                        <NavButton link={option.link} linkText={option.label} />
                    ))}
                </div>
            )}
        </div>
    );
}