import { Link } from "react-router-dom";
import noImage from "../assets/images/404.jpg";
import { Button } from "../components";
import { useTitle } from "../hooks";

export const PageNotFound = () => {

  useTitle(`Page Not Found`);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-darkTh dark:text-white text-7xl font-bold my-10" >404, This Page is not found</p>
          <div className="max-w-lg">
            <img className="rounded" src={noImage} alt="Page not found" />
          </div>
        </div>

        <div>
          <Link to="/" className="flex justify-center mt-4">
            <Button>Back to CineCorn</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
