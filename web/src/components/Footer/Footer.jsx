import React from "react";
import "./Footer.css"
import About from "../About/About"

const Footer = () => {
    return (

        <div className="Footer">
            <div className="FooterItem"><a target="_blank" rel="noreferrer" href="https://www.sevebarrameda.com/">My Website</a></div>
            <div className="FooterItem"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sevebarrameda">LinkedIn</a></div>
            <div className="FooterItem"><About /></div>
            <div className="FooterItem"><a target="_blank" rel="noreferrer" href="https://www.github.com/sevebarr">Github</a></div>
        </div>
    )
}
export default Footer