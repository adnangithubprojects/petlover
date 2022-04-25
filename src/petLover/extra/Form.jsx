import React from "react";
import { useState } from "react";
import Button from "./Button";
import "../Components/Components.css";

export default function Form() {
  return (
    <>
      <div className="bg-[#272728] flex flex-col pt-20 pb-8  justify-center items-center space-y-8">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="md:text-6xl sm:text-4xl text-yellow-600">
            Get in Touch
          </h1>
          <p className="text-white md:text-lg sm:text-sm">
            Let us know how we can help and set up a time to chat with us!
          </p>
        </div>
        <div>
          <Form1 />
        </div>
      </div>
    </>
  );
}

function Form1() {
  const [Number, setNumber] = useState();
  const [Email, setEmail] = useState();
  const [Message, setMessage] = useState();
  const [User, setUser] = useState([]);

  const [Focus, setFocus] = useState(false);

  function HandleForm(e) {
    e.preventDefault();
    setUser([{ Number, Email, Message }, ...User]);
    setNumber("");
    setEmail("");
    setMessage("");
  }
  const handleOver = () => {
    console.log("over");
  };
  return (
    <>
      <p>
        {User.map((it) => {
          return <p>{it.Number}</p>;
        })}
      </p>
      <div className="flex flex-col items-center justify-center bg-[#1f1f21] rounded-xl text-white w-[350px] h-[600px]">
        <div className="text-4xl mb-6">Let's Talk</div>
        <form className="flex flex-col items-center   text-xl space-y-4">
          <div
            onClick={(e) => setFocus(!Focus)}
            className="formInp  focus:border-4 focus:border-white flex flex-col text-black space-y-4 relative"
          >
            <label className={!Focus ? "godown" : "gotop"}>Number</label>
            <input
              type="Number"
              className=" border-2  w-[300px] h-[60px] rounded"
              value={Number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label>Email</label>
            <input
              type="email"
              placeholder=" abc@gmail.com"
              className="border-2 border-gray-300 text-black w-[300px] h-[60px] rounded shadow-sm focus:outline-none focus:border-indigo-500"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label>Message</label>
            <textarea
              rows="4"
              cols="20"
              placeholder="Hey"
              className="border-2 text-black w-[300px] h-[150px]  rounded"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button width="large" btnName="Submit" fun={HandleForm} />
        </form>
      </div>

      {/* <ClickOn /> */}
    </>
  );
}

// function ClickOn() {
//   const [Color, setColor] = useState(false);
//   return (
//     <>
//       <div>
//         <button className={!Color ? "bg-slate-600" : "bg-white"}>
//           click me
//         </button>
//       </div>
//     </>
//   );
// }

//   const [Name, setName] = useState();
//   const [Email, setEmail] = useState();
//   const [User, setUser] = useState([]);
//   function HandleForm(e) {
//     e.preventDefault();
//     setUser([Name, Email, ...User]);
//     setName("");
//     setEmail("");
//   }
//   return (
//     <>
//       <div>
//         <p>
//           {User.map((it) => {
//             return <p>{it} </p>;
//           })}
//         </p>

//         <form>
//           <input
//             type="text"
//             placeholder="Enter name"
//             value={Name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="Email"
//             placeholder="Enter Email"
//             value={Email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <botton onClick={HandleForm}>Submit</botton>
//         </form>
//   </div>
