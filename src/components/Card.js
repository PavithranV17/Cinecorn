import { Link } from "react-router-dom";
import noimg from "../assets/images/noposter.webp";

export const Card = ({omovie}) => {

    const {id, original_title, overview, poster_path} = omovie;
    const getImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;

   return (
     <>
      <div className="my-4 mx-2 max-w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/movies/${id}`}>
              <img className="rounded-t-lg p-2" src={poster_path ? getImg : noimg} alt="Movie Poster" />
          </Link>
          <div className="p-5">
              <Link to={`/movies/${id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
              <Link to={`/movies/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Know More
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </Link>
          </div>
      </div>
     </>
   )
 }
 