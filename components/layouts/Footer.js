import React from 'react';

const Footer = () => {
    return (
        <footer className="py-1">
            <p className="text-center mt-1">
                Booking Buddy - {new Date().getFullYear()}, All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;