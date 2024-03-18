import BackgroundImage from "../components/backgroundImage";
import Footer from "../components/footer";
import Header from "../components/header";
import LoginBox from "./loginbox";

export default function Home() {
  return (
    <main>
      <Header />
      <LoginBox />
      <BackgroundImage />
      <Footer />
    </main>
  );
}
