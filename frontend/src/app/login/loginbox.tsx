import LoginForm from "./loginform";
import LoginHero from "./loginhero";

function LoginBox() {
  return (
    <>
      <div className="p-10">
        <div className=" rounded-2xl bg-slate-200 flex">
          <LoginHero />
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginBox;
