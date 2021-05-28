import emailLogo from '../Image/email.png'

export default function Contact () {

    const sendMail = () => {
        const mailto = "mailto:sunnil474@gmail.com?subject=Hello, Sunil&body=How can I help you?";
        window.open(mailto, "_blank")
    }

    return (
        <div id="Contact" className="contacts">
        <div className="text-center">
        <h1>Contact Me</h1>
        <div className="text-center d-flex align-items-center justify-content-center contact_main_container" id="contact" >
        <button onClick={sendMail} id="contact_btn"><h1 className="lets_talk">Hello , Lets have a conversation</h1></button>
        <a href="mailto:sunnil474@gmail.com.com?subject=Hello, Sunil&body=How can I help you?" target="_blank" rel="noreferrer"><img id="email_logo" src={emailLogo} alt="email_logo"/></a>
        </div>
        </div>
        </div>
    )
}