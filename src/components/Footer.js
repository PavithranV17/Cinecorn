import { Link } from "react-router-dom";
import logo from "../assets/movie_logo.png";

export const Footer = () => {

    function Up(){
        window.scrollTo(0,0);
        return null;
    }

  return (
      <footer className="bg-white shadow dark:bg-gray-900 border-t-2 dark:border-gray-900">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <Link to="/" onClick={Up} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                      <img src={logo} className="h-8" alt="Flowbite Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CineCorn</span>
                  </Link>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li>
                          <a href="/" target="_blank" className="hover:underline me-4 md:me-6">About</a>
                      </li>
                      <li>
                          <a href="/" target="_blank" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="/" target="_blank" className="hover:underline me-4 md:me-6">Licensing</a>
                      </li>
                      <li>
                          <a href="/" target="_blank" className="hover:underline">Contact</a>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">CineCorn™</Link>. All Rights Reserved.</span>
          </div>
      </footer>
  )
}
