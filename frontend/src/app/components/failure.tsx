import Image from "next/image";
import BackgroundImage from "./backgroundImage";
import Header from "./header";
import sadFace from "../assets/sadface.svg";

function Failure() {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:space-x-0 items-center justify-center ">
        <div className=" w-4/6 pt-4 flex items-center justify-around flex-col xl:flex-row bg-white bg-opacity-70">
          <div className="w-5/12 ">
            <Image src={sadFace} alt="sadface" quality={75} />
          </div>
          <div className="space-y-1">
            <div>Error 404 Could not find page!</div>
            <div>Please type in the correct URL</div>
          </div>
        </div>
      </div>
      <BackgroundImage />
    </>
  );
}

export default Failure;
