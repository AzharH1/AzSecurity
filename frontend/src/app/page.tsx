import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import BackgroundImage from "./components/backgroundImage";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <About />
        <Footer />
      </main>
      <BackgroundImage />
    </>
  );
}
