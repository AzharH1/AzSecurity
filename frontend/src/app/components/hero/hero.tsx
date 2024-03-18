"use client";
import { Provider } from "react-redux";
import store from "../../store";
import ImageWrapper from "./heroimage";

const Hero = () => {
  return (
    <Provider store={store}>
      <ImageWrapper />
    </Provider>
  );
};

export default Hero;
