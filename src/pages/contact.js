import React from "react";
import Layout from "../components/layout";
import headStyle from "../styles/pageHead.module.css";
import contactImg from "../images/contact.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../styles/loader.css";
import "../styles/contact-page.css";

class ContactPage extends React.Component {
  componentDidMount() {
    document.getElementById("contact-form").addEventListener("submit", e => {
      document.getElementById("error_message").textContent = "";
      e.preventDefault();
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const errorMessageDiv = document.getElementById("error_message");
      const contactFormDiv = document.getElementById("contact-form");

      if (
        email.match(
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        )
      ) {
        if (message) {
          //hide the form, and show a loading image
          contactFormDiv.style.display = "none";
          document.getElementById("loader").classList.add("loader");

          //send the form data
          const form = new FormData(contactFormDiv);
          const encodedForm = new URLSearchParams(form);

          fetch("http://sultry-sloth.prod.with-datafire.io/contact", {
            method: "POST",
            body: encodedForm
          })
            .then(res => res.json())
            .then(res => {
              document.getElementById("loader").classList.remove("loader");
              console.log(res);
              if (res === "Thanks for getting in touch!") {
                document.getElementById(
                  "form-wrapper"
                ).innerHTML = `<h3>Your message has been sent. <br> Thanks for getting in touch.</h3>`;
              } else {
                contactFormDiv.style.display = "block";
                errorMessageDiv.textContent =
                  "There was an error sending your message, please try again, or email ktichmann@gmail.com";
              }
            });
        } else {
          errorMessageDiv.textContent =
            "Please enter something in the message box.";
        }
      } else {
        errorMessageDiv.textContent = "Please enter a valid email address.";
      }
    });
  }
  render() {
    return (
      <Layout>
        <div style={{ overflow: "hidden" }} className={headStyle.headAboveFold}>
          <div className={headStyle.overlay} />
          <img
            style={{ height: "auto", marginTop: "-300px" }}
            className={headStyle.headerImg}
            src={contactImg}
            alt="computer with code"
          />
          <div className={headStyle.headText}>
            <h1>Get in Touch</h1>
          </div>
        </div>
        <div id="form-wrapper">
          <span className="title">Send me a message:</span>
          <div id="error_message" />
          <div id="loader" />
          <form id="contact-form">
            <label htmlFor="emailAddress">Email</label>
            <TextField
              margin="normal"
              variant="outlined"
              id="email"
              name="emailAddress"
            />
            <label htmlFor="message">Message</label>
            <TextField
              multiline
              rows="6"
              margin="normal"
              variant="outlined"
              id="message"
              name="message"
            />
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </form>
        </div>

        <div className="links">
          <span className="title">Or Visit My:</span>
          <a target="_blank" href="https://github.com/ktichmann">
            Github
          </a>
          <a target="_blank" href="https://codepen.io/ktichmann/">
            CodePen
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/kerwin-tichmann">
            LinkedIn
          </a>
        </div>
      </Layout>
    );
  }
}

export default ContactPage;
