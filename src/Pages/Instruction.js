import { useState } from "react";
import { Outlet } from "react-router";
import { BiSolidMessageAlt } from "react-icons/bi";
import "./Dash.css";
import { Link } from "react-router-dom";
const Dash = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className="w-full h-72 bg-red-700 relative">
        <div className="w-7/12 mx-auto text-center">
          <div className="w-7/12 mx-auto pt-9 text-center flex justify-center items-center">
            <img
              className="w-20 h-20"
              alt="..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1714599274/UploadOnly/pngtree-halloween-hat-color-hat-horror-png-image_3801796-removebg-preview_zgv2rb.png"
            ></img>
            <h1 className="text-white font-bold text-3xl">Ankul Answers</h1>
          </div>
          <p className="text-white">Welcome To Ankul Answers...</p>
        </div>
        <Link to={"/"}>
          <button className="absolute top-[15%] right-[5%] text-4xl text-center text-white">
            <BiSolidMessageAlt></BiSolidMessageAlt>
          </button>
        </Link>
      </div>

      <div>
        <div className="w-6/12 mx-auto my-14 ">
          <h1 className="font-bold text-lg py-2">Instructions to play Peter Answers</h1>

          <p className="font-bold py-1 text-md">How to do the petition?</p>
          <p >The formula to enter the petition is by writing:<span className="font-bold text-red-700">Peter please answer the following question</span>  or simply:<span className="font-bold text-red-700"> Peter please answer</span>
            <p className="py-1">Press Enter to go to the following textbox.</p>
            
            <p className="font-bold pt-5 text-md">How to ask a question?</p>
            <p>Please keep a friendly and positive language. When your question is ready, press Ask. Wait for a while and you will see the answer</p>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Dash;
