import React from "react";

const footerStyle = {
    margin: 'auto',
}

const Footer = () => {
    return (
        <div className="bg-secondary text-center" style={footerStyle}>
            <p>Copyright <span>&copy;</span> Your Website 2019</p>
        </div>
    );
};

export default Footer;