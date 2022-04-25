import React, { useState } from "react";
import "../style/Contact.css";

export default function Contact() {
  const [user, setuser] = useState([]);
  const [Note, setNote] = useState({
    number: "",
    email: "",
    subject: "",
    message: "",
  });

  function InputEvent(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  function HandleForm() {
    setuser((prevDataa) => {
      return [...prevDataa, Note];
    });
    setNote("");
  }
  return (
    <>
      <div className="Contact__Container ">
        <h2 className="text-green-600 text-lg sm:text-2xl font-bold">
          Contact Us
        </h2>
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-black font-bold">
          Contact for <span className="text-orange-700">Any Query</span>
        </h1>

        <p>
          {user.map((it) => {
            return (
              <>
                <p>{it.number}</p>
                <p>{it.message}</p>
              </>
            );
          })}
        </p>
        <div className="Contact__Form__Container ">
          <form>
            <input
              type="text"
              placeholder="name"
              name="number"
              value={Note.number}
              onChange={InputEvent}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={Note.email}
              onChange={InputEvent}
            />
            <input
              type="subject"
              placeholder="Subject"
              name="subject"
              value={Note.subject}
              onChange={InputEvent}
            />
            <textarea
              type="message"
              placeholder="Message"
              name="message"
              value={Note.message}
              onChange={InputEvent}
            ></textarea>
            <button
              onClick={HandleForm}
              className="w-[200px] rounded-md p-3 bg-orange-500 hover:bg-orange-700 hover:text-gray-300 font-bold text-lg"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
