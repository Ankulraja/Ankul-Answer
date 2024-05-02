import { useState } from "react";
import { Outlet } from "react-router";
import { GoPlusCircle } from "react-icons/go";
import { BsQuestionCircleFill } from "react-icons/bs";
import "./Dash.css";
import { Link } from "react-router-dom";
import { PredefinedText } from "./PredefinedText";
const Dash = () => {
  var preDefinString =
    "Ankul Please Answer The Following Question                                                        ";
  const [text, setText] = useState("");
  const [preText, setPreText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [result, setResult] = useState("");
  const [loader, setLoader] = useState(false);
  const [disable, setDisable] = useState(false);
  //   console.log("..............",PredefinedText[3].text)
  const preDefine = (value) => {
    setPreText(preDefinString.substring(0, value.length));
  };
  const changeHandler = (event) => {
    if (event.target.value.length === 1 && event.target.value === ".") {
      setToggle(true);
    }
    setText(event.target.value);
    if (toggle) {
      preDefine(event.target.value);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();

    setLoader(true);
    setTimeout(() => {
      var ans = "";
      if (toggle) {
        ans = text.substring(1, text.length);
      } else {
        var rand = Math.floor(Math.random() * 20) + 1;
        ans = PredefinedText[rand].text;
      }
      setResult(ans);
      setDisable(true);
      setLoader(false);
    }, 5000);
  };
  return (
    <div className="w-screen  min-h-screen ">
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
          <p className="pt-10 text-2xl text-gray-200">{result}</p>
        </div>
        <Link to={"/instruction"}>
          <button className="absolute top-[15%] right-[5%] text-4xl text-center text-white">
            <BsQuestionCircleFill></BsQuestionCircleFill>
          </button>
        </Link>
        {disable && (
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="absolute -bottom-[10%] right-[20%] text-6xl max-md:text-4xl max-md:-bottom-[6%] bg-blue-700 rounded-[50%] text-center text-white"
          >
            <GoPlusCircle></GoPlusCircle>
          </button>
        )}
      </div>
      {loader && <div className="loader"></div>}

      <div>
        <div className="w-7/12 max-sm:w-11/12 mx-auto my-14 ">
          <form
            onSubmit={submitHandler}
            className="w-11/12 mx-auto flex flex-col items-center"
          >
            <div className="relative w-full">
              <input
                required
                name="text"
                type="text"
                value={text}
                disabled={disable}
                onChange={changeHandler}
                placeholder="Petition"
                // autoComplete="off"
                autoComplete="off"
                className={`w-full  h-14 text-xl border-b border-gray-500 bg-slate-200 pl-1 outline-none  ${
                  toggle ? "text-transparent" : "text-black"
                }`}
              ></input>
              {toggle && (
                // <p className="pl-1 h-8  z-10 absolute top-4 text-xl overflow-x-scroll ">{preText}</p>
                <input type="text"
                value={preText}
                className="pl-1 absolute left-0 min-w-full z-10 bg-slate-200 top-4 text-xl"
                >
                </input>
                // <p className="pl-1 border h-10 border-green-600 z-10 absolute top-4 text-xl overflow-x-scroll">
                //   {preText}
                // </p>
                
              )}

              
            </div>

            <input
              required
              name="text"
              type="text"
              disabled={disable}
              placeholder="Question"
              autocomplete="off"
              className={`h-14 w-full text-xl my-5 bg-slate-200 border-b border-gray-500 pl-2 outline-none
             `}
            ></input>
            {!disable && (
              <button
                type="submit"
                className="py-3 px-5 bg-red-700 rounded-lg w-[100px] text-white"
              >
                ASK
              </button>
            )}
          </form>
        </div>
      </div>
      <div className="w-7/12 max-md:w-10/12 border pb-5 border-gray-300 mx-auto font-horror tracking-widest text-xl text-red-700">
        <p className="pt-6 px-5 border-t-2 border-red-700">
          Play at your own risk. We are not responsible for any paranormal
          activity that may occur
        </p>
        <p className="px-5">-By Owner</p>
      </div>
    </div>
  );
};
export default Dash;
