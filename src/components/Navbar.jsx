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
                    { label: "Tractors", link: "/store?filter=tractor" },
                    { label: "Mowers", link: "/store?filter=mower" },
                    { label: "Excavators", link: "/store?filter=excavator" },
                ]}
            />
            <NavButton link="/cart" linkText="Cart 🛒" variant="cart" />
        </div>
    );
};

export default Navbar;