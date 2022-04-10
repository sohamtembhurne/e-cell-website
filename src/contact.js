import './contact.css';
import React, { useState } from "react";


const Contact = () => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        subject: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { userName, email, subject, message } = userData;

        if (userName && email && subject && message) {
            const res = fetch(
                "https://contact-form-5db31-default-rtdb.firebaseio.com/users.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userName,
                        email,
                        subject,
                        message,
                    }),
                }
            );

            if (res) {
                setUserData({
                    userName: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                alert("Data Stored");
            } else {
                alert("plz fill the data");
            }
        } else {
            alert("plz fill the data");
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
                <form method="POST" onSubmit={submitData}>
                    <div className="col-1" style={{ display: "inline-block" }}>
                        <fieldset>
                            <input
                                name="userName"
                                type="text"
                                className="input_con"
                                placeholder="Name"
                                value={userData.userName}
                                onChange={postUserData}
                                required
                            ></input>
                            <input
                                name="email"
                                type="email"
                                className="input_con"
                                placeholder="Email"
                                value={userData.email}
                                onChange={postUserData}
                                required
                            ></input>
                            <input
                                name="subject"
                                type="text"
                                className="input_con"
                                placeholder="Subject"
                                value={userData.subject}
                                onChange={postUserData}
                                required
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
                                required
                            ></textarea>
                        </fieldset>
                    </div>
                    <button type="submit" >Send Message</button>
                </form>
            </div>
            <br></br>
        </div>
    );
};

export default Contact;