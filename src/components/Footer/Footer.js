import React, { useState } from "react";
import "./style.css";
import emailjs from "emailjs-com";

// import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");

    const sendData = () => {
        // e.preventDefault();
        // console.log(name);
        // console.log(email);
        // console.log(phone);
        // console.log(subject);
        // console.log(text);
        let mail = {
            Name: name,
            Email: email,
            Phone: phone,
            Subject: subject,
            Text: text
        }
        
        emailjs.sendForm("service_34856gt", "template_6oej2fw", mail, "user_XiAqAO8SE5exdjP8TwO0u")
        .then((result) => {
            console.log(result)
            console.log(name)
        }, (err) => {
            console.log(err.text)
        })
    }

    return (
        <div id="footer">
            <div id="contact">
                <h2 id="contactTitle">GET IN TOUCH</h2>
                <p className="contactItem">Email: <a href="mailto:josejimenez826@gmail.com">josejimenez826@gmail.com</a></p>
                <p className="contactItem">Phone: 1-(760)-221-2790</p>
                <div id="contactIcons">
                    <a href="https://github.com/JoseJ55"><AiFillGithub className="icon" size={28}  color="white"/></a>
                    <a href="https://www.linkedin.com/in/jose-jimenez-238453169"><AiFillLinkedin className="icon" size={28} color="white"/></a>
                </div>
            </div>

            <div id="email">
                <input 
                    id="emailName" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Name" 
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    id="emailEmail" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    id="emailPhone" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Phone" 
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input 
                    id="emailSub" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Subject" 
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea 
                    id="emailMessage" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Type you message here..." 
                    rows="7" 
                    onChange={(e) => setText(e.target.value)}
                />
                
                <input id="emailBtn" type="button" value="Submit" onClick={() => sendData()}/>
            </div>
        </div>
    )
}

export default Footer;