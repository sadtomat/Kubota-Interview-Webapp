import { useNavigate } from "react-router-dom";
import './NavButton.css';

//link is name of link past base url, linkText is text on button, variant determines what part of css is used
export default function NavButton({link, linkText, variant = "primary"}) {   
    const navigate = useNavigate();

    const handleClick = () => {
        if (variant == "login"){
            window.location.href = link;
        }else {
            navigate(link);
        }
    }

    //if variant is not primary, add the variant class to the button, otherwise just use the button class
    const className = `button ${variant !== "primary" ? `button--${variant}` : ""}`.trim();

    return (
        <button type="button" onClick={handleClick} className={className}>
            {linkText}
        </button>
    );
}     