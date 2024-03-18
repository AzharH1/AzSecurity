import Image from "next/image";
import SignUpHero from "./signuphero";
import SignUpForm from "./signupform";

function SignUp() {
  return (
    <>
      <div className="p-10">
        <div className=" rounded-2xl bg-slate-200 flex">
          <SignUpHero />
          <SignUpForm />
        </div>
      </div>
    </>
  );
}

export default SignUp;
