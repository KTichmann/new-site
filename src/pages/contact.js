import React from "react";
import Layout from "../components/layout";
import headStyle from "../styles/pageHead.module.css";
import contactImg from "../images/contact.jpg";

const ContactPage = () => {
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contact-form").addEventListener("submit", e => {
      document.getElementById("error_message").textContent = "";
      e.preventDefault();
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      console.log(email);
      if (
        email.match(
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        )
      ) {
        if (message) {
          document.getElementById("contact-form").submit();
        } else {
          document.getElementById("error_message").textContent =
            "Please enter something in the message box.";
        }
      } else {
        document.getElementById("error_message").textContent =
          "Please enter a valid email address.";
      }
    });
  });
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
      <div>
        <div id="error_message" />
        <form
          id="contact-form"
          action="http://sultry-sloth.prod.with-datafire.io/contact"
          method="post"
        >
          <input id="email" type="text" name="emailAddress" />
          <textarea id="message" name="message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
