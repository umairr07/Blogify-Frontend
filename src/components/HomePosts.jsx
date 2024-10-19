import React from "react";

function HomePosts() {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {/* {post.title} */}
          Chapter 1: What is JavaScript?
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@Umair Shaikh</p>
          <div className="flex space-x-2 text-sm">
            {/* <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p> */}
          </div>
        </div>
        {/* <p className="text-sm md:text-lg">{post.desc.slice(0,200)+" ...Read more"}</p> */}
        <p className="text-sm md:text-lg">
          JavaScript is a programming language used to make websites interactive
          and dynamic. Think of it as the magic behind the scenes that allows
          you to click buttons, fill out forms, or see animations on your
          favorite websites. Whenever you do something on a webpage that makes
          it change or respond, JavaScript is likely involved.
        </p>
      </div>
    </div>
  );
}

export default HomePosts;
