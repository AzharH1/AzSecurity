import Image from "next/image";
import FullStackSecurity from "../../assets/FullStackSecurity.svg";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setImageLoaded } from "../../slices/imageSlice";

function ImageWrapper() {
  const imageIsLoading = useAppSelector((state) => state.imageLoaded.valueOf());
  const dispatch = useAppDispatch();
  return (
    <>
      {!imageIsLoading && (
        <div className="absolute inset-0 bg-gray-300 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <Image
        src={FullStackSecurity}
        alt="FS-Security-Image"
        quality={60}
        onLoad={() => dispatch(setImageLoaded(true))}
      />
    </>
  );
}
export default ImageWrapper;
