import Image from "next/image";
import curve from "../assets/layered-waves-haikei.svg";

function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src={curve}
        alt={"background-image"}
        fill={true}
        style={{ objectFit: "cover" }}
        priority={true}
      />
    </div>
  );
}

export default BackgroundImage;
