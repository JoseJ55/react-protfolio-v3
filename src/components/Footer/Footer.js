import React, { useState } from "react";
import "./style.css";
import emailjs from "emailjs-com";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Notice from "./../Notice/Notice";

require('dotenv').config();

function Footer(){
    const [notice, setNotice] = useState(false);
    const [noticeText, setNoticeText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    const [inputError, setInputError] = useState({
        name: {},
        email: {},
        phone: {},
        subject: {},
        text: {}
    })

    const sendData = () => {
        let mail = {
            from_name: name,
            from_email: email,
            from_phone: phone,
            subject: subject,
            message: text
        }

        emailjs.send(
            "service_34856gt", 
            "template_6oej2fw", 
            mail, 
            "user_XiAqAO8SE5exdjP8TwO0u"
        )
        .then((result) => {
            // console.log(result)
            setNotice(true);
            setNoticeText("success")
        }).catch((err) => {
            // console.log(err.text)
            setNotice(true);
            setNoticeText("error");
        })
    }

    // Need to finish added error secitons for empty or wrong inputs.
    const verify = () => {
        if (name === "" || email === "" || phone === "" || subject === "" || text === ""){
            if(name === ""){
                setInputError({...inputError, name:{borderColor: "red"}})
            }
            if(email === ""){
                setInputError({...inputError, email:{borderColor: "red"}})
            }
            if(phone === ""){
                setInputError({...inputError, phone:{borderColor: "red"}})
            }
            if(subject === ""){
                setInputError({...inputError, subject:{borderColor: "red"}})
            }
            if(text === ""){
                setInputError({...inputError, text:{borderColor: "red"}})
            }
        }
    }

    return (
        <div id="footer">
            <div id="contact">
                <h2 id="contactTitle">GET IN TOUCH</h2>
                <p className="contactItem">Email: <a href="mailto:josejimenez826@gmail.com">josejimenez826@gmail.com</a></p>
                <p className="contactItem">Phone: 1-(760)-221-2790</p>
                <div id="contactIcons">
                    <a href="https://github.com/JoseJ55"><AiFillGithub className="icon" size={28}  color="#f3bd3c"/></a>
                    <a href="https://www.linkedin.com/in/jose-jimenez-238453169"><AiFillLinkedin className="icon" size={28} color="#f3bd3c"/></a>
                </div>
            </div>

            <div id="email">
                <input 
                    id="emailName" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Name" 
                    style={inputError.name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    id="emailEmail" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Email" 
                    style={inputError.email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    id="emailPhone" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Phone" 
                    style={inputError.phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input 
                    id="emailSub" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Subject" 
                    style={inputError.subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea 
                    id="emailMessage" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Type you message here..." 
                    rows="7" 
                    style={inputError.text}
                    onChange={(e) => setText(e.target.value)}
                />
                
                <input id="emailBtn" type="button" value="Submit" onClick={() => sendData()}/>
            </div>
            {notice ? <Notice notice={notice} setNotice={setNotice} noticeText={noticeText}/> : <div></div>}
        </div>
    )
}

export default Footer;