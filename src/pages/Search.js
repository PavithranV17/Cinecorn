import { useSearchParams } from "react-router-dom";
import { useFetch, useTitle } from "../hooks";
import { Card } from "../components";

export const Search = ({apiPath}) => {

  const [searchText] = useSearchParams();
  const sText = searchText.get("q");
  const{eachMovie: movie} = useFetch(apiPath, sText);

  // Page title;
  useTitle(`Search result for ${sText}`);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movie.length === 0 ? `No result found for "${sText}"`: `Result found for "${sText}"`}</p>
      </section>
      <section className="mx-auto max-w-screen-xl py-7">
        <div className="flex flex-wrap justify-center">
          {
            movie.map(omovie => {
              return <Card key={omovie.id} omovie={omovie}/>
            })
          }
        </div>
      </section>
    </main>
  )
}
