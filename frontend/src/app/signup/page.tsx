import BackgroundImage from "../components/backgroundImage";
import Footer from "../components/footer";
import Header from "../components/header";
import SignUp from "./signupbox";

export default function Home() {
  return (
    <main>
      <Header />
      <SignUp />
      <BackgroundImage />
      <Footer />
    </main>
  );
}
