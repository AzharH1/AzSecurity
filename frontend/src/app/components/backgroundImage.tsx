import Image from "next/image";
import curve from "../assets/layered-waves-haikei.svg";

function BackgroundImage() {
  return (
    <Image
      src={curve}
      alt={"background-image"}
      fill={true}
      style={{ objectFit: "cover" }}
      className="-z-10"
    />
  );
}

export default BackgroundImage;
