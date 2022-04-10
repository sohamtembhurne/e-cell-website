import './contact.css';
import { useState } from "react";


const Contact = () => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        subject: "",
        message: "",
    });
    
    
    
    let name, value;
    const postUserData = (event) => {
        console.log("data posted\n");
        name = event.target.name;
        value = event.target.value;
        
        setUserData({ ...userData, [name]: value })
    };
    
    const submitData = async (event) => {
        // if i keep this function, the form is not able to submit
        // but still after posting the data, page shows cannot post but data is submitted to the database
        // event.preventdefault();
        const { userName, email, subject, message } = userData;
        
        if (userName && email && subject && message) {
            const res = fetch(
                "https://contact-form-5db31-default-rtdb.firebaseio.com/users.json",
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userName, email, subject, message,
                    }),
                });
                
                if (res) {
                    setUserData({
                        userName: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                alert("Data stored, we will contact you soon");
            }
        } else {
            alert("Please fill the form completely");
        }
    };


    return (
        <div className="mainb">
            <br></br>
            <h1 style={{ color: "#001427" }} data-aos="fade-up">Get in <span style={{ color: "#FDCA40" }}>Touch</span></h1>
            <p
                style={{
                    color: "rgba(0, 20, 39, 0.75)",
                    marginTop: "-9px",
                    marginBottom: "10vh",
                }}
            >Leave a message to contact our team
            </p>
            <div className="form_con">
                <form method="post">
                    <div className="col-1" style={{ display: "inline-block" }}>
                        <fieldset>
                            <input
                                name="userName"
                                type="text"
                                className="input_con"
                                placeholder="Name"
                                value={userData.userName}
                                onChange={postUserData}
                            ></input>
                            <input
                                name="email"
                                type="text"
                                className="input_con"
                                placeholder="Email"
                                value={userData.email}
                                onChange={postUserData}
                            ></input>
                            <input
                                name="subject"
                                type="text"
                                className="input_con"
                                placeholder="Subject"
                                value={userData.subject}
                                onChange={postUserData}
                            ></input>
                        </fieldset>
                    </div>
                    <div className="col-2" style={{ display: "inline-block" }}>
                        <fieldset>
                            <textarea
                                name="message"
                                cols="40"
                                className="textarea_con"
                                placeholder="Message"
                                value={userData.message}
                                onChange={postUserData}
                            ></textarea>
                        </fieldset>
                    </div>
                    <button type="submit" onClick={submitData} >Send Message</button>
                </form>
            </div>
            <br></br>
        </div>
    );
}

export default Contact;