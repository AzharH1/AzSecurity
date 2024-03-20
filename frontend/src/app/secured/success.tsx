import Image from "next/image";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

function Success() {
  return (
    <>
      <Header />
      {/* Use a flex container to center the content */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white">
        <BackgroundImage />
        <div className="p-8 rounded-lg bg-white/30 backdrop-blur-md shadow-lg">
          <div className="text-4xl font-bold mb-4">Congratulations!</div>
          <p className="text-xl mb-4">
            You've successfully accessed the secure webpage.
          </p>
          <div className="text-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
