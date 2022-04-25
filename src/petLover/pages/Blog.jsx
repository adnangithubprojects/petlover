import React from "react";
import { BlogData } from "../asset/data/config";
import { BlogCard } from "../component/Card";
// import BlogCard from "../component/Card";
import "../style/blog.css";

export default function Blog() {
  return (
    <>
      <div className="Blog__Container ">
        <h2 className="text-green-600 text-lg sm:text-2xl font-bold">
          Pet Blog
        </h2>
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-black font-bold">
          <span className="text-orange-700">Updates</span> From Blog
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {BlogData.map((it) => {
            return (
              <>
                <BlogCard image={it.image} name={it.title} para={it.message} />
              </>
            );
          })}
          {BlogData.map((it) => {
            return (
              <>
                <BlogCard image={it.image} name={it.title} para={it.message} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
