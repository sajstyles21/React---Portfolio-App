import React, { useState, useEffect, useRef } from "react";
import validator from "validator";
import swal from "sweetalert";
import coverImage from "../images/cover_bg_1.jpg";
export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmit, setFormSubmitMessage] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  useEffect(() => {}, [formSubmit]);

  const saveFormData = (e) => {
    e.preventDefault();
    if (!name) {
      sweetAlertPopUp("Please enter name", nameRef, "error");
      return false;
    }
    if (!email) {
      sweetAlertPopUp("Please enter email", emailRef, "error");
      return false;
    } else {
      if (!validator.isEmail(email)) {
        sweetAlertPopUp("Please enter valid email", emailRef, "error");
        return false;
      }
    }
    if (!subject) {
      sweetAlertPopUp("Please enter subject", subjectRef, "error");
      return false;
    }
    if (!message) {
      sweetAlertPopUp("Please enter message", messageRef, "error");
      return false;
    } else {
      sweetAlertPopUp("Thank you for contacting us", "", "success");
    }
  };

  const sweetAlertPopUp = (message, refInput, iconValue) => {
    swal({
      title: "",
      text: message,
      icon: iconValue,
      dangerMode: iconValue === "error" ? true : false,
    }).then((response) => {
      if (response && iconValue === "error") {
        refInput.current.focus();
      }
      if (iconValue === "success") {
        setFormSubmitMessage(true);
        setName("");
        setEmail("");
        setSubject("");
        messageRef.current.value = "";
      }
    });
  };

  return (
    <div id="fh5co-consult">
      <div
        className="video fh5co-video"
        style={{ backgroundImage: "url(" + coverImage + ")" }}
      >
        <div className="overlay"></div>
      </div>
      <div className="choose animate-box">
        <h2>Contact Us</h2>
        <form onSubmit={saveFormData}>
          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="text"
                id="fname"
                value={name}
                ref={nameRef}
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
                placeholder="Your name"
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="text"
                id="email"
                ref={emailRef}
                value={email}
                autoComplete="off"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                placeholder="Your email address"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="text"
                id="subject"
                ref={subjectRef}
                value={subject}
                autoComplete="off"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="form-control"
                placeholder="Your subject"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                ref={messageRef}
                defaultValue={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="form-control"
                placeholder="Your message"
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
