function Header() {
  return (
    <header className="bg-blue-500 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            AzSecurity
          </span>
        </div>

        <nav className="hidden md:flex pl-16 space-x-4">
          <a
            href={`/`}
            className="hover:bg-blue-700 px-3 py-2 rounded-md text-lg font-medium"
          >
            Home
          </a>
          <a
            href="/termsofuse"
            className="hover:bg-blue-700 px-3 py-2 rounded-md text-lg font-medium"
          >
            Terms of Use
          </a>
          <a
            href="https://www.google.com"
            className="hover:bg-blue-700 px-3 py-2 rounded-md text-lg font-medium"
          >
            Services
          </a>
          <a
            href="secured"
            className="hover:bg-blue-700 px-3 py-2 rounded-md text-lg font-medium"
          >
            UltraSecure Page
          </a>
        </nav>

        <div className="space-x-2">
          <a
            href="/login"
            className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 px-3 py-2 rounded-md text-base font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
