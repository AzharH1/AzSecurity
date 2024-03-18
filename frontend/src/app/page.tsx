import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import BackgroundImage from "./components/backgroundImage";
import GetHello from "./components/getHello";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <BackgroundImage />
      <GetHello />
      <Footer />
    </main>
  );
}
