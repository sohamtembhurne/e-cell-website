import './contact.css';

function Contact() {
    return (
        <div className="mainb">
            <br></br>
            <h1 style={{ color: "#001427" }} data-aos="fade-up">Get in <span style={{ color: "#FDCA40" }}>Touch</span></h1>
            <p
                style={{
                    color: "rgba(0, 20, 39, 0.75)",
                    marginTop: "-9px",
                    marginBottom: "10vh",
                }} data-aos="fade-up"
            >Leave a message to contact our team
            </p>
            <div className="form_con">
                <form>
                    <div className="col-1" style={{ display: "inline-block" }}>
                        <fieldset>
                            <input
                                className="input_con"
                                placeholder="Name"
                            ></input>
                            <input
                                className="input_con"
                                placeholder="Email"
                            ></input>
                            <input
                                className="input_con"
                                placeholder="Subject"
                            ></input>
                        </fieldset>
                    </div>
                    <div className="col-2" style={{ display: "inline-block" }}>
                        <fieldset>
                            <textarea
                                cols="40"
                                className="textarea_con"
                                placeholder="Message"
                            ></textarea>
                        </fieldset>
                    </div>
                </form>
                <button>Send Message</button>
            </div>
            <br></br>
        </div>
    );
}

export default Contact;