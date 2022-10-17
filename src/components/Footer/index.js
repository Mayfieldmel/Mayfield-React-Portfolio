import React from "react";
import github from "../../assets/images/GitHub-Mark-32px.png";
import linkedin from "../../assets/images/linkedin-icon.png";
import email from "../../assets/images/email-icon.png";

function Footer() {
    return (
        <footer>
            <a href="https://github.com/Mayfieldmel" target="_blank"><img className="footer-icon" src={`${github}`} alt="github icon"></img></a>
            <a href="https://www.linkedin.com/in/mjmayfield95?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzgHzYicsSjS3MdvMymc4iQ%3D%3D" target="_blank"><img className="footer-icon" src={`${linkedin}`} alt="linkedin icon"></img></a>
            <a href="mailto://mayfieldmel@gmail.com"><img className="footer-icon" src={`${email}`} alt="email icon"></img></a>
        </footer>
    )
}

export default Footer;