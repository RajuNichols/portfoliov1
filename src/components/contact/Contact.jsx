import "./contact.css"
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"
import {useRef} from "react"
import emailjs from 'emailjs-com';
import {useState} from "react"

const Contact = () => {
    const formRef = useRef();
    const [done,setDone] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_6m931l5', 'template_577mhcq', formRef.current, 'user_7FKxRbVjhO5dMLDii7HBW')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className = "c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="phone img" className="c-icon"/>
                            +1 816-588-9398
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="email icon" className="c-icon" />
                            nichols.raju@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="address icon" className="c-icon" />
                            8754 E 83rd St, Raytown Missouri
                        </div>
                    </div>

                </div>
                <div className="c-right">
                    <p className = "c-desc">
                        <b>Lets Talk!</b> Feel free to contact me anytime or anywhere.
                    </p>
                    <form ref = {formRef} onSubmit={handleSubmit}>
                        <input type = "text" placeholder= "Name" name = "user_name"/>
                        <input type = "text" placeholder= "Subject" name = "user_subject"/>
                        <input type = "text" placeholder= "Email" name = "user_email"/>
                        <textarea rows ="5" placeholder = "Message" name = "message"/>
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
