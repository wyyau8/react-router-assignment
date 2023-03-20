import "../assets/css/Contact.css";

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">Contact Me</h1>
          <p className="subTitle contact-subtitle">
            Just want to say hi? My Inbox is open for all.
          </p>
          <div className="contact-text-div">
            {/* Phone Number */}
            <a className="contact-detail" href={"tel:" + "(647) 838-5407"}>
              {"(647) 999-1234"}
            </a>
            <br />
            {/* Email */}
            <a className="contact-detail-email"
              href={"mailto:" + "wing.wyyau@gmail.com"}>
              {"wing.wyyau@gmail.com"}
            </a>
            <br />
            <br />
          </div>
        </div>
        <div className="contact-image-div">
          <img src={require("../assets/images/email.png")}></img>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
