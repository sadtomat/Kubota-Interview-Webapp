import React from 'react';
import './Navbar.css';
import NavButton from './NavButton.jsx';
import DropdownButton from './DropdownButton.jsx';

const Navbar = () => {
    return (
        <div class="navbar">
            <NavButton link="/" linkText="Home" />
            <NavButton link="/contact" linkText="Contact us" />
            <DropdownButton
                label="Store"
                options={[
                    { label: "Edit", onClick: () => console.log("Edit clicked"), link: "/edit" },
                    { label: "Duplicate", onClick: () => console.log("Duplicate clicked"), link: "/duplicate" },
                    { label: "Delete", onClick: () => console.log("Delete clicked"), link: "/delete" },
                ]}
            />
            <NavButton link="/cart" linkText="Cart 🛒" variant="cart" />
        </div>
    );
};

export default Navbar;