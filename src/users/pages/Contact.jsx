import React, { useState } from "react";
import Nav from "../components/Nav";

import map from "/public/users/pages/map.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contacts = [
    {
      map: map,
      title: "Contact",
    },
  ];
  return (
    <main className="contact-container">
      <Nav />

      <article className="content-container">
        {contacts.map((contact, idx) => (
          <form className="content-box" key={idx}>
            <section className="text-container">
              <h1 className="main_title">{contact.title}s</h1>
              <h1 className="sub_title">
                Home <span> &gt; {contact.title}</span>
              </h1>
              <hr />
            </section>

            <div className="input-box">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="your name"
                className="form-control mb-3 py-2"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="form-control mb-3 py-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-box">
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="message"
                className="form-control mb-3 py-2"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button>Send Message</button>
          </form>
        ))}
      </article>
    </main>
  );
};

export default Contact;
