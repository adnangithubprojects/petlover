import React, { useState } from "react";
import { FaUser, FaFolder, FaSearch } from "react-icons/fa";
import img1 from "../asset/images/carousel-1.jpg";
import blog1 from "../asset/images/blog-1.jpg";
import blog2 from "../asset/images/blog-2.jpg";
import blog3 from "../asset/images/blog-3.jpg";
import Comment, { Comment1 } from "../component/Comment";
import "../style/blog.css";
import { BlogData3, blogp1, blogp2, blogp3 } from "../asset/data/config";
export default function BlogDetails() {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Website, setWebsite] = useState();
  const [Message, setMessage] = useState();
  const [Data, setData] = useState([]);

  function HandleForm(e) {
    e.preventDefault();
    setData([{ Name, Email, Website, Message }, ...Data]);
    setName("");
    setEmail("");
    setWebsite("");
    setMessage("");
  }

  return (
    <>
      <div className="BlogDetail">
        <div className="BlogDetail__left">
          <div className="flex flex-col md:px-0 pl-2 md:w-[700px] gap-5 pt-6">
            <h2 className="text-green-600 text-xl lg:text-2xl">Blog Detail</h2>
            <h1 className="text-2xl md:text-3xl font-bold lg:text-4xl">
              Lorem ipsum dolor sit amet
            </h1>
            <p className=" flex text-sm gap-4 ">
              <span>
                <FaUser /> admin
              </span>
              <span>
                <FaFolder />
                Web Design
              </span>
              <span>
                <FaFolder />
                12
              </span>
            </p>
            <div>
              <img
                src={img1}
                alt="upload pic"
                className="lg:w-[700px] md:h-[450px] w-full"
              />
            </div>
            <p className=" text-xs text-justify lg:text-base">{blogp1}</p>
            <p className=" text-xs text-justify lg:text-base">{blogp2}</p>
          </div>
          <div className="flex flex-col px-3 md:px-0 md:w-[700px] gap-5 pt-6">
            <h1 className="text-2xl lg:text-3xl font-bold">
              Est dolor lorem et ea
            </h1>
            <div className="">
              <img
                src={blog1}
                alt="upload pic"
                className="w-[230px] h-[180px]  md:w-[345px] md:h-[230px] float-left pr-4 pb-2"
              />

              <p className=" text-xs lg:text-base text-left">{blogp3}</p>
            </div>
          </div>
          <div className="flex flex-col px-3 md:px-0 md:w-[700px] gap-5 pt-6">
            <h1 className="text-2xl lg:text-3xl font-bold">
              Est dolor lorem et ea
            </h1>
            <div className="">
              <img
                src={blog2}
                alt="upload pic"
                className="w-[230px] h-[180px]  md:w-[345px] md:h-[230px] float-right pl-4 pb-2"
              />

              <p className=" text-xs lg:text-base text-left">{blogp3}</p>
            </div>
          </div>

          <div className="mt-4 mx-2 md:mt-8">
            <Comment />

            <h1 className="text-2xl font-bold mt-6 ">3 Comments</h1>
            <div>
              <Comment1 size="medium" />
              <Comment1 size="medium" />
            </div>
            <div className="pl-12 md:pl-12 w-full sm:w-[550px] md:w-full ">
              <Comment1 size="small" />
            </div>
          </div>
          <div>
            <div className="Blog__Form__Container">
              <h1 className="text-2xl pl-3 pt-3">Leave a comment</h1>
              <form>
                <label>
                  Name <sup> *</sup>
                </label>
                <input
                  type="text"
                  name="number"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>
                  Email <sup> *</sup>
                </label>
                <input
                  type="text"
                  name="Email"
                  value={Email}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>
                  Website <sup> *</sup>
                </label>
                <input
                  type="text"
                  name="Website"
                  value={Website}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>
                  Message <sup> *</sup>
                </label>
                <textarea
                  type="message"
                  name="Message"
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
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
        </div>
        <div className="BlogDetail__right ">
          <div className="pt-16 flex flex-col gap-5 ">
            <p className="flex">
              <input type="text" placeholder="KeyWord" />
              <button className="btn_search">
                <FaSearch />
              </button>
            </p>
            <h1 className="font-bold text-2xl">Categories</h1>
            <div className="flex flex-col border w-[280px] sm:w-[350px] rounded">
              <p className="flex justify-between border-b py-3 px-2">
                Web Design
                <span className="py-[2px] px-2  bg-orange-600 text-white rounded-2xl">
                  150
                </span>
              </p>
              <p className="flex justify-between border-b py-3 px-2">
                Web Development
                <span className="py-[2px] px-2  bg-orange-600 text-white rounded-2xl">
                  131
                </span>
              </p>
              <p className="flex justify-between border-b py-3 px-2">
                Online Marketing
                <span className="py-[2px] px-2  bg-orange-600 text-white rounded-2xl">
                  78
                </span>
              </p>
              <p className="flex justify-between border-b py-3 px-2">
                KeyWord Search
                <span className="py-[2px] px-2  bg-orange-600 text-white rounded-2xl">
                  56
                </span>
              </p>
              <p className="flex justify-between  py-3 px-2">
                Email Marketing
                <span className="py-[2px] px-2  bg-orange-600 text-white rounded-2xl">
                  98
                </span>
              </p>
            </div>
            <div className="w-[280px] sm:w-[350px] overflow-hidden">
              <img src={blog1} alt="upload pic" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Recent Post</h1>
            {BlogData3.map((it) => {
              return (
                <>
                  <Info image={it.image} />
                </>
              );
            })}
          </div>
          <div className="pt-16 flex flex-col gap-5 ">
            <div className="w-[280px] sm:w-[350px] overflow-hidden">
              <img src={blog2} alt="upload pic" />
            </div>
            <h1 className="font-bold text-2xl">Tag Cloud</h1>
            <div className="flex flex-col gap-2 w-[280px] sm:w-[350px] rounded">
              <div className="flex gap-2">
                <p className=" text-center  py-2 px-1 w-20 border border-red-400 rounded text-red-400 hover:bg-orange-600 hover:text-white">
                  Design
                </p>
                <p className=" text-center  py-2 px-1 w-28 border border-orange-400 rounded text-red-400 hover:bg-orange-600 hover:text-white">
                  Development
                </p>
                <p className=" text-center  py-2 px-1 w-24 border border-red-400 rounded text-red-400 hover:bg-orange-600 hover:text-white">
                  Marketing
                </p>
              </div>
              <div className="flex gap-2">
                <p className=" text-center  py-2 px-1 w-16 border border-red-400 rounded text-red-400 hover:bg-orange-600 hover:text-white">
                  SEO
                </p>
                <p className=" text-center  py-2 px-1 w-20 border border-orange-400 rounded text-red-400 hover:bg-orange-600 hover:text-white">
                  Writing
                </p>
                <p className=" text-center  py-2 px-1 w-24 border border-red-400 rounded text-red-400 hover:bg-orange-600 hover:text-white">
                  Consulting
                </p>
              </div>
            </div>
            <div className="w-[280px] sm:w-[350px] overflow-hidden">
              <img src={blog3} alt="upload pic" />
            </div>
            <h1 className="font-bold text-2xl">Plain Text</h1>
            <p className="text-left w-[280px] sm:w-[350px]">
              Aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat ea
              est aliquyam dolor et. Et no consetetur eos labore ea erat
              voluptua et. Et aliquyam dolore sed erat. Magna sanctus sed eos
              tempor rebum dolor, tempor takimata clita sit et elitr ut eirmod.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Info({ image }) {
  return (
    <>
      <div className="sm:w-[350px] justify-center items-center border-b pb-3">
        <p>{image}</p>
        <div className="flex flex-col items-start gap-2">
          <p className=" text-left">
            Lorem ipsum dolor sit amet consec adipis elit
          </p>
          <p className=" flex text-sm gap-3 ">
            <span className="flex justify-center items-center gap-1">
              <FaUser /> admin
            </span>
            <span className="flex justify-center items-center gap-1">
              <FaFolder />
              Web Design
            </span>
            <span className="flex justify-center items-center gap-1">
              <FaFolder />
              15
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

{
  /* {Data.map((it) => {
<div>
            return (
              <>
                <p>{it.Name}</p>
                <p>{it.Message}</p>
              </>
            );
            </div>;
          })} */
}
