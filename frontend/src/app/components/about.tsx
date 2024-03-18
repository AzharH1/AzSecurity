import Image from "next/image";
import Hero from "./hero/hero";
import FullStackSecurity from "../assets/FullStackSecurity.svg";
function About() {
  return (
    <div className="text-white flex justify-center items-center pt-4 flex-col">
      <div className="text-6xl p-4">WELCOME</div>
      <div className="w-11/12 pb-4 relative">
        <Hero />
      </div>
      <p className="text-lg">This is my fullstack security project</p>
      <p className="text-lg pb-4 text-center">
        This project utilises many cutting edge industry technologies such as:
      </p>
      <ul className="flex md:flex-row flex-wrap items-center justify-center flex-col bg-white shadow-lg rounded-lg p-6 space-y-2 sm:space-y-0 sm:space-x-2">
        <li className="text-lg text-indigo-600 font-semibold">NextJS</li>
        <li className="text-lg text-green-500 font-semibold">Tailwind</li>
        <li className="text-lg text-purple-500 font-semibold">Redux</li>
        <li className="text-lg text-blue-500 font-semibold">Typescript</li>
        <li className="text-lg text-red-500 font-semibold">Java</li>
        <li className="text-lg text-green-700 font-semibold">SpringBoot</li>
        <li className="text-lg text-blue-700 font-semibold">PostgreSQL</li>
        <li className="text-lg text-gray-700 font-semibold">Docker</li>
        <li className="text-lg text-yellow-600 font-semibold">JWTs</li>
      </ul>
      <p className="pt-4">Follow the instructions in the README then login!</p>
    </div>
  );
}
export default About;
