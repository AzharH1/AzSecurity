"use client";
import Image from "next/image";
import loginPicture from "../assets/loginPicture.svg";
import { useState } from "react";

function LoginHero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="sidebox pb-4 w-1/2 relative ">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-300 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      {imageLoaded && (
        <div className="picture-container flex flex-col items-center justify-center relative z-10 pt-24 text-teal-300 px-2">
          <h1 className="text-5xl">WELCOME</h1>
          <p className="text-xl text-center">
            Your just a few clicks away from greatness!
          </p>
        </div>
      )}
      <Image
        src={loginPicture}
        alt="loginPicture"
        fill={true}
        style={{ objectFit: "cover" }}
        onLoad={() => setImageLoaded(() => true)}
      />
    </div>
  );
}

export default LoginHero;
