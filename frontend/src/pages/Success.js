import React from "react";
import SUCCESSIMAGE from "../assest/success.gif";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="bg-slate-100 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded">
      <img
        src={SUCCESSIMAGE}
        width={150}
        height={150}
        className="mix-blend-multiply"
      />
      <p className="text-green-600 font-bold text-xl">Payment Successful!</p>
      <button className="p-2 px-3 mt-5 border-2 bg-green-600 border-b-green-600 rounded font-semibold text-white">
        Thanks for Shopping!
      </button>
    </div>
  );
};

export default Success;
