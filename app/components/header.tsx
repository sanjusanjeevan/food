import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">My Application</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline" aria-label="Home Page">Home</Link>
            </li>
            <li>
              <Link href="/register/signup" className="hover:underline" aria-label="Sign Up Page">Sign Up</Link>
            </li>

            
            <li>
              <Link href="/register/login" className="hover:underline" aria-label="Login Page">Login</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline" aria-label="Contact Page">Contact</Link>
            </li>
          <a href="/admin/page" className="hover:underline" aria-label="Admin Page">Admin</a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
